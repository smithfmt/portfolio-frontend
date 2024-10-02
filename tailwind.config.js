/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	],
	darkMode: "class",
	theme: {
		colors: {
			primary: {
				100: "#cff7f0",
				200: "#9eefe1",
				300: "#6ee8d1",
				400: "#3de0c2",
				500: "#0dd8b3",
				600: "#0aad8f",
				700: "#08826b",
				800: "#055648",
				900: "#032b24"
			},

			secondary: {
				100: "#dfe9fd",
				200: "#bfd2fb",
				300: "#9fbcfa",
				400: "#7fa5f8",
				500: "#5f8ff6",
				600: "#4c72c5",
				700: "#395694",
				800: "#263962",
				900: "#131d31"
			}, 

			accent: {
				100: "#fef5d0",
				200: "#fdeba1",
				300: "#fce073",
				400: "#fbd644",
				500: "#facc15",
				600: "#c8a311",
				700: "#967a0d",
				800: "#645208",
				900: "#322904"
			},

			transparent: "transparent",
			current: "currentColor",
			black: "#000000",
			white: "#ffffff",
			neutral: colors.neutral,
			positive: "#5bb450",
		},
		extend: {
			screens: {
				xs: "450px",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeRight: {
					"0%": { opacity: 0, transform: "translateX(-100%)", scale: 0.5 },
					"100%": { opacity: 1, transform: "translateX(0%)", scale: 1 },
				},
				fadeLeft: {
					"0%": { opacity: 0, transform: "translateX(100%)", scale: 0.5 },
					"100%": { opacity: 1, transform: "translateX(0%)", scale: 1 },
				},
				getAgressivelyLarge: {
					"0%": { scale: "1", transform: "translateX(0)" },
					"100%": { scale: "3", transform: "translateX(2%)" },
				},
				flipIn: {
					"0%": { transform: "translateY(20%) rotateX(-45deg) rotateY(5deg)" },
					"100%": { transform: "translateY(0) rotateX(0) rotateY(0)" },
				},
				shootIn: {
					"0%": { transform: "translateX(100rem)" },
					"50%": { transform: "translateX(10rem)" },
					"100%": { transform: "translateX(0)" },
				},
			},
			animation: {
				fadeIn: "fadeIn 1.5s ease-in-out forwards",
				flipIn: "flipIn 0.5s ease-in-out forwards",
				shootIn: "shootIn 0.3s ease-in-out forwards",
				fadeRight: "fadeRight 0.2s ease-in-out forwards",
				fadeLeft: "fadeLeft 0.2s ease-in-out forwards",
			},
			boxShadow: {
				"inset": "inset 4px 4px 8px rgba(0,0,0,0.6), inset -4px -4px 8px rgba(0,0,0,0.6)",
				"inset-white": "inset 4px 4px 8px rgba(250,250,250,0.4), inset -4px -4px 8px rgba(250,250,250,0.4)",
				"inset-b-white": "inset 0px -4px 8px rgba(250,250,250,0.4)",
				"insetAll": "inset 4px 4px 8px rgba(250,250,250,0.4), inset -4px -4px 8px rgba(250,250,250,0.4)",
				"insetBottom": "inset 0px -4px 8px rgba(250,250,250,0.4)",
				"light": "0px 4px 8px rgba(0, 0, 0, 0.1)",
				"mid": "0 4px 8px rgba(0,0,0,0.2)",
				"big": "-2px 4px 8px rgba(0,0,0,0.25)",
				"strong": "-4px 8px 12px rgba(0, 0, 0, 0.4)",
				"star-white": "0 0 0 0.4vw rgba(255, 255, 255, 0.1), 0 0 0 0.8vw rgba(255, 255, 255, 0.1), 0 0 1.2vw #ffff",
				"star-red": "0 0 0 0.4vw rgba(255, 255, 255, 0.1), 0 0 0 0.8vw rgba(255, 255, 255, 0.1), 0 0 1.2vw #facfcf",
				"star-blue": "0 0 0 0.4vw rgba(255, 255, 255, 0.1), 0 0 0 0.8vw rgba(255, 255, 255, 0.1), 0 0 1.2vw #d1ceff",
				"star-green": "0 0 0 0.4vw rgba(255, 255, 255, 0.1), 0 0 0 0.8vw rgba(255, 255, 255, 0.1), 0 0 1.2vw #ccfbc4",
				"star-yellow": "0 0 0 0.4vw rgba(255, 255, 255, 0.1), 0 0 0 0.8vw rgba(255, 255, 255, 0.1), 0 0 1.2vw #fbf6c2",
				"glow-white": "1px 1px 4px rgba(250, 250, 250, 0.5), inset 1px 1px 4px rgba(250, 250, 250, 0.5)",
			},
		},
	},
	plugins: [
	],
};
