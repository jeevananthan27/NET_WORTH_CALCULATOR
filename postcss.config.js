// E:/my-finance-app/postcss.config.js

// Ensure you are using the correct ESM export syntax (export default)
// since your project has "type": "module" in package.json
export default {
  plugins: {
    // 🚨 CHANGE THIS LINE 🚨
    '@tailwindcss/postcss': {}, // Use the new, dedicated PostCSS plugin
    'autoprefixer': {},
  },
}