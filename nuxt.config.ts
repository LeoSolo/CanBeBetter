import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  vite: {
    plugins: [
      eslintPlugin(),
    ],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
});
