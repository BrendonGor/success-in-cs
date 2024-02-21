import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
