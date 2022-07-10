<script setup>
	defineProps({ blok: Object })
</script>

<template>
	<div v-editable="blok" class="font-[Roboto,sans-serif] px-4">
		<StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
	</div>
</template>
