/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 20px ${color1}, 0 0 50px ${color2}`
          };
        }
      }
      addUtilities(neonUtilities)
    })
  ],
}

