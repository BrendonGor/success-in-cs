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
				// generally label and title identical but can be different
				// title generally is or expands on file name
				{
					label: 'Advice',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'TAs and PMs', link: '/advice/tas_pms/' }, // label is for sidebar, title is what goes at top of page
						{ label: 'Professors', link: '/advice/professors/' },
						{ label: 'Students', link: '/advice/students/' },
						{ label: 'Alumni', link: '/advice/alumni/' },
					],
				},
				{
					label: 'Academics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Degree Paths', link: '/academics/degree_paths/' }, // label is for sidebar, title is what goes at top of page
						{ label: 'Research', link: '/academics/research/' },
						{ label: 'Internships', link: '/academics/internships/' },
						{ label: 'Scholarships', link: '/academics/scholarships/' },
					],
				},
				{
					label: 'Career',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Career Paths', link: '/career/career_paths/' },
						{ label: 'Optimizing', link: '/career/optimization/' },
					],
				},
				{
					label: 'Social',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Athletics & Arts', link: '/social/athletics_arts/' }, 
						{ label: 'Clubs', link: '/social/clubs/' },
						{ label: 'Studying', link: '/social/studying/' },
						{ label: 'Utah', link: '/social/location/' },
					],
				},
				{
					label: 'Wellness',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Learning', link: '/wellness/learning/' }, 
						{ label: 'Fitness', link: '/wellness/fitness/' },
						{ label: 'Tech', link: '/wellness/tech/' },
					],
				},
				// {
				// 	label: 'Social',
				// 	autogenerate: { directory: 'social' },
				// },
			],
			favicon: '/U_medallion_WHITE.png',
		}),
	],
});
