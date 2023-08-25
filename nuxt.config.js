export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "bngkh",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    "@/assets/scss/global.scss",
    "@/assets/css/main.css",
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    "~/plugins/i18n.js",
    { src: "@/plugins/vue-awesome-swiper", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://content.nuxtjs.org/get-started
    "@nuxt/content",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://axios.nuxtjs.org
    "@nuxtjs/axios",
    // https://i18n.nuxtjs.org
    ["@nuxtjs/i18n"],
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "fa",
    },
  },

  // axios options: https://axios.nuxtjs.org/options
  axios: {},

  // https://i18n.nuxtjs.org
  i18n: {
    defaultLocale: "fa",
    locales: [
      {
        code: "fa",
        iso: "fa",
        file: "fa.json",
        dir: "rtl",
      },
      {
        code: "en",
        iso: "en",
        file: "en.json",
        dir: "ltr",
      },
    ],
    lazy: true,
    langDir: "content/",
    detectBrowserLanguage: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  loading: {
    color: "orange",
    height: "2px",
    throttle: 0,
  },
  loadingIndicator: {
    name: "circle",
    color: "orange",
    background: "#18181b",
  },
};
