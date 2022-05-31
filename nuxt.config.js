export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  publicRuntimeConfig: {
    DEV_ENV: process.env.DEV_ENV || false,
    API_ROOT: process.env.API_ROOT || 'https://api.tifia.com',
    DESKTOP_URL: process.env.DESKTOP_URL || 'https://appdev.tifia.com'
  },
  privateRuntimeOptions: {
    API_ROOT: process.env.API_ROOT || 'https://api.tifia.com'
  },
  head: {
    title: 'Tifia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/fonts.css',
    '@assets/transactions.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-svg-loader'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},
  loading: {
    color: '#E52525'
  }
  // Build Configuration (https://go.nuxtjs.dev/config-build)
}
