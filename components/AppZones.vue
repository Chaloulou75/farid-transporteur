<script setup>
import { MapPinIcon } from "@heroicons/vue/24/outline";

const zones = [
    {
        department: "Paris (75)",
        cities: [
            "Paris 1er",
            "Paris 2e",
            "Paris 3e",
            "Paris 4e",
            "Paris 5e",
            "Paris 6e",
            "Paris 7e",
            "Paris 8e",
            "Paris 9e",
            "Paris 10e",
            "Paris 11e",
            "Paris 12e",
            "Paris 13e",
            "Paris 14e",
            "Paris 15e",
            "Paris 16e",
            "Paris 17e",
            "Paris 18e",
            "Paris 19e",
            "Paris 20e",
        ],
    },
    {
        department: "Hauts-de-Seine (92)",
        cities: [
            "Boulogne-Billancourt",
            "Nanterre",
            "Courbevoie",
            "Colombes",
            "Asnières-sur-Seine",
            "Rueil-Malmaison",
            "Levallois-Perret",
            "Issy-les-Moulineaux",
            "Neuilly-sur-Seine",
            "Antony",
            "Clamart",
            "Montrouge",
            "Meudon",
            "Puteaux",
            "Suresnes",
            "La Défense",
        ],
    },
    {
        department: "Seine-Saint-Denis (93)",
        cities: [
            "Montreuil",
            "Saint-Denis",
            "Aubervilliers",
            "Aulnay-sous-Bois",
            "Drancy",
            "Noisy-le-Grand",
            "Pantin",
            "Bondy",
            "Épinay-sur-Seine",
            "Sevran",
            "Bobigny",
            "Saint-Ouen",
            "Rosny-sous-Bois",
            "Livry-Gargan",
            "Le Blanc-Mesnil",
        ],
    },
    {
        department: "Val-de-Marne (94)",
        cities: [
            "Créteil",
            "Vitry-sur-Seine",
            "Saint-Maur-des-Fossés",
            "Champigny-sur-Marne",
            "Ivry-sur-Seine",
            "Maisons-Alfort",
            "Fontenay-sous-Bois",
            "Villejuif",
            "Vincennes",
            "Alfortville",
            "Choisy-le-Roi",
            "Le Kremlin-Bicêtre",
            "Nogent-sur-Marne",
            "Charenton-le-Pont",
        ],
    },
    {
        department: "Essonne (91)",
        cities: [
            "Évry-Courcouronnes",
            "Corbeil-Essonnes",
            "Massy",
            "Savigny-sur-Orge",
            "Sainte-Geneviève-des-Bois",
            "Viry-Châtillon",
            "Athis-Mons",
            "Palaiseau",
            "Yerres",
            "Draveil",
            "Grigny",
            "Les Ulis",
            "Orsay",
            "Brunoy",
        ],
    },
    {
        department: "Val-d'Oise (95)",
        cities: [
            "Argenteuil",
            "Cergy",
            "Sarcelles",
            "Garges-lès-Gonesse",
            "Franconville",
            "Goussainville",
            "Pontoise",
            "Bezons",
            "Ermont",
            "Villiers-le-Bel",
            "Gonesse",
            "Taverny",
            "Roissy-en-France",
            "Enghien-les-Bains",
        ],
    },
    {
        department: "Seine-et-Marne (77)",
        cities: [
            "Meaux",
            "Chelles",
            "Melun",
            "Pontault-Combault",
            "Savigny-le-Temple",
            "Champs-sur-Marne",
            "Villeparisis",
            "Torcy",
            "Roissy-en-Brie",
            "Combs-la-Ville",
            "Lagny-sur-Marne",
            "Bussy-Saint-Georges",
            "Lognes",
            "Marne-la-Vallée",
        ],
    },
    {
        department: "Yvelines (78)",
        cities: [
            "Versailles",
            "Sartrouville",
            "Mantes-la-Jolie",
            "Saint-Germain-en-Laye",
            "Poissy",
            "Conflans-Sainte-Honorine",
            "Montigny-le-Bretonneux",
            "Les Mureaux",
            "Houilles",
            "Plaisir",
            "Chatou",
            "Le Chesnay-Rocquencourt",
            "Trappes",
            "Rambouillet",
        ],
    },
];
</script>

<template>
    <div
        class="flex flex-col items-center justify-start w-full px-6 mx-auto max-w-7xl md:px-12"
    >
        <div class="pt-20 md:pt-28" id="zones"></div>
        <h2
            class="mx-auto mb-10 text-3xl font-bold text-center text-gold md:text-6xl font-lobster tracking-widest"
        >
            Zones desservies
        </h2>
        <p class="text-center text-gold text-lg md:text-xl max-w-3xl mb-14">
            Notre service de coursier couvre l'ensemble de l'Ile-de-France.
            Livraison express dans tous les départements franciliens : Paris et
            petite couronne, grande couronne.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full pb-12">
            <div
                v-for="(zone, index) in zones"
                :key="index"
                class="p-4 border border-gold rounded-lg"
            >
                <div class="flex items-center mb-3">
                    <MapPinIcon class="w-6 h-6 text-gold mr-2" />
                    <h3 class="text-lg font-semibold text-gold">
                        {{ zone.department }}
                    </h3>
                </div>
                <p class="text-gold text-sm leading-relaxed">
                    {{ zone.cities.join(", ") }}
                </p>
            </div>
        </div>
    </div>
</template>
