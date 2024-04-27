/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'dark-mode',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  purge: ['./pages/**/*.vue', './components/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    'mobile': '480px',
    'laptop': '1024px',
  },
  theme: {
    extend: {
      borderRadius: {
        'default': '8px',
      },
    },
  },
};

