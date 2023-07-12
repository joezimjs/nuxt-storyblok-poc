<script setup>
import RichText from '@/components/RichText';
defineProps({
	blok: {
		type: Object,
		required: true
	}
});
</script>

<template>
	<div v-editable="blok" class="prose prose-xl">
		<h2 class="py-8 mb-6 text-5xl font-bold text-center">
			{{ blok.headline }}
		</h2>
		<div class="p-5 py-20 mb-20 border-y border-slate-700">
			<RichText :data="blok.text" />
		</div>
	</div>
</template>
