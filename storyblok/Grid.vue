<script setup>
defineProps({
	blok: {
		type: Object,
		required: true
	}
});
</script>

<template>
	<div v-editable="blok" class="container mx-auto grid grid-cols-3 gap-12 place-items-center py-16">
		<StoryblokComponent v-for="aBlok in blok.columns" :key="aBlok._uid" :blok="aBlok" />
	</div>
</template>
