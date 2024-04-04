<script setup lang="ts">
import type { PageStoryblok } from './bloks'

const blok = defineProp<PageStoryblok>(undefined, true)
</script>

<template>
	<div v-editable="blok" class="font-[Roboto,sans-serif] px-4">
		<StoryblokComponent v-for="aBlok in blok.body" :key="aBlok._uid" :blok="aBlok" />
	</div>
</template>
