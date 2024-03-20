const colors = require('tailwindcss/colors')
module.exports = {
  mode:"jit",
  drakmode:"class",
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        // Configure your color palette here
        'cyan':colors.cyan,
        'teal':colors.teal,
        'dark' :'#232A3C',
        'medium': '#293245'
      }
    },
  },
  plugins: [],
}

