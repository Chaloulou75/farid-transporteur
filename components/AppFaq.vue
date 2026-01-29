<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";

const faqs = [
    {
        question: "Quels sont les délais de livraison à Paris ?",
        answer: "Nous assurons des livraisons express le jour même sur Paris intra-muros. Le délai moyen est de 1 à 2 heures selon la distance et les conditions de circulation.",
    },
    {
        question: "Livrez-vous dans toute l'Ile-de-France ?",
        answer: "Oui, nous couvrons l'ensemble de l'Ile-de-France : Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Essonne (91), Val-d'Oise (95), Seine-et-Marne (77) et Yvelines (78).",
    },
    {
        question: "Quel type de colis pouvez-vous transporter ?",
        answer: "Nous transportons tous types de plis et colis : documents urgents, petits colis, courses diverses. Livraison en moto ou voiture selon le volume.",
    },
    {
        question: "Comment réserver une course ?",
        answer: "Contactez-nous par téléphone au 06 17 43 89 73 ou 07 68 38 22 48, ou par email à eva.tallec75@gmail.com. Nous sommes disponibles du lundi au dimanche de 9h à 20h avec réponse immédiate.",
    },
    {
        question: "Quels sont vos tarifs de livraison ?",
        answer: "Nos tarifs démarrent à 30€ pour une course Paris-Paris. Le prix varie selon les départements de départ et d'arrivée. Utilisez notre calculateur de tarifs en ligne pour obtenir un devis instantané.",
    },
];

useHead({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            }),
        },
    ],
});
</script>

<template>
    <div
        class="flex flex-col items-center justify-start w-full px-4 mx-auto max-w-7xl md:px-8"
    >
        <div class="pt-16 md:pt-24" id="faq"></div>
        <h2
            class="mx-auto mb-8 text-3xl font-bold text-center text-gold md:text-6xl font-lobster"
        >
            Questions fréquentes
        </h2>
        <div class="w-full max-w-3xl mx-auto space-y-4 pb-12">
            <Disclosure
                v-for="(faq, index) in faqs"
                :key="index"
                v-slot="{ open }"
            >
                <DisclosureButton
                    class="flex items-center justify-between w-full px-4 py-4 text-left text-lg font-medium text-gold bg-faridblue border border-gold rounded-lg hover:bg-opacity-80 focus:outline-none focus-visible:ring focus-visible:ring-gold focus-visible:ring-opacity-75"
                >
                    <span>{{ faq.question }}</span>
                    <ChevronDownIcon
                        :class="open ? 'rotate-180 transform' : ''"
                        class="w-5 h-5 text-gold transition-transform duration-200"
                    />
                </DisclosureButton>
                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-out"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <DisclosurePanel
                        class="px-4 pt-4 pb-2 text-gold text-base md:text-lg"
                    >
                        {{ faq.answer }}
                    </DisclosurePanel>
                </transition>
            </Disclosure>
        </div>
    </div>
</template>
