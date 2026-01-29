<script setup>
import { ref, computed } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/20/solid";

const departments = [
  { name: "Paris" },
  { name: "91" },
  { name: "92" },
  { name: "93" },
  { name: "94" },
  { name: "95" },
  { name: "77 A" },
  { name: "77 B" },
  { name: "78 A" },
  { name: "78 B" },
];
const enlevement = ref(departments[0]);
const livraison = ref(departments[0]);
const totalPrice = computed(() => {
  if (enlevement.value.name === "Paris" && livraison.value.name === "Paris") {
    return "30";
  } else if (enlevement.value.name === "93" && livraison.value.name === "93") {
    return "34";
  } else if (
    (enlevement.value.name === "Paris" && livraison.value.name === "92") ||
    (enlevement.value.name === "Paris" && livraison.value.name === "93") ||
    (enlevement.value.name === "Paris" && livraison.value.name === "94") ||
    (enlevement.value.name === "92" && livraison.value.name === "Paris") ||
    (enlevement.value.name === "92" && livraison.value.name === "93") ||
    (enlevement.value.name === "93" && livraison.value.name === "Paris") ||
    (enlevement.value.name === "93" && livraison.value.name === "92") ||
    (enlevement.value.name === "94" && livraison.value.name === "Paris")
  ) {
    return "38";
  } else if (enlevement.value.name === "94" && livraison.value.name === "94") {
    return "42";
  } else if (
    (enlevement.value.name === "Paris" && livraison.value.name === "91") ||
    (enlevement.value.name === "91" && livraison.value.name === "Paris") ||
    (enlevement.value.name === "91" && livraison.value.name === "91") ||
    (enlevement.value.name === "92" && livraison.value.name === "94") ||
    (enlevement.value.name === "93" && livraison.value.name === "94") ||
    (enlevement.value.name === "94" && livraison.value.name === "92") ||
    (enlevement.value.name === "94" && livraison.value.name === "93")
  ) {
    return "48";
  } else if (
    (enlevement.value.name === "Paris" && livraison.value.name === "95") ||
    (enlevement.value.name === "Paris" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "Paris" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "91" && livraison.value.name === "92") ||
    (enlevement.value.name === "91" && livraison.value.name === "93") ||
    (enlevement.value.name === "91" && livraison.value.name === "94") ||
    (enlevement.value.name === "92" && livraison.value.name === "91") ||
    (enlevement.value.name === "92" && livraison.value.name === "92") ||
    (enlevement.value.name === "92" && livraison.value.name === "95") ||
    (enlevement.value.name === "93" && livraison.value.name === "91") ||
    (enlevement.value.name === "93" && livraison.value.name === "95") ||
    (enlevement.value.name === "94" && livraison.value.name === "91") ||
    (enlevement.value.name === "95" && livraison.value.name === "Paris") ||
    (enlevement.value.name === "95" && livraison.value.name === "92") ||
    (enlevement.value.name === "95" && livraison.value.name === "93") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "Paris") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "Paris") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "78 A")
  ) {
    return "58";
  } else if (
    (enlevement.value.name === "Paris" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "91" && livraison.value.name === "95") ||
    (enlevement.value.name === "91" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "91" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "92" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "94" && livraison.value.name === "95") ||
    (enlevement.value.name === "95" && livraison.value.name === "91") ||
    (enlevement.value.name === "95" && livraison.value.name === "94") ||
    (enlevement.value.name === "95" && livraison.value.name === "95") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "91") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "92") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "Paris") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "91") ||
    (enlevement.value.name === "78 B" && livraison.value.name === "Paris") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "78 B")
  ) {
    return "68";
  } else if (
    (enlevement.value.name === "Paris" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "91" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "91" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "92" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "92" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "93" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "93" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "94" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "94" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "93") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "94") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "91") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "92") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "92") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "93") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "94") ||
    (enlevement.value.name === "78 B" && livraison.value.name === "91")
  ) {
    return "78";
  } else if (
    (enlevement.value.name === "92" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "93" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "93" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "94" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "94" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "95" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "95") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "93") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "94") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "77 A") ||
    (enlevement.value.name === "78 B" && livraison.value.name === "92") ||
    (enlevement.value.name === "78 B" && livraison.value.name === "93") ||
    (enlevement.value.name === "78 B" && livraison.value.name === "94")
  ) {
    return "88";
  } else if (
    (enlevement.value.name === "95" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "77 A" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "95") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "77 B") ||
    (enlevement.value.name === "78 B" && livraison.value.name === "77 A")
  ) {
    return "98";
  } else if (
    (enlevement.value.name === "95" && livraison.value.name === "78 A") ||
    (enlevement.value.name === "77 B" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "78 A" && livraison.value.name === "95") ||
    (enlevement.value.name === "78 B" && livraison.value.name === "77 B")
  ) {
    return "108";
  } else if (
    (enlevement.value.name === "95" && livraison.value.name === "78 B") ||
    (enlevement.value.name === "78 B" && livraison.value.name === "95")
  ) {
    return "108";
  } else {
    return "contactez nous!";
  }
});
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
    <div class="pb-12">
      <div
        class="my-4 text-lg font-semibold text-center text-gold md:text-xl md:mt-8"
      >
        Livraisons dans toute l’île de France (grille tarifaire) et dans toute
        la France sur devis
      </div>
      <div
        class="my-4 text-lg font-semibold text-center text-gold md:text-xl md:mt-8"
      >
        <p>Moto ou voiture / colis ou plis.</p>
      </div>
    </div>

    <div
      class="flex flex-col items-start justify-around w-full space-y-8 md:flex-row md:space-y-0 md:space-x-24"
    >
      <div class="flex flex-col items-center w-full">
        <div class="text-xl font-semibold">Département d'enlevement:</div>
        <Listbox v-model="enlevement">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-48 py-2 pl-3 pr-10 font-semibold text-left text-black bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gold sm:text-lg"
            >
              <span class="block">{{ enlevement.name }}</span>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
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
                class="absolute z-20 w-48 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg"
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
                      active ? 'bg-amber-100 text-black' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block',
                      ]"
                      >{{ department.name }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-black"
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
      <div class="flex flex-col items-center w-full">
        <div class="text-xl font-semibold">Département de livraison:</div>
        <Listbox v-model="livraison">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-48 py-2 pl-3 pr-10 font-semibold text-left text-black bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-gold sm:text-lg"
            >
              <span class="block truncate">{{ livraison.name }}</span>
              <span
                class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
              >
                <ChevronUpDownIcon
                  class="w-5 h-5 text-gray-400"
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
                class="absolute z-20 w-48 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg"
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
                      active ? 'bg-amber-100 text-black' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-10 pr-4',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-medium' : 'font-normal',
                        'block truncate',
                      ]"
                      >{{ department.name }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-black"
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
    <div class="my-12 p-6 bg-gold bg-opacity-10 rounded-xl border-2 border-gold">
      <p class="text-xl font-semibold text-center text-gold">
        Prix Total:
        <span class="block text-4xl md:text-5xl text-gold font-bold mt-2">
          {{ totalPrice }}
          <span v-if="totalPrice !== 'contactez nous!'" class="text-2xl">€</span>
        </span>
      </p>
    </div>
  </div>
</template>
