/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {},
    colors:{
      "header-red-100":"#E83845",
      "gray-bg":"#0f0f0f",
      "green-button":"#41bf52",
      "blue-140":"#56d0db",
      
    }
  },
  plugins: [],
}