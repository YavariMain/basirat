<template>
  <!--  -->
  <div class="w-full slider-3d-banners">
    <!-- slider -->
    <div
      v-swiper="swiperOptionBanners"
      class="w-full ml-auto relative mt-16 lg:mt-0"
      style="padding: 0 0 5rem 0"
    >
      <div class="swiper-wrapper">
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="w-full font-bold flex justify-center items-center rounded-md object-cover relative"
          >
            <img
              :src="require('~/assets/media/img/3d-coverflow-1.jpg')"
              class="rounded-md"
            />
            <p
              class="text-white _subject w-full absolute text-center font-bold text-xl bg-black bg-opacity-50 py-20"
            >
              یک متن تستی
            </p>
          </div>
        </div>
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="w-full font-bold flex justify-center items-center rounded-md"
          >
            <img
              :src="require('~/assets/media/img/3d-coverflow-2.jpg')"
              class="rounded-md"
            />
            <p
              class="text-white _subject w-full absolute text-center font-bold text-xl bg-black bg-opacity-50 py-20"
            >
              یک متن تستی
            </p>
          </div>
        </div>
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="w-full font-bold flex justify-center items-center rounded-md"
          >
            <img
              :src="require('~/assets/media/img/3d-coverflow-3.jpg')"
              class="rounded-md"
            />
            <p
              class="text-white _subject w-full absolute text-center font-bold text-xl bg-black bg-opacity-50 py-20"
            >
              یک متن تستی
            </p>
          </div>
        </div>
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="w-full font-bold flex justify-center items-center rounded-md"
          >
            <img
              :src="require('~/assets/media/img/3d-coverflow-4.jpg')"
              class="rounded-md"
            />
            <p
              class="text-white _subject w-full absolute text-center font-bold text-xl bg-black bg-opacity-50 py-20"
            >
              یک متن تستی
            </p>
          </div>
        </div>
        <!--  -->
        <div class="swiper-slide">
          <!-- -->
          <div
            class="w-full font-bold flex justify-center items-center rounded-md"
          >
            <img
              :src="require('~/assets/media/img/3d-coverflow-5.jpg')"
              class="rounded-md"
            />
            <p
              class="text-white _subject w-full absolute text-center font-bold text-xl bg-black bg-opacity-50 py-20"
            >
              یک متن تستی
            </p>
          </div>
        </div>
      </div>
      <div class="bottom-nav swiper-pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<style lang="scss">
.slider-3d-banners {
  ._subject {
    transition: all 1s ease, opacity 1s;
    visibility: hidden;
    opacity: 0;
  }
  .swiper-slide-active {
    ._subject {
      visibility: visible;
      opacity: 1;
    }
  }
}
</style>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOptionBanners: {
        loop: true,
        effect: "coverflow",
        centeredSlides: "true",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 140,
          modifier: 1,
          slideShadows: true,
        },
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
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