// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  srcDir: 'app',
  components: [
    // only pull .vue from ui to avoid index.ts/js conflicts
    { path: '~/components/ui', pathPrefix: false, extensions: ['vue'] },
    // and the rest of components (defaults to .vue anyway)
    '~/components'
  ]
})
