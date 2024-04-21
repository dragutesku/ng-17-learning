/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "general": '#ecf4f8',
      'slate-50': '#f8fafc',
      'primary-emerald-500': '#22c55e',
      'secondary-sky-500': '#0ea5e9',
      'gray-100': '#f3f4f6',
      'gray-300': '#d1d5db',
      'gray-400': '#9ca3af',
      'gray-500': '#6b7280',
      white: '#ffffff',
      black: '#000000',
    },
    extend: {
      spacing: {
        0: '0',
        0.4: '4px',
        0.5: '.5px',
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '40px',
        6: '48px',
        7: '56px',
        8: '64px',
        9: '72px',
        10: '80px',
        11: '88px',
        12: '96px',
        13: '104px',
        14: '112px',
        15: '120px',
        modal: '496px',
        sidenav: '150px',
        'modal-select': '128px',
      },
      fontSize: {
        sm: '12px',
        base: '14px',
        xl: '16px',
        '2xl': '18px',
        '3xl': '20px',
        '4xl': '24px',
        '5xl': '30px',
        '6xl': '36px',
        '7xl': '48px',
        '8xl': '60px',
        '9xl': '72px',
      },
    },
  },
  plugins: [],
}

