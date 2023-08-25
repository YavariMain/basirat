<template>
  <!--  -->
  <div class="w-full slider-3d-customers">
    <!-- slider dark -->
    <div
      v-swiper="swiperOptioncustomers"
      class="w-full ml-auto relative"
      style="padding: 3rem 0 3rem 0"
      :loadtheme="false"
    >
      <div class="swiper-wrapper">
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="font-bold flex justify-center items-center rounded-md bg-gray-100 dark:bg-zinc-950 w-full p-20 2xl:p-32 border-bottom-yellow h-80 2xl:h-96"
          >
            <img
              :src="require('~/assets/media/img/customer1.png')"
              class="rounded-md cursor-default"
            />
          </div>
        </div>
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="font-bold flex justify-center items-center rounded-md bg-gray-100 dark:bg-zinc-950 w-full p-20 2xl:p-32 border-bottom-yellow h-80 2xl:h-96"
          >
            <img
              :src="require('~/assets/media/img/customer2.png')"
              class="rounded-md cursor-default"
            />
          </div>
        </div>
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="font-bold flex justify-center items-center rounded-md bg-gray-100 dark:bg-zinc-950 w-full p-20 2xl:p-32 border-bottom-yellow h-80 2xl:h-96"
          >
            <img
              :src="require('~/assets/media/img/customer3.png')"
              class="rounded-md cursor-default"
            />
          </div>
        </div>
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="font-bold flex justify-center items-center rounded-md bg-gray-100 dark:bg-zinc-950 w-full p-20 2xl:p-32 border-bottom-yellow h-80 2xl:h-96"
          >
            <img
              :src="require('~/assets/media/img/customer4.png')"
              class="rounded-md cursor-default"
            />
          </div>
        </div>
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="font-bold flex justify-center items-center rounded-md bg-gray-100 dark:bg-zinc-950 w-full p-20 2xl:p-32 border-bottom-yellow h-80 2xl:h-96"
          >
            <img
              :src="require('~/assets/media/img/customer5.png')"
              class="rounded-md cursor-default"
            />
          </div>
        </div>
      </div>
      <div class="bottom-nav swiper-pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptioncustomers: {
        loop: true,
        effect: "coverflow",
        centeredSlides: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 65,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss">
.slider-3d-customers {
  .swiper-slide-shadow-left {
    background-image: linear-gradient(
      90deg,
      rgba(157, 157, 157, 0) 45%,
      rgba(0, 0, 0, 0.5942752100840336) 100%
    ) !important;
  }
  .swiper-slide-shadow-right {
    background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5942752100840336) 0%,
      rgba(157, 157, 157, 0) 55%
    ) !important;
  }
}
</style>