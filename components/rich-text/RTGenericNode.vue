<template>
	<component :is="tag" v-bind="attrs">
		<template v-for="(node, i) of nodes" :key="i">
			<component :is="node.component" :blok="node.blok" />
		</template>
	</component>
</template>

<script setup lang="ts">
import type { RichTextData } from '@/utils/simplifyRichTextData';
const props = defineProps({
	blok: {
		type: Object as PropType<Record<string, any>>,
		required: true
	},
	tag: {
		type: String,
		default: 'div'
	},
	attrs: {
		type: Object as PropType<Record<string, string>>,
		default: () => {}
	}
});

const nodes = computed(() => simplifyRichTextData(props.blok as RichTextData));
</script>
