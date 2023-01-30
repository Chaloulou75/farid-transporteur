<script setup>
import { AtSymbolIcon, PhoneIcon, ClockIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="flex flex-col items-center justify-start w-full h-auto px-2 pb-24 mx-auto mb-auto md:items-start max-w-7xl md:px-8"
  >
    <div class="pt-16 md:pt-24" id="contact"></div>

    <h2
      class="mx-auto mb-8 text-3xl font-bold text-center text-gold md:text-6xl"
    >
      Contact
    </h2>
    <section
      class="flex flex-col items-start justify-between w-full space-y-10 md:space-x-6 md:flex-row md:space-y-0"
    >
      <div class="flex flex-col w-full max-w-xl px-4 mx-auto md:px-0">
        <div class="flex flex-col items-start mx-auto mt-8 space-y-3">
          <p class="text-lg font-medium text-gold md:text-xl">
            <span class="inline-block w-6 h-6"><ClockIcon /></span> Du lundi au
            dimanche de 9h à 20h
          </p>
          <p class="text-lg font-medium text-gold md:text-xl">
            <span class="inline-block w-6 h-6"><AtSymbolIcon /></span>
            eva.tallec75@gmail.com
          </p>
          <p class="text-lg font-medium text-gold md:text-xl">
            <span class="inline-block w-6 h-6"><PhoneIcon /></span> 06 17 43 89
            73 / 07 68 38 22 48
          </p>
          <p
            class="text-lg font-medium text-center text-gold md:text-xl md:text-left"
          >
            Réponse immédiate
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
