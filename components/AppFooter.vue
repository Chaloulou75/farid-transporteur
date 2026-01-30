<script setup></script>
<template>
  <div class="w-full px-6 py-6 text-gold md:py-8 pb-24 md:pb-8 border-t border-gold/10">
    <div
      class="flex items-center justify-between py-4 mx-auto text-xs text-gold md:text-sm max-w-7xl lg:px-12"
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
