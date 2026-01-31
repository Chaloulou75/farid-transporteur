<script setup>
import {
  BoltIcon,
  ShieldCheckIcon,
  CurrencyEuroIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";

const badges = [
  { icon: BoltIcon, text: "Rapide" },
  { icon: ShieldCheckIcon, text: "Fiable" },
  { icon: CurrencyEuroIcon, text: "Petit prix" },
];

const stats = [
  { value: "10+", label: "ans d'expérience" },
  { value: "5000+", label: "livraisons" },
  { value: "24h/7j", label: "disponibilité" },
];
</script>

<template>
  <div class="relative overflow-hidden">
    <div
      class="relative flex flex-col items-center justify-between px-6 py-16 mx-auto md:py-24 lg:py-28 md:flex-row max-w-7xl md:px-12 gap-10 md:gap-16"
    >
      <!-- Mobile title -->
      <h1
        class="block text-3xl font-bold text-center text-gold sm:text-4xl md:hidden font-lobster leading-relaxed tracking-widest animate-fade-in-up"
      >
        Coursier <span class="text-white">express</span><br />
        Paris & Ile-de-France
      </h1>

      <!-- Image -->
      <div class="relative w-full max-w-xs sm:max-w-sm md:max-w-md animate-fade-in-left">
        <!-- Decorative blob behind image -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-[2rem] rotate-3 scale-105"
        ></div>
        <img
          src="~/assets/img/farid.png"
          alt="Coursier Discount - Service de livraison express à Paris et Ile-de-France"
          loading="eager"
          fetchpriority="high"
          class="relative w-full h-auto rounded-2xl shadow-2xl shadow-black/30"
        />
        <!-- Badges on image -->
        <div
          class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3"
        >
          <div
            v-for="badge in badges"
            :key="badge.text"
            class="flex items-center gap-1.5 px-3 py-1.5 bg-faridblue/90 backdrop-blur rounded-full border border-gold/30 shadow-lg"
          >
            <component :is="badge.icon" class="w-4 h-4 text-gold" />
            <span class="text-xs font-semibold text-gold">{{ badge.text }}</span>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div
        class="flex flex-col items-center justify-center px-2 mx-auto space-y-6 md:space-y-8 md:items-start animate-fade-in-right"
      >
        <!-- Desktop title -->
        <h1
          class="hidden text-4xl font-bold text-center md:text-left text-gold lg:text-5xl xl:text-6xl md:block font-lobster leading-relaxed tracking-widest"
        >
          Coursier <span class="text-white">express</span><br />
          Paris & Ile-de-France
        </h1>

        <div class="space-y-4">
          <h2
            class="text-lg font-semibold text-center md:text-left text-gold/90 sm:text-xl md:text-2xl tracking-wide"
          >
            Livraison sur toute l'Ile de France
          </h2>
          <h2
            class="text-lg font-semibold text-center md:text-left sm:text-xl md:text-2xl tracking-wide"
          >
            Vos courses à <span class="text-white font-bold">petits prix</span> sur Paris
            et la Région Parisienne.
          </h2>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center md:justify-start gap-6 pt-2">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="flex flex-col items-center md:items-start"
          >
            <span class="text-2xl md:text-3xl font-bold text-white">{{
              stat.value
            }}</span>
            <span class="text-sm text-gold/80">{{ stat.label }}</span>
          </div>
        </div>

        <!-- CTAs -->
        <div
          class="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
        >
          <a
            href="tel:+33633077585"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold bg-gold text-faridblue rounded-full hover:bg-white transition-all duration-300 shadow-lg shadow-gold/20 hover:shadow-xl hover:scale-105"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Appeler maintenant
          </a>
          <a
            href="#tarifs"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-gold border-2 border-gold rounded-full hover:bg-gold hover:text-faridblue transition-all duration-300 hover:scale-105"
          >
            Voir les tarifs
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
}
</style>
