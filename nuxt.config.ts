// https://v3.nuxtjs.org/api/configuration/nuxt.config

const isProd = import.meta.env.PROD

export default defineNuxtConfig({
	modules: [
		['@storyblok/nuxt', {
			accessToken: import.meta.env.STORYBLOK_ACCESS_TOKEN,
			apiOptions: {
				region: 'us',
				version: isProd ? 'published' : 'draft'
			},
			bridge: !isProd // optimizes by excluding the bridge on production
		}],
		['@nuxtjs/tailwindcss', {
			/* https://tailwindcss.nuxtjs.org/getting-started/options */
		}],
		// 'nuxt-speedkit', // https://github.com/GrabarzUndPartner/nuxt-speedkit
		// 'nuxt-security', // https://github.com/Baroshem/nuxt-security
		// partytown, algolia, supabase?, Headless UI/shadcn, og-image?, icons, cloudflare-analytics (or any analytics), authjs (or supabase), drizzle, zod
		// ['unplugin-vue-inspector/nuxt', {
		// 	enabled: !isProd && false,
		// 	toggleButtonVisibility: 'active'
		// }],
		'@nuxt/image',
		'@vue-macros/nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/seo'
	],

	macros: {
		defineProp: { edition: 'johnsonEdition' }
	},

	image: {
		storyblok: { baseURL: 'https://a-us.storyblok.com' }
	},

	experimental: {
		componentIslands: true
	},

	components: [
		{ path: '~/components/bloks', global: true, pathPrefix: false },
		{ path: '~/components', global: true, pathPrefix: false }
	],

	devServer: {
		https: {
			key: 'localhost.pem',
			cert: 'localhost.cert.pem'
		}
	},

	devtools: {
		enabled: false
	}
})
