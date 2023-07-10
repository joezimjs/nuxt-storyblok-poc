<script setup lang="ts">
let { slug } = useRoute().params;

if (Array.isArray(slug)) {
	slug = slug[0];
}

const story = await useAsyncStoryblok(slug || 'home', {
	version: 'draft'
});
</script>

<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
