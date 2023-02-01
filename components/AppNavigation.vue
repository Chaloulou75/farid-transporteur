<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
const navigation = [
  { name: "Tarifs", href: "/#tarifs" },
  { name: "Contact", href: "/#contact" },
];
</script>

<template>
  <Disclosure
    as="nav"
    class="bg-faridblue text-gold w-full sticky top-0 z-50 bg-opacity-70 backdrop-filter backdrop-blur-[12px] border-none"
    v-slot="{ open }"
  >
    <div class="px-2 mx-auto max-w-7xl md:px-8">
      <div class="relative flex items-center justify-between h-16 md:h-24">
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
        <div
          class="flex items-center justify-center flex-1 md:items-stretch md:justify-between"
        >
          <div class="flex items-center flex-shrink-0">
            <NuxtLink
              to="/"
              class="flex flex-col items-center text-lg font-medium md:text-2xl text-gold hover:text-white"
            >
              <span class="font-lobster">coursier-discount</span>
              <span class="text-base">Livraison sur toute l'Ile de France</span>
            </NuxtLink>
          </div>
          <div class="hidden md:ml-6 md:block">
            <div class="flex py-2 space-x-5">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="px-3 py-2 text-xl font-semibold font-lobster rounded-md hover:text-white active:shadow hover:shadow active:scale-[0.97]"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="block px-3 py-1 text-base font-medium rounded-md hover:shadow"
          :aria-current="item.current ? 'page' : undefined"
          ><DisclosureButton>{{ item.name }}</DisclosureButton>
        </a>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
