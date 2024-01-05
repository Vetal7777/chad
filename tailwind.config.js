/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'chad-blue-0': '#32ABF2',
        'chad-blue-30': '#96CAF7',
        'md-dark-blue-20': '#134267',
        'md-dark-blue-60': '#5D7FA3',
        'md-shade-40': '#4F637D',
        'md-shade-80': '#C3CAD5',
        'md-shade-100': '#F8F9FC'
      },
      padding: {
        4.25: '17px',
        2.75: '11px',
        0.75: '3px'
      },
      backgroundImage: {
        'progress-indicator-gradient':
          'linear-gradient(339deg, #0D3251 0%, #19476C 103.05%)',
        'auth-container': "url('/form-background.webp')"
      },
      spacing: {
        'stat-slide': '364px',
        'steps-gap': '48px',
        'step-gap-active': '34px',
        '2px': '2px',
        'step-line-50%': 'calc(50% - 1px)',
        'step-line-100%': 'calc(100% + 2px)'
      },
      borderWidth: {
        1.5: '1.5px'
      },
      boxShadow: {
        'auth-form': '0px 5px 20px 0px rgba(108, 117, 139, 0.20)'
      },
      gap: {
        0.5: '2px'
      },
      maxWidth: {
        120: '480px'
      },
      scale: {
        131.25: '131.25%'
      }
    }
  },
  plugins: []
}
