<script setup></script>
<template>
  <div class="w-full px-4 py-4 bg-faridblue text-gold md:py-6 pb-24 md:pb-6">
    <div
      class="flex items-center justify-between py-4 mx-auto text-xs text-gold md:text-sm max-w-7xl lg:px-8"
    >
      <NuxtLink to="/mentionslegales" class="font-thin hover:text-white transition-colors"
        >Mentions Légales</NuxtLink
      >
      <p class="font-thin">
        {{ new Date().getFullYear() }} &copy; coursier-discount.com
      </p>
    </div>
  </div>
</template>
