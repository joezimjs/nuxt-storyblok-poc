type RichTextBlokNode = {
	type: 'blok',
	attrs: {
		body: Array<{component: any}>
	}
}

type RichTextNode = {
	type: string
	attrs: Record<string, any>
} | RichTextBlokNode

type RichTextData = Ref<{
	content: RichTextNode[]
}>

export default function simplifyRichTextData (data: RichTextData) {
	try {
		return data.value?.content?.map((node) => {
			if (node.type === 'blok') {
				return (node as RichTextBlokNode).attrs?.body?.map(blok => ({
					component: blok.component,
					blok
				}));
			}
			else {
				return {
					// Convert snake case node type to pascal case, prefixed with RT (RichText)
					component: ('RT' + node.type[0].toUpperCase() + node.type.slice(1)).replace(/(_[a-z])/g, group =>
						group.toUpperCase().replace('_', '')
					),
					blok: node
				};
			}
		}).flat();
	}
	catch (e) {
		console.error('Malformed Rich Text Data');
		return null;
	}
}
