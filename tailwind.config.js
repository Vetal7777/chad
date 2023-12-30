/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      'chad-blue-0': '#32ABF2',
      'chad-blue-30': '#96CAF7',
      'md-dark-blue-20': '#134267',
      'md-dark-blue-60': '#5D7FA3'
    },
    extend: {
      backgroundImage: {
        'linear-gradient':
          'linear-gradient(339deg, #0D3251 0%, #19476C 103.05%)'
      },
      spacing: {
        'stat-slide': '364px',
        'steps-gap': '48px',
        '2px': '2px',
        'step-line-50%': 'calc(50% - 1px)',
        'step-line-100%': 'calc(100% + 2px)'
      }
    }
  },
  plugins: []
}
