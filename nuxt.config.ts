// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: "utf-8",
            viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
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
            script: [
                {
                    type: "application/ld+json",
                    innerHTML: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "@id": "https://www.coursier-discount.com/#business",
                        name: "Coursier Discount",
                        description:
                            "Service de coursier et livraison express à petits prix sur Paris et toute l'Ile-de-France. Livraison de colis et plis en moto ou voiture.",
                        url: "https://www.coursier-discount.com",
                        telephone: ["+33617438973", "+33768382248"],
                        email: "eva.tallec75@gmail.com",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "95 avenue du président Wilson",
                            addressLocality: "Montreuil",
                            postalCode: "93100",
                            addressRegion: "Ile-de-France",
                            addressCountry: "FR",
                        },
                        geo: {
                            "@type": "GeoCoordinates",
                            latitude: 48.8566,
                            longitude: 2.3522,
                        },
                        areaServed: [
                            {
                                "@type": "City",
                                name: "Paris",
                                "@id": "https://www.wikidata.org/wiki/Q90",
                            },
                            {
                                "@type": "AdministrativeArea",
                                name: "Hauts-de-Seine (92)",
                            },
                            {
                                "@type": "AdministrativeArea",
                                name: "Seine-Saint-Denis (93)",
                            },
                            {
                                "@type": "AdministrativeArea",
                                name: "Val-de-Marne (94)",
                            },
                            {
                                "@type": "AdministrativeArea",
                                name: "Essonne (91)",
                            },
                            {
                                "@type": "AdministrativeArea",
                                name: "Val-d'Oise (95)",
                            },
                            {
                                "@type": "AdministrativeArea",
                                name: "Seine-et-Marne (77)",
                            },
                            {
                                "@type": "AdministrativeArea",
                                name: "Yvelines (78)",
                            },
                        ],
                        openingHoursSpecification: {
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday",
                            ],
                            opens: "09:00",
                            closes: "20:00",
                        },
                        priceRange: "€€",
                        currenciesAccepted: "EUR",
                        paymentAccepted: "Cash, Card",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Services de livraison",
                            itemListElement: [
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Livraison Paris intra-muros",
                                        description:
                                            "Livraison de colis et plis dans Paris",
                                    },
                                    priceSpecification: {
                                        "@type": "PriceSpecification",
                                        price: "30",
                                        priceCurrency: "EUR",
                                    },
                                },
                                {
                                    "@type": "Offer",
                                    itemOffered: {
                                        "@type": "Service",
                                        name: "Livraison Ile-de-France",
                                        description:
                                            "Livraison de colis et plis en Ile-de-France (92, 93, 94, 91, 95, 77, 78)",
                                    },
                                    priceSpecification: {
                                        "@type": "PriceSpecification",
                                        minPrice: "34",
                                        maxPrice: "108",
                                        priceCurrency: "EUR",
                                    },
                                },
                            ],
                        },
                    }),
                },
            ],
        },
        pageTransition: { name: "page", mode: "out-in" },
    },
    site: {
        url: "https://www.coursier-discount.com",
        name: "Coursier Discount | Livraison express Paris & Ile-de-France",
        description:
            "Coursier express pas cher à Paris et en Ile-de-France. Livraison de colis et plis le jour même à partir de 30€. Service 7j/7 de 9h à 20h. Devis immédiat.",
        defaultLocale: "fr",
    },
    ogImage: {
        enabled: true,
        defaults: {
            width: 1200,
            height: 630,
            type: "image/png",
        },
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
