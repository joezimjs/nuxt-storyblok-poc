<template>
	<RTGenericNode :blok="blok" tag="blockquote" />
</template>

<script setup lang="ts">
import RTGenericNode from './RTGenericNode.vue';

defineProps({
	blok: {
		type: Object as PropType<Record<string, any>>,
		required: true
	}
});
</script>
