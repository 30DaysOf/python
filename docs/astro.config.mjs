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
				maxHeadingLevel: 4
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
					label: '100. Python Basics',
					autogenerate: { directory: '100' },
				},
				{
					label: '200. Data Analysis',
					autogenerate: { directory: '200' },
				},
				{
					label: '300. Machine Learning',
					autogenerate: { directory: '300' },
				},
				{
					label: '400. Generative AI',
					autogenerate: { directory: '400' },
				},
			],
		}),
	],
});
