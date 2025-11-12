// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1",
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    site: {
        url: "https://www.coursier-discount.com",
        name: "Coursier Discount | Livraison à bas prix sur toute l'Ile de France",
        description:
            "Coursier pas cher en Ile de France. Vos courses à petits prix sur Paris et la Région Parisienne. Livraison sur toute l'Ile de France. Coursier bas prix à Paris et ile de France. Transporteur coursier discount.",
        defaultLocale: "fr",
    },

    css: ["~/assets/css/tailwind.css"],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    modules: [
        "@vite-pwa/nuxt",
        "@nuxtjs/google-fonts",
        "nuxt-security",
        "@nuxtjs/seo",
    ],

    googleFonts: {
        download: true,
        preconnect: true,
        families: {
            Lobster: true,
            Montserrat: true,
            Oswald: true,
        },
        display: "swap",
    },

    compatibilityDate: "2025-01-08",
});
