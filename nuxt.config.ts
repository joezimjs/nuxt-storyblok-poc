import Inspector from 'unplugin-vue-inspector/vite';

// https://v3.nuxtjs.org/api/configuration/nuxt.config

const isProd = process.env.NODE_ENV === 'production';

export default defineNuxtConfig({
	extends: ['nuxt-seo-kit'],

	modules: [
		'@storyblok/nuxt',
		'@nuxtjs/tailwindcss',
		['unplugin-vue-inspector/nuxt', {
			enabled: true,
			toggleButtonVisibility: 'always'
		}]
		// 'nuxt-speedkit'
	],

	experimental: {
		componentIslands: true
	},

	components: [
		{
			path: '~/components/rich-text',
			global: true
		}
	],

	devServer: {
		https: {
			key: 'localhost.pem',
			cert: 'localhost.cert.pem'
		}
	},
	devtools: true,

	storyblok: {
		accessToken: process.env.STORYBLOK_TOKEN,
		apiOptions: {
			region: 'us',
			version: isProd ? 'published' : 'draft'
		},
		bridge: !isProd // optimizes by excluding the bridge on production
	},

	tailwindcss: {
		/* https://tailwindcss.nuxtjs.org/getting-started/options */
	}
});
