// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // THIS MUST BE CORRECT
  content: [
    "./index.html",
    // This glob pattern MUST match your file (Home.jsx)
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}