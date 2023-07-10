<template>
	<RTGenericNode :blok="blok" tag="p" />
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
