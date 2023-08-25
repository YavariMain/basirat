<template>
  <div class="slider-battery">
    <div
      v-swiper="swiperOption"
      class="w-full ml-auto relative"
      style="padding: 0 0 3rem 0"
      :loadtheme="false"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :key="index"
          v-for="(item, index) in contents"
        >
          <!-- Render original HTML in server, render Swiper in browser (client) -->
          <div class="w-full font-bold justify-center items-center">
            <!-- image content -->
            <div class="w-full h-full flex justify-center">
              <!-- images -->
              <img
                class="w-4/5 object-cover"
                :src="require('~/' + item.image)"
                alt=""
              />
            </div>
            <!-- detail content -->
            <div class="w-full flex content-center justify-center">
              <h3
                class="w-full dark:text-white font-bold px-4 flex justify-center"
                v-if="$i18n.locale == 'fa'"
              >
                {{ item.titleFA }}
              </h3>
              <h3
                class="w-full dark:text-white font-bold px-4 flex justify-center font-sans"
                v-if="$i18n.locale == 'en'"
              >
                {{ item.titleEN }}
              </h3>
            </div>
            <!-- content -->
            <div
              class="bg-gray-100 dark:bg-zinc-800 shadow-lg rounded-md my-3 mx-1 py-5 dark:text-white relative"
            >
              <!-- division line -->
              <span class="absolute h-full top-0 left-1/2 division-line"></span>
              <div class="specs relative flex flex-col gap-y-3">
                <!--  -->
                <div class="single-spec box-border flex gap-x-5">
                  <div class="label break-words w-1/2 px-3 font-light">
                    {{ $t("slider_battery_components.model") }} :
                  </div>
                  <div
                    class="description w-1/2 px-3 font-bold font-sans"
                    :style="
                      $i18n.locale == 'fa'
                        ? 'direction: ltr'
                        : $i18n.locale == 'en'
                        ? 'direction: rtl'
                        : ''
                    "
                  >
                    {{ item.model }}
                  </div>
                </div>
                <!--  -->
                <div class="single-spec box-border flex gap-x-5">
                  <div class="label break-words w-1/2 px-3 font-light">
                    {{ $t("slider_battery_components.capacity") }} :
                  </div>
                  <div
                    class="description w-1/2 px-3 font-bold font-sans"
                    :style="
                      $i18n.locale == 'fa'
                        ? 'direction: ltr'
                        : $i18n.locale == 'en'
                        ? 'direction: rtl'
                        : ''
                    "
                  >
                    {{ item.capacity }}
                  </div>
                </div>
                <!--  -->
                <div class="single-spec box-border flex gap-x-5">
                  <div class="label break-words w-1/2 px-3 font-light">
                    {{ $t("slider_battery_components.CCA") }} :
                  </div>
                  <div
                    class="description w-1/2 px-3 font-bold font-sans"
                    :style="
                      $i18n.locale == 'fa'
                        ? 'direction: ltr'
                        : $i18n.locale == 'en'
                        ? 'direction: rtl'
                        : ''
                    "
                  >
                    {{ item.cca }}
                  </div>
                </div>
                <!--  -->
                <div class="single-spec box-border flex gap-x-5">
                  <div class="label break-words w-1/2 px-3 font-light">
                    {{ $t("slider_battery_components.width") }} :
                  </div>
                  <div
                    class="description w-1/2 px-3 font-bold font-sans"
                    :style="
                      $i18n.locale == 'fa'
                        ? 'direction: ltr'
                        : $i18n.locale == 'en'
                        ? 'direction: rtl'
                        : ''
                    "
                  >
                    {{ item.width }}
                  </div>
                </div>
                <!--  -->
                <div class="single-spec box-border flex gap-x-5">
                  <div class="label break-words w-1/2 px-3 font-light">
                    {{ $t("slider_battery_components.length") }} :
                  </div>
                  <div
                    class="description w-1/2 px-3 font-bold font-sans"
                    :style="
                      $i18n.locale == 'fa'
                        ? 'direction: ltr'
                        : $i18n.locale == 'en'
                        ? 'direction: rtl'
                        : ''
                    "
                  >
                    {{ item.length }}
                  </div>
                </div>
                <!--  -->
                <div class="single-spec box-border flex gap-x-5">
                  <div class="label break-words w-1/2 px-3 font-light">
                    {{ $t("slider_battery_components.height") }} :
                  </div>
                  <div
                    class="description w-1/2 px-3 font-bold font-sans"
                    :style="
                      $i18n.locale == 'fa'
                        ? 'direction: ltr'
                        : $i18n.locale == 'en'
                        ? 'direction: rtl'
                        : ''
                    "
                  >
                    {{ item.height }}
                  </div>
                </div>
                <!--  -->
                <div class="single-spec box-border flex gap-x-5">
                  <div class="label break-words w-1/2 px-3 font-light">
                    {{ $t("slider_battery_components.short_code") }} :
                  </div>
                  <div
                    class="description w-1/2 px-3 font-bold font-sans"
                    :style="
                      $i18n.locale == 'fa'
                        ? 'direction: ltr'
                        : $i18n.locale == 'en'
                        ? 'direction: rtl'
                        : ''
                    "
                  >
                    {{ item.short_code }}
                  </div>
                </div>
                <!--  -->
                <div class="single-spec box-border flex gap-x-5">
                  <div class="label break-words w-1/2 px-3 font-light">
                    {{ $t("slider_battery_components.code") }} :
                  </div>
                  <div
                    class="description w-1/2 px-3 font-bold font-sans"
                    :style="
                      $i18n.locale == 'fa'
                        ? 'direction: ltr'
                        : $i18n.locale == 'en'
                        ? 'direction: rtl'
                        : ''
                    "
                  >
                    {{ item.ir_code }}
                  </div>
                </div>
              </div>
            </div>
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

<style lang="scss">
.slider-battery {
  .division-line {
    width: 1px !important;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(163, 163, 163, 0.4206057422969187) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 25% !important;
  }
}
</style>