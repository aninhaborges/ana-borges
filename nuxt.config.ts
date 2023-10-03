// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@invictus.codes/nuxt-vuetify", "@nuxtjs/eslint-module"],
  css:[
    "@/assets/css/main.scss"
  ],
  vuetify: {
    moduleOptions: {
      treeshaking: true,
      useIconCDN: true,
      styles: true,
      autoImport: true,
    },
  },
});
