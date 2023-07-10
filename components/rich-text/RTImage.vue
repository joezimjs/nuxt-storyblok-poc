<template>
	<img :src="blok.attrs.src" :alt="blok.attrs.alt" :title="blok.attrs.title">
</template>

<script setup lang="ts">
defineProps({
	blok: {
		type: Object as PropType<Record<string, any>>,
		required: true
	}
});
</script>
