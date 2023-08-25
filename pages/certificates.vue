<template>
  <div class="container mx-auto xl:px-20 px-5 certificates">
    <div
      v-swiper="swiperOption"
      class="w-full ml-auto relative"
      style="padding: 3rem 0 3rem 0"
      :loadtheme="false"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- image content -->
          <div class="w-full h-full flex justify-center">
            <!-- images -->
            <img
              class="w-auto h-auto object-cover shadow-xl"
              :src="require('~/assets/media/img/slide1.jpg')"
              alt="certificates and honors"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <!-- image content -->
          <div class="w-full h-full flex justify-center">
            <!-- images -->
            <img
              class="w-auto h-auto object-cover shadow-xl"
              :src="require('~/assets/media/img/slide2.jpg')"
              alt="certificates and honors"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <!-- image content -->
          <div class="w-full h-full flex justify-center">
            <!-- images -->
            <img
              class="w-auto h-auto object-cover shadow-xl"
              :src="require('~/assets/media/img/slide3.jpg')"
              alt="certificates and honors"
            />
          </div>
        </div>
        <div class="swiper-slide">
          <!-- image content -->
          <div class="w-full h-full flex justify-center">
            <!-- images -->
            <img
              class="w-auto h-auto object-cover shadow-xl"
              :src="require('~/assets/media/img/slide4.jpg')"
              alt="certificates and honors"
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
  name: "Slider",
  directives: {
    swiper: directive,
  },
  props: {
    contents: Array,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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