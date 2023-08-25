<template>
  <footer class="bg-gray-100 pt-16 dark:bg-zinc-800 dark:text-zinc-50 z-10">
    <div
      class="container mx-auto xl:px-20 px-5 grid grid-cols-1 lg:grid-cols-10 gap-10"
    >
      <!--  -->
      <div class="flex flex-col col-span-4">
        <!-- logo -->
        <span>
          <img
            :src="require('~/assets/media/img/logo11.png')"
            alt="logo"
            class="w-10"
          />
        </span>
        <p class="text-sm mt-4 text-justify leading-5">
          {{ $t("footer.desc") }}
        </p>
      </div>
      <!--  -->
      <div class="flex flex-col col-span-2 gap-3 lg:gap-4">
        <span class="font-bold mb-3 lg:text-center">{{
          $t("footer.links.contact")
        }}</span>
        <ul
          class="text-sm flex flex-col justify-center lg:items-center gap-2 footer-menu"
        >
          <li v-if="$i18n.locale == 'fa'">
            <a href="http://sub.ngkh.ir/contact-us">{{
              $t("footer.links.contact")
            }}</a>
          </li>
          <li v-if="$i18n.locale == 'en'">
            <a href="http://sub.ngkh.ir/contact-us-en">{{
              $t("footer.links.contact")
            }}</a>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="col-span-4 gap-3 flex flex-col">
        <p class="mt-1">
          <span class="font-bold">{{ $t("footer.address.title") }}</span>
          <br /><br />
          {{ $t("footer.address.desc") }}
        </p>
        <div class="flex items-center gap-2">
          <span class="font-bold">{{ $t("footer.address.phone") }}</span>
          <a href="tel:05132626605" class="text-sm lg:text-base underline">
            051-32626605
          </a>
        </div>
        <div class="flex items-center gap-2">
          <span class="font-bold">{{ $t("footer.address.factory_sale") }}</span>
          <a href="tel:05132626605" class="text-sm lg:text-base underline">
            051-10-32626609
          </a>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="container mx-auto xl:px-20 px-5 text-center text-xs py-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12832.204093473061!2d59.6823555!3d36.4804837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92056bd4a6061b1f!2z2LTYsdqp2Kog2YbbjNix2Yjar9iz2KrYsdin2YYg2K7Ysdin2LPYp9mG!5e0!3m2!1sen!2s!4v1566451708893!5m2!1sen!2s"
        width="100%"
        height="250"
        frameborder="0"
        style="border: 0; margin-top: 30px; margin-bottom: 10px"
        allowfullscreen=""
      ></iframe>
      <!--  -->
      <div
        class="w-full h-0.5 bg-gray-200 dark:bg-zinc-900 transition-all mt-8"
      ></div>
      <p class="mt-8">{{ $t("footer.copyright") }}</p>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/scss/global.scss";

.footer-menu {
  li {
    transition: 0.3s ease;
    &:hover {
      color: $yellow-color;
    }
  }
}
</style>
