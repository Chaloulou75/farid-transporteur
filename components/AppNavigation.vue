<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon, PhoneIcon, TruckIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "Tarifs", href: "/#tarifs" },
  { name: "Zones", href: "/#zones" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

const phoneNumber = "06 33 07 75 85";
const phoneHref = "tel:+33633077585";
</script>

<template>
  <Disclosure
    as="nav"
    class="bg-faridblue text-gold w-full sticky top-0 z-50 bg-opacity-80 backdrop-filter backdrop-blur-xl border-b border-gold/10"
    v-slot="{ open }"
  >
    <div class="px-4 mx-auto max-w-7xl md:px-8">
      <div class="relative flex items-center justify-between h-16 md:h-20">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gold focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold"
          >
            <span class="sr-only">Ouvrir menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="flex items-center justify-center flex-1 md:items-stretch md:justify-between">
          <!-- Logo -->
          <div class="flex items-center flex-shrink-0">
            <NuxtLink
              to="/"
              class="flex items-center gap-3 text-lg font-medium md:text-xl text-gold hover:text-white transition-colors group"
            >
              <div class="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gold/20 group-hover:bg-gold/30 transition-colors overflow-hidden">
                <!-- Speed lines -->
                <div class="absolute left-1 top-1/2 -translate-y-1/2 flex flex-col gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div class="w-2 h-0.5 bg-gold rounded-full"></div>
                  <div class="w-3 h-0.5 bg-gold rounded-full"></div>
                  <div class="w-2 h-0.5 bg-gold rounded-full"></div>
                </div>
                <TruckIcon class="w-5 h-5 md:w-6 md:h-6 text-gold ml-1" />
              </div>
              <span class="text-2xl md:text-3xl font-lobster tracking-widest">coursier-discount</span>
            </NuxtLink>
          </div>

          <!-- Desktop nav links -->
          <div class="hidden md:flex md:items-center md:gap-8">
            <div class="flex items-center space-x-1">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="nav-link relative px-3 py-2 text-lg font-semibold transition-colors hover:text-white"
              >
                {{ item.name }}
                <span class="nav-underline"></span>
              </a>
            </div>

            <!-- Phone number -->
            <a
              :href="phoneHref"
              class="flex items-center gap-2 px-4 py-2 ml-4 font-bold text-faridblue bg-gold rounded-full hover:bg-white transition-all hover:scale-105"
            >
              <PhoneIcon class="w-5 h-5" />
              <span>{{ phoneNumber }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="px-4 pt-2 pb-4 space-y-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          class="block px-4 py-3 text-lg font-medium rounded-lg hover:bg-gold/20 active:bg-gold/30 transition-colors"
        >
          {{ item.name }}
        </DisclosureButton>

        <!-- Phone in mobile menu -->
        <DisclosureButton
          as="a"
          :href="phoneHref"
          class="flex items-center justify-center gap-2 px-4 py-3 mt-4 font-bold text-faridblue bg-gold rounded-lg"
        >
          <PhoneIcon class="w-5 h-5" />
          <span>{{ phoneNumber }}</span>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>
.nav-link {
  position: relative;
}

.nav-underline {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover .nav-underline {
  width: 80%;
}
</style>
