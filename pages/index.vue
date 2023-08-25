<template>
  <div class="overflow-hidden relative dark:bg-zinc-900">
    <!-- header -->
    <header class="container mx-auto xl:px-20 px-5 transformer-slider h-auto lg:h-screen flex items-center">
      <!-- slider -->
      <slider-3d-banners />
    </header>
    <!--  -->
    <section class="w-full dark:bg-zinc-900">
      <div
        class="container mx-auto xl:px-20 px-5 flex flex-col items-center pt-12 pb-16"
      >
        <!-- title -->
        <div class="flex flex-col items-center">
          <!-- title -->
          <h1 class="font-bold text-lg lg:text-2xl dark:text-zinc-50">
            {{ $t("main_page.automobile_customers") }}
          </h1>
          <!-- yellow line -->
          <div class="w-16 h-0.5 bg-yellow mt-3"></div>
        </div>
        <!-- web only -->
        <div class="w-full">
          <div class="w-full">
            <slider-3d-customers />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  name: "IndexPage",
  directives: {
    swiper: directive,
  },
  mounted() {
    setTimeout(() => {
      console.log(this.posts);
      console.log(this.cat);
    }, 1000);
  },
  data() {
    return {
      posts: [],
      cat: [],
    };
  },
};
</script>