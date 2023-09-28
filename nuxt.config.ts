// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
],
app:{
  head:{
    script:[
      {
        src:"https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js",
      }
    ]
  }
}
})
