<template>
	<main>
		<DefaultHeader />
		<slot />
	</main>
</template>

<script setup>
import DefaultHeader from './default/StaticHeader.vue';
</script>
