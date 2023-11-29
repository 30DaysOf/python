import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({

	site: 'https://30DaysOf.github.io',
	base: `/python`,
	trailingSlash: 'always',

	integrations: [
		starlight({
			title: '#30DaysOf Python',
			description: 'Hands-on with Python: Core Concepts to AI/ML Apps',
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3
			},
			social: {
				github: 'https://github.com/30DaysOf/python'
			},
			logo: {
				src: './src/assets/pair-python.svg'
			},
			sidebar: [
				/*
				{
					label: 'Python Basics',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Concepts', link: '/fundamentals/example' },
					],
				},
				*/
				{
					label: 'Python3 In #30Days',
					link: '/introduction',
				},
				{
					label: '1. Python Basics',
					autogenerate: { directory: '01-basics' },
				},
				{
					label: '2. Python Functions',
					autogenerate: { directory: '02-functions' },
				},
				{
					label: '3. Data Collection',
					autogenerate: { directory: '03-data' },
				},
				{
					label: '4. Python Classes',
					autogenerate: { directory: '04-classes' },
				},
				{
					label: '5. Python Project',
					autogenerate: { directory: '05-project' },
				},
			],
		}),
	],
});
