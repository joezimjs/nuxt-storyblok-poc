<script setup>
defineProps({
	blok: {
		type: Object,
		required: true
	}
});
</script>

<template>
	<div v-editable="blok" class="font-[Roboto,sans-serif] px-4">
		<StoryblokComponent v-for="aBlok in blok.body" :key="aBlok._uid" :blok="aBlok" />
	</div>
</template>
