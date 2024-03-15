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
        blue:"#586EEC",
        light_blue:"#80B3FF",
        orange:"#DE8F5F"
    	},
    },
  },
  plugins: [],
}