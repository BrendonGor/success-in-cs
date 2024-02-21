import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// without this pages config don't need base
	site: 'https://brendongor.github.io/success-in-cs/',
	base: '/success-in-cs', // seems starlight already prepends this to the links in sidebar but not to rest internal page links
	integrations: [
		starlight({
			title: 'CS 1960',
			customCss: [
				// Path to your Tailwind base styles:
				'./src/styles/custom.css',
			  ],
			logo: {
				src: './src/assets/Ulogo_RGB.png',
			  },
			social: {
				github: 'https://github.com/BrendonGor/success-in-cs',
			},
			editLink: {
				baseUrl: 'https://github.com/BrendonGor/success-in-cs/edit/main/',
			  },
			sidebar: [
				{
					label: 'Academics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Scholarships', link: '/academics/scholarships/' },
					],
				},
				{
					label: 'Social',
					autogenerate: { directory: 'social' },
				},
			],
		}),
	],
});
