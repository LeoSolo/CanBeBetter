import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  vite: {
    plugins: [
      eslintPlugin(),
      '@vue/language-plugin-pug',
    ],
  },
  alias: {
    'ant-design-vue': 'ant-design-vue/es',
  },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: [
    '~/assets/css/main.css',
    '~/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-primevue',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  primevue: {
    components: {
        prefix: 'P',
        include: ['Button', 'Sidebar', 'Dropdown'],
    },
  },
});