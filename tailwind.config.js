/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0FF1F6',
        secondary:'#96ACAF',
        foreground:'#02242A',
        default:'#ffff',
        Highlight:'#0FF1F6',
        Light:'#14BCB2',
        success:'#183A40'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],

}

