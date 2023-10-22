// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ["nuxt-icon", "@pinia/nuxt", "@nuxt/image"],

  image: {
    unsplash: {
      baseURL: "https://images.unsplash.com/",
    },

    presets: {
      default: {
        modifiers: {
          format: "webp",
          fit: "cover",
          quality: "70",
        },
      },
    },
  },

  build: {
    transpile: ["vuetify", "@vuepic/vue-datepicker"],
  },

  css: [
    "~/assets/scss/main.scss",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  app: {
    layoutTransition: { name: "slide-left", mode: "out-in" },
    pageTransition: { name: "fadeIn", mode: "out-in" },
  },

  components: [{ path: "~/components", pathPrefix: false }],

  runtimeConfig: {
    public: {
      locale: "ar",
      fallbacklocale: "ar",
      apiBase: "https://api.example.com/",
    },
  },

  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },
});
