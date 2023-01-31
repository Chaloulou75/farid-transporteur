<script setup></script>
<template>
  <div class="w-full px-2 py-2 bg-faridblue text-gold md:py-6">
    <div
      class="flex items-center justify-between py-4 mx-auto text-xs text-gold md:text-sm max-w-7xl sm:px-2 lg:px-8"
    >
      <NuxtLink to="/mentionslegales" class="font-thin"
        >Mentions Legales</NuxtLink
      >
      <p class="font-thin">
        {{ new Date().getFullYear() }} &#169;coursier-discount.com
      </p>
    </div>
  </div>
</template>
