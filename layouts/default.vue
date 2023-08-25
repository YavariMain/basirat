<template>
  <div :dir="$dir()" :class="$i18n.locale == 'en' ? 'font-sans' : ''">
    <!-- <loading v-if="isLoading" /> -->
    <!-- MENU -->
    <menu-main />
    <!-- NUXT -->
    <Nuxt />
    <!-- FOOTER -->
    <footer-main />
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector("html").classList.add("dark");
  },
};
</script>
