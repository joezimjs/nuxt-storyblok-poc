<template>
	<template v-for="(node, i) of nodes" :key="i">
		<component :is="node.component" :blok="node.blok" />
	</template>
</template>

<script setup lang="ts">
import type { RichTextData } from '@/utils/simplifyRichTextData';
const props = defineProps({
	data: {
		type: Object as PropType<Record<string, any>>,
		required: true
	}
});

const nodes = computed(() => simplifyRichTextData(props.data as RichTextData));
</script>
