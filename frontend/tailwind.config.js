/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    	colors:{
    		purple:"#B650E6",
    		light_purple:"#C162ED",
    		gray:"#636364",
    	},
    },
  },
  plugins: [],
}