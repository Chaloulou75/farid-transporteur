<template>
  <div
    class="relative flex flex-col justify-between w-full min-h-screen text-gold font-oswald tracking-wider"
  >
    <!-- Global gradient background -->
    <div class="fixed inset-0 bg-gradient-to-br from-faridblue via-faridblue to-blue-900 -z-10"></div>
    <div class="fixed top-0 right-0 w-[40rem] h-[40rem] bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"></div>
    <div class="fixed bottom-0 left-0 w-[30rem] h-[30rem] bg-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"></div>
    <div class="fixed top-1/2 left-1/2 w-[50rem] h-[50rem] bg-blue-800/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>

    <AppNavigation />
    <NuxtPage />
    <AppFooter />
    <AppFloatingCta />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
