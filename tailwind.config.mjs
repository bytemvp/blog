/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
	darkMode: ["class", '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				accent: "var(--accent)",
				"accent-dark": "var(--accent-dark)",
				"gray-light": "rgb(var(--gray-light))",
				gray: "rgb(var(--gray))",
				"gray-dark": "rgb(var(--gray-dark))",
				black: "rgb(var(--black))",
			},
			boxShadow: {
				card: "var(--box-shadow)",
			},
			fontFamily: {
				sans: ["Atkinson", "sans-serif"],
			},
		},
	},
	plugins: [],
};
