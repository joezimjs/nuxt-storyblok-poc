<script setup lang="ts">
import type { FeatureStoryblok } from './bloks'

const blok = defineProp<FeatureStoryblok>(undefined, true)
</script>

<template>
	<div v-editable="blok" class="w-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden">
		<img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt" class="w-full h-48 xl:h-72 object-cover">
		<div class="px-12 py-6">
			<h3 class="text-2xl text-[#1d243d] font-bold">
				{{ blok.name }}
			</h3>
		</div>
	</div>
</template>
