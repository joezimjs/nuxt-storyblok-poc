<template>
	<RTGenericNode :blok="blok" :tag="tagName" />
</template>

<script setup lang="ts">
import RTGenericNode from './RTGenericNode.vue';

const props = defineProps({
	blok: {
		type: Object as PropType<Record<string, any>>,
		required: true
	}
});

const tagName = computed(() => 'h' + props.blok.attrs.level);
</script>
