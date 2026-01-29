<script setup>
import { PhoneIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <a
        href="tel:+33617438973"
        class="md:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-gold text-faridblue rounded-full shadow-lg hover:bg-white active:scale-95 transition-all"
        aria-label="Appeler maintenant"
    >
        <PhoneIcon class="w-7 h-7" />
    </a>
</template>
