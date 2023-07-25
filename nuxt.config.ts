import path from "path";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    leaflet: path.join(__dirname, "node_modules/leaflet"),
  },
})
