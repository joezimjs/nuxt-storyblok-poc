<template>
	<span data-type="emoji" :data-name="blok.attrs.name">{{ blok.attrs.emoji }}</span>
</template>

<script setup lang="ts">
defineProps({
	blok: {
		type: Object as PropType<Record<string, any>>,
		required: true
	}
});
</script>
