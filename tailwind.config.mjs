/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'about-image': "url('./public/logo.svg')"
			}
		},
	darkMode: 'class'
	},
	plugins: [],
}
