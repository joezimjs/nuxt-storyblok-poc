import { ISbRichtext, ISbSchema, RichTextSchema } from '@storyblok/js';
import { StoryblokComponent, SbBlokData } from '@storyblok/vue';
import { DefineComponent, VNode } from 'vue';

type NodeType = keyof (typeof RichTextSchema.nodes)
type MarkType = keyof (typeof RichTextSchema.marks)
type Tag = {
	tag: string,
	attrs?: Record<string, any>
}

const RichText: DefineComponent<{
	data: { type: PropType<ISbRichtext>, required: true },
	schema: { type: PropType<ISbSchema>, default: typeof RichTextSchema }
}> = defineComponent({
	name: 'RichText',
	props: {
		data: { type: Object as PropType<ISbRichtext>, required: true },
		schema: { type: Object as PropType<ISbSchema>, default: RichTextSchema }
	},
	setup (props) {
		return () => {
			if (props.data && Array.isArray(props.data.content)) {
				const results = props.data.content.map((node) => {
					if (node.type === 'blok') {
						return node.attrs.body.map((blok: SbBlokData) => {
							return h(StoryblokComponent, { blok });
						});
					}
					return renderNode(node, props.schema);
				}).filter(node => !!node);

				// console.debug('results', ++counter, results);
				return results;
			}
			console.warn(
				`The render method must receive an Object with a "content" field.
				The "content" field must be an array of nodes as the type ISbRichtext.
				ISbRichtext:
					content?: ISbRichtext[]
					marks?: ISbRichtext[]
					attrs?: any
					text?: string
					type: string

					Example:
					{
						content: [
							{
								content: [
									{
										text: 'Hello World',
										type: 'text'
									}
								],
								type: 'paragraph'
							}
						],
						type: 'doc'
					}`, props.data
			);
			return null;
		};
	}
});

function renderNode (item: ISbRichtext, schema: ISbSchema) {
	let node;

	// Convert data to standard schema
	const nodeSchema = schema.nodes[item.type as NodeType];
	if (typeof nodeSchema === 'function') {
		node = nodeSchema(item);
	}

	// Single (non-wrapper) tags
	if (node && node.singleTag) {
		return renderTag(node.singleTag, node.attrs);
	}

	// Wrapper tag(s)
	if (node && node.tag) {
		let tag = node.tag;
		let content = item.content;

		if (item.type === 'emoji') {
			if (item.attrs.emoji) {
				content = item.attrs.emoji;
			}
			else {
				tag = [
					{
						tag: 'img',
						attrs: {
							src: item.attrs.fallbackImage,
							draggable: 'false',
							loading: 'lazy',
							align: 'absmiddle'
						}
					}
				] as Tag[];
			}
		}

		return renderTag(tag, node.attrs, typeof content === 'string' ? content : h(RichText, { data: { content } as ISbRichtext }));
	}

	// Text Node
	if (item.text) {
		if (!item.marks || !item.marks.length) {
			return item.text;
		}

		// Build mark wrappers from the inside out
		return item.marks
			.map((mark: ISbRichtext) => {
				const node = schema.marks[mark.type as MarkType];
				if (typeof node === 'function') {
					return node(mark) ?? null;
				}
				return null;
			})
			.filter(mark => !!mark)
			.reverse()
			.reduce((content: string | VNode, mark: Tag) => {
				return renderTag(mark.tag, mark.attrs, content);
			}, item.text);
	}

	return null;
}

function renderTag (tag: string | Array<string | Tag>, attrs?: Record<string, any>, content?: string | VNode) {
	if (Array.isArray(tag)) {
		// Array of single tags: reverse order and build from inside out.
		return tag.slice().reverse().reduce((innerNode: VNode | null | string, tagItem: string | Tag) => {
			if (typeof tagItem === 'string') {
				return h(tagItem, undefined, [innerNode]);
			}
			else {
				return h(tagItem.tag, tagItem.attrs, innerNode ? [innerNode] : undefined);
			}
		}, content ?? null);
	}
	else if (typeof tag === 'string') {
		// Just a single tag name string
		return h(tag, attrs, content ? [content] : undefined);
	}

	return null;
}

export default RichText;
