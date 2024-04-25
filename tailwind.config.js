/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    'mobile': '480px',
    'laptop': '1024px',
  },
  theme: {
    colors: {},
    fontFamily: {},
    extend: {
      borderRadius: {
        'default': '8px',
      },
    },
  },
};

