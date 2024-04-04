<script setup lang="ts">
import type { GridStoryblok } from './bloks'

const blok = defineProp<GridStoryblok>(undefined, true)
</script>

<template>
	<div v-editable="blok" class="container mx-auto grid grid-cols-3 gap-12 place-items-center py-16">
		<StoryblokComponent v-for="aBlok in blok.columns" :key="aBlok._uid" :blok="aBlok" />
	</div>
</template>
