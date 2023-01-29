// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Coursier Discount | Livraison sur toute l'Ile de France",
      meta: [
        {
          name: "description",
          content:
            "Livraison sur toute l'Ile de France, vos courses à petits prix sur Paris et la Région Parisienne. Transporteur coursier-discount.",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
