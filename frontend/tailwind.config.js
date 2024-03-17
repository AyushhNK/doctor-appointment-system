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
        dark_blue:"#2B1E76",
        blue:"#586EEC",
        bluish:"#586EEC",
        light_blue:"#80B3FF",
        orange:"#DE8F5F",
        gray:"#798B8A",
        light_gray:"#D9D9D9"
    	},
    },
  },
  plugins: [],
}