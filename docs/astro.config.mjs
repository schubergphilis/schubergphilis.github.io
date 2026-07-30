// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// This is the root org site (https://schubergphilis.github.io), so it deploys
// at the domain root - no base path. Project sites (e.g. mdd) live under their
// own subpaths (https://schubergphilis.github.io/mdd/) and are unaffected.
// https://astro.build/config
export default defineConfig({
	site: 'https://schubergphilis.github.io',
	integrations: [
		starlight({
			title: 'Schuberg Philis Open Source',
			description: 'Open source projects from Schuberg Philis.',
			logo: {
				src: './src/assets/logo.png',
				alt: 'Schuberg Philis',
			},
			favicon: '/favicon.png',
			head: [
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
				},
				{
					tag: 'link',
					attrs: { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
				},
				// Poppins/Poppins is the brandbook's documented fallback for TT
				// Interphases, the licensed SBP brand typeface. See src/styles/custom.css.
				{ tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap',
					},
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/schubergphilis' },
				{ icon: 'external', label: 'schubergphilis.com', href: 'https://schubergphilis.com' },
			],
			// A single landing page; hide pagination and disable search (one page).
			pagination: false,
			pagefind: false,
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
