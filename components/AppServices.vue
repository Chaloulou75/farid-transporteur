<script setup>
import {
    TruckIcon,
    DocumentTextIcon,
    ClockIcon,
    CurrencyEuroIcon,
} from "@heroicons/vue/24/outline";

const services = [
    {
        icon: DocumentTextIcon,
        title: "Livraison de plis urgents",
        description:
            "Transport express de documents importants, contrats, courriers urgents. Livraison sécurisée et rapide dans toute l'Ile-de-France.",
    },
    {
        icon: TruckIcon,
        title: "Transport de colis",
        description:
            "Livraison de colis de toutes tailles en moto ou voiture. Enlèvement et livraison le jour même sur Paris et la région parisienne.",
    },
    {
        icon: ClockIcon,
        title: "Livraison express le jour même",
        description:
            "Service de coursier rapide avec enlèvement immédiat. Délai moyen de 1 à 2 heures sur Paris intra-muros.",
    },
    {
        icon: CurrencyEuroIcon,
        title: "Tarifs compétitifs",
        description:
            "Prix discount à partir de 30€ pour une course Paris-Paris. Grille tarifaire transparente sans frais cachés.",
    },
];
</script>

<template>
    <div
        class="flex flex-col items-center justify-start w-full px-4 mx-auto max-w-7xl md:px-8"
    >
        <div class="pt-16 md:pt-24" id="services"></div>
        <h2
            class="mx-auto mb-8 text-3xl font-bold text-center text-gold md:text-6xl font-lobster"
        >
            Nos services
        </h2>
        <p class="text-center text-gold text-lg md:text-xl max-w-3xl mb-12">
            Coursier Discount, votre partenaire de confiance pour toutes vos
            livraisons urgentes à Paris et en Ile-de-France. Un service
            professionnel, rapide et économique.
        </p>
        <div
            class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl pb-12"
        >
            <div
                v-for="(service, index) in services"
                :key="index"
                class="flex flex-col items-center md:items-start p-6 border border-gold rounded-lg"
            >
                <component
                    :is="service.icon"
                    class="w-12 h-12 text-gold mb-4"
                />
                <h3 class="text-xl font-semibold text-gold mb-3 font-lobster">
                    {{ service.title }}
                </h3>
                <p class="text-gold text-center md:text-left">
                    {{ service.description }}
                </p>
            </div>
        </div>
    </div>
</template>
