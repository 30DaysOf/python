import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({

	site: 'https://30DaysOf.github.io',
	base: `/python`,
	trailingSlash: 'always',

	integrations: [

		starlight({
			title: 'Python3',
			description: 'Python3 Cookbook. One Recipe A Day.',
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3
			},
			logo: {
				light: './src/assets/logo.png',
				dark: './src/assets/logo.png',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/30DaysOf/python',
				twitter: 'https://twitter.com/nitya',
				youtube: 'https://www.youtube.com/@NityaNarasimhan',
			},
			sidebar: [
				{
					label: 'Overview',
					link: 'introduction',
				},
				{
					label: '1 | Python Basics',
					autogenerate: { directory: '100' },
				},
				{
					label: '2 | Data Analysis',
					autogenerate: { directory: '200' },
				},
				{
					label: '3 | Machine Learning',
					autogenerate: { directory: '300' },
				},
				{
					label: '4 | Generative AI',
					autogenerate: { directory: '400' },
				},
			],
		}),
	],
});
