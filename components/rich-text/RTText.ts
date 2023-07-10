type Mark = {
	type: 'anchor' | 'bold' | 'code' | 'highlight' | 'italic' | 'link' | 'strike' | 'strong' | 'styled' | 'subscript' | 'superscript' | 'textStyle' | 'underline',
	attrs?: Record<string, string>
}
type Child = string | number | boolean | VNode;

type TextNode = {
	type: 'text',
	text: string,
	marks?: Mark[]
}

type RTTextProps = {
	blok: TextNode
}

function RTText (props: RTTextProps) {
	const out = !props.blok.marks
		? props.blok.text
		: props.blok.marks.reduce((child:Child, mark) : string | VNode => {
			return marks[mark.type](mark, child);
		}, props.blok.text);

	return out;
}

RTText.props = {
	blok: {
		type: Object as PropType<Record<string, any>>,
		required: true
	}
};

export default RTText;

type ColorMark = Mark & {
	attrs: {
		color: string
	}
}

type LinkMark = Mark & {
	attrs: {
		linktype: string,
		href: string,
		anchor?: string,
		custom?: Record<string, string>,
		[x: string]: any
	}
}

const marks = {
	anchor: (mark: Mark, child: Child) => {
		return h('span', mark.attrs, [child]);
	},
	bold: (mark: Mark, child: Child) => {
		return h('strong', mark.attrs, [child]);
	},
	code: (mark: Mark, child: Child) => {
		return h('code', mark.attrs, [child]);
	},
	highlight: (mark: Mark, child: Child) => {
		const m = mark as ColorMark;
		const attrs = {
			style: `background-color:${m.attrs.color}`
		};
		return h('span', attrs, [child]);
	},
	italic: (mark: Mark, child: Child) => {
		return h('em', mark.attrs, [child]);
	},
	link: (mark: Mark, child: Child) => {
		const m = mark as LinkMark;
		const attrs = { ...m.attrs };
		const { linktype = 'url' } = m.attrs ?? {};

		if (linktype === 'email') {
			attrs.href = `mailto:${attrs.href}`;
		}

		if (attrs.anchor) {
			attrs.href = `${attrs.href}#${attrs.anchor}`;
			delete attrs.anchor;
		}

		if (attrs.custom) {
			for (const key in attrs.custom) {
				attrs[key] = attrs.custom[key];
			}
			delete attrs.custom;
		}
		return h('a', attrs, [child]);
	},
	strike: (mark: Mark, child: Child) => {
		return h('strike', mark.attrs, [child]);
	},
	strong: (mark: Mark, child: Child) => {
		return h('strong', mark.attrs, [child]);
	},
	styled: (mark: Mark, child: Child) => {
		return h('span', mark.attrs, [child]);
	},
	subscript: (mark: Mark, child: Child) => {
		return h('sub', mark.attrs, [child]);
	},
	superscript: (mark: Mark, child: Child) => {
		return h('sup', mark.attrs, [child]);
	},
	textStyle: (mark: Mark, child: Child) => {
		const m = mark as ColorMark;
		const attrs = {
			style: `color:${m.attrs.color}`
		};
		return h('span', attrs, [child]);
	},
	underline: (mark: Mark, child: Child) => {
		return h('u', mark.attrs, [child]);
	}
};
