<script setup>
import { ref, computed } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ArrowsRightLeftIcon,
  MapPinIcon,
  TruckIcon,
} from "@heroicons/vue/20/solid";

const departments = [
  { name: "Paris", label: "Paris (75)" },
  { name: "91", label: "Essonne (91)" },
  { name: "92", label: "Hauts-de-Seine (92)" },
  { name: "93", label: "Seine-Saint-Denis (93)" },
  { name: "94", label: "Val-de-Marne (94)" },
  { name: "95", label: "Val-d'Oise (95)" },
  { name: "77 A", label: "Seine-et-Marne - Zone A (77)" },
  { name: "77 B", label: "Seine-et-Marne - Zone B (77)" },
  { name: "78 A", label: "Yvelines - Zone A (78)" },
  { name: "78 B", label: "Yvelines - Zone B (78)" },
];

// Matrice de prix : priceMatrix[from][to] = prix
const priceMatrix = {
  Paris: {
    Paris: 30,
    91: 48,
    92: 38,
    93: 38,
    94: 38,
    95: 58,
    "77 A": 58,
    "77 B": 68,
    "78 A": 58,
    "78 B": 78,
  },
  91: {
    Paris: 48,
    91: 48,
    92: 58,
    93: 58,
    94: 58,
    95: 68,
    "77 A": 68,
    "77 B": 78,
    "78 A": 68,
    "78 B": 78,
  },
  92: {
    Paris: 38,
    91: 58,
    92: 58,
    93: 38,
    94: 48,
    95: 58,
    "77 A": 68,
    "77 B": 78,
    "78 A": 78,
    "78 B": 88,
  },
  93: {
    Paris: 38,
    91: 58,
    92: 38,
    93: 34,
    94: 48,
    95: 58,
    "77 A": 78,
    "77 B": 88,
    "78 A": 78,
    "78 B": 88,
  },
  94: {
    Paris: 38,
    91: 48,
    92: 48,
    93: 48,
    94: 42,
    95: 68,
    "77 A": 78,
    "77 B": 88,
    "78 A": 78,
    "78 B": 88,
  },
  95: {
    Paris: 58,
    91: 68,
    92: 58,
    93: 58,
    94: 68,
    95: 68,
    "77 A": 88,
    "77 B": 98,
    "78 A": 108,
    "78 B": 108,
  },
  "77 A": {
    Paris: 58,
    91: 68,
    92: 68,
    93: 78,
    94: 78,
    95: 88,
    "77 A": 78,
    "77 B": 78,
    "78 A": 88,
    "78 B": 98,
  },
  "77 B": {
    Paris: 68,
    91: 78,
    92: 78,
    93: 88,
    94: 88,
    95: 98,
    "77 A": 78,
    "77 B": 78,
    "78 A": 98,
    "78 B": 108,
  },
  "78 A": {
    Paris: 58,
    91: 68,
    92: 78,
    93: 78,
    94: 78,
    95: 108,
    "77 A": 88,
    "77 B": 98,
    "78 A": 68,
    "78 B": 68,
  },
  "78 B": {
    Paris: 68,
    91: 78,
    92: 88,
    93: 88,
    94: 88,
    95: 108,
    "77 A": 98,
    "77 B": 108,
    "78 A": 68,
    "78 B": null,
  },
};

const enlevement = ref(departments[0]);
const livraison = ref(departments[0]);

const totalPrice = computed(() => {
  const from = enlevement.value.name;
  const to = livraison.value.name;
  const price = priceMatrix[from]?.[to];
  return price !== null && price !== undefined ? price : null;
});

const swapLocations = () => {
  const temp = enlevement.value;
  enlevement.value = livraison.value;
  livraison.value = temp;
};
</script>

<template>
  <div
    class="flex flex-col items-center justify-around w-full px-4 mx-auto max-w-7xl md:px-8"
  >
    <div class="pt-16 md:pt-24" id="tarifs"></div>
    <h2
      class="mx-auto mb-8 text-3xl font-bold text-center text-gold md:text-6xl max-w-7xl font-lobster"
    >
      Tarifs
    </h2>
    <div class="pb-8">
      <div
        class="my-4 text-lg font-semibold text-center text-gold md:text-xl md:mt-8"
      >
        Livraisons dans toute l'île de France (grille tarifaire) et dans toute
        la France sur devis
      </div>
      <div
        class="my-4 text-lg font-semibold text-center text-gold md:text-xl md:mt-8"
      >
        <p>Moto ou voiture / colis ou plis.</p>
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center w-full gap-6 md:flex-row md:gap-8"
    >
      <!-- Enlèvement -->
      <div class="flex flex-col items-center w-full max-w-xs">
        <div class="flex items-center gap-2 mb-2 text-xl font-semibold text-gold">
          <MapPinIcon class="w-6 h-6" />
          <span>Enlèvement</span>
        </div>
        <Listbox v-model="enlevement">
          <div class="relative w-full">
            <ListboxButton
              class="relative w-full py-3 pl-4 pr-10 font-semibold text-left text-black bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-faridblue sm:text-lg"
            >
              <span class="block truncate">{{ enlevement.label }}</span>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              >
                <ChevronUpDownIcon
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="department in departments"
                  :key="department.name"
                  :value="department"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'bg-gold/20 text-black' : 'text-gray-900',
                      'relative cursor-pointer select-none py-3 pl-10 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block',
                      ]"
                      >{{ department.label }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-gold"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>

      <!-- Bouton d'inversion -->
      <button
        @click="swapLocations"
        class="flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full bg-gold/20 hover:bg-gold/40 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold"
        title="Inverser enlèvement et livraison"
      >
        <ArrowsRightLeftIcon class="w-6 h-6 text-gold" />
      </button>

      <!-- Livraison -->
      <div class="flex flex-col items-center w-full max-w-xs">
        <div class="flex items-center gap-2 mb-2 text-xl font-semibold text-gold">
          <TruckIcon class="w-6 h-6" />
          <span>Livraison</span>
        </div>
        <Listbox v-model="livraison">
          <div class="relative w-full">
            <ListboxButton
              class="relative w-full py-3 pl-4 pr-10 font-semibold text-left text-black bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-faridblue sm:text-lg"
            >
              <span class="block truncate">{{ livraison.label }}</span>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
              >
                <ChevronUpDownIcon
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-lg shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="department in departments"
                  :key="department.name"
                  :value="department"
                  as="template"
                >
                  <li
                    :class="[
                      active ? 'bg-gold/20 text-black' : 'text-gray-900',
                      'relative cursor-pointer select-none py-3 pl-10 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block',
                      ]"
                      >{{ department.label }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-gold"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
    </div>

    <!-- Prix -->
    <div class="my-12 p-8 bg-gold/10 rounded-2xl border-2 border-gold">
      <p class="text-xl font-semibold text-center text-gold">
        Prix Total
        <span
          class="block mt-3 text-5xl font-bold transition-all duration-300 ease-out md:text-6xl"
          :key="totalPrice"
        >
          <template v-if="totalPrice !== null">
            {{ totalPrice }}<span class="text-3xl">€</span>
            <span class="block mt-2 text-base font-normal opacity-80">TTC</span>
          </template>
          <template v-else>
            <span class="text-2xl md:text-3xl">Contactez-nous !</span>
          </template>
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
span[key] {
  animation: priceChange 0.3s ease-out;
}

@keyframes priceChange {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
