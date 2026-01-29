<script setup>
import { AtSymbolIcon, PhoneIcon, ClockIcon } from "@heroicons/vue/24/outline";
</script>
<template>
  <div
    class="flex flex-col items-center justify-start w-full h-auto px-4 mx-auto mb-auto pb-36 md:items-start max-w-7xl md:px-8"
  >
    <div class="pt-16 md:pt-24" id="contact"></div>

    <h2
      class="mx-auto mb-8 text-3xl font-bold text-center text-gold md:text-6xl font-lobster"
    >
      Contact
    </h2>
    <section
      class="flex flex-col items-start w-full max-w-sm mx-auto mt-4 space-y-4"
    >
      <p class="text-lg font-medium text-gold md:text-xl flex items-center">
        <span class="inline-block w-6 h-6 mr-3 flex-shrink-0"><ClockIcon /></span>
        Du lundi au dimanche de 9h à 20h
      </p>
      <a
        href="mailto:eva.tallec75@gmail.com"
        class="text-lg font-medium text-gold md:text-xl flex items-center hover:text-white transition-colors"
      >
        <span class="inline-block w-6 h-6 mr-3 flex-shrink-0"><AtSymbolIcon /></span>
        eva.tallec75@gmail.com
      </a>
      <div class="flex flex-col space-y-2">
        <a
          href="tel:+33617438973"
          class="text-lg font-medium text-gold md:text-xl flex items-center hover:text-white transition-colors"
        >
          <span class="inline-block w-6 h-6 mr-3 flex-shrink-0"><PhoneIcon /></span>
          06 17 43 89 73
        </a>
        <a
          href="tel:+33768382248"
          class="text-lg font-medium text-gold md:text-xl flex items-center hover:text-white transition-colors pl-9"
        >
          07 68 38 22 48
        </a>
      </div>
      <p class="w-full text-lg font-medium text-center text-gold md:text-xl pt-2">
        Réponse immédiate
      </p>
    </section>
  </div>
</template>
