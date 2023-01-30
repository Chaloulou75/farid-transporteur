<script setup>
import { AtSymbolIcon, PhoneIcon, ClockIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="flex flex-col items-center justify-start w-full h-auto px-2 mx-auto mb-auto pb-36 md:items-start max-w-7xl md:px-8"
  >
    <div class="pt-16 md:pt-24" id="contact"></div>

    <h2
      class="mx-auto mb-8 text-3xl font-bold text-center text-gold md:text-6xl"
    >
      Contact
    </h2>
    <section
      class="flex flex-col items-start w-full max-w-sm mx-auto mt-4 space-y-3"
    >
      <p class="text-lg font-medium text-gold md:text-xl">
        <span class="inline-block w-6 h-6 mr-2"><ClockIcon /></span>
        Du lundi au dimanche de 9h à 20h
      </p>
      <p class="text-lg font-medium text-gold md:text-xl">
        <span class="inline-block w-6 h-6 mr-2"><AtSymbolIcon /></span>
        eva.tallec75@gmail.com
      </p>
      <p class="text-lg font-medium text-gold md:text-xl">
        <span class="inline-block w-6 h-6 mr-2"><PhoneIcon /></span>
        06 17 43 89 73 / 07 68 38 22 48
      </p>
      <p class="w-full text-lg font-medium text-center text-gold md:text-xl">
        Réponse immédiate
      </p>
    </section>
  </div>
</template>
