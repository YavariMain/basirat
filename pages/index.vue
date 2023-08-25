<template>
  <div class="overflow-hidden relative dark:bg-zinc-900">
    <!-- header -->
    <header
      class="flex justify-start flex-col items-center relative overflow-hidden"
      style="height: 93vh !important"
    >
      <img
        class="w-full lg:w-1/2 absolute top-0 lg:bottom-0"
        :class="
          $i18n.locale == 'fa'
            ? 'right-0'
            : $i18n.locale == 'en'
            ? 'left-0'
            : ''
        "
        :src="require('~/assets/media/img/png-pattern.png')"
        alt="pattern"
        style="opacity: 14%"
      />
      <!-- bg orange -->
      <div
        class="w-full h-full bg-yellow absolute hidden lg:block"
        :class="$i18n.locale == 'fa' ? 'right-2/4' : 'left-2/4'"
      ></div>
      <div
        class="w-full h-full bg-yellow absolute top-2/3 block lg:hidden"
      ></div>
      <!-- header -->
      <div class="w-full flex justify-center z-10 h-full">
        <!-- logo and slogan -->
        <div
          class="container mx-auto xl:px-20 px-5 flex flex-col lg:flex-row gap-7 lg:gap-16"
        >
          <!-- content -->
          <div
            class="w-full lg:w-1/3 flex flex-col items-center justify-center h-full"
          >
            <img
              class="w-20 md:w-24"
              :src="require('~/assets/media/img/logo11.png')"
              alt="logo"
            />
            <img
              i
              v-if="$i18n.locale == 'fa'"
              class="w-screen sm:w-2/3 lg:w-full mt-5"
              :src="require('~/assets/media/img/logo22.png')"
              alt="logo"
            />
            <img
              i
              v-if="$i18n.locale == 'en'"
              class="w-screen sm:w-2/3 lg:w-full mt-5"
              :src="require('~/assets/media/img/logo44.png')"
              alt="logo"
            />
          </div>
          <!-- video -->
          <div class="w-full lg:w-2/3 h-full relative flex items-center">
            <div
              class="w-full h-5/6 rounded-lg overflow-hidden bg-center bg-cover relative"
              :style="bgVideo"
            >
              <svg
                version="1.1"
                id="L9"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 0 0"
                xml:space="preserve"
                class="w-20 absolute z-10"
                style="top: 41%; left: calc(50% - 2rem)"
              >
                <path
                  fill="#ffab00"
                  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                >
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="rotate"
                    dur="1s"
                    from="0 50 50"
                    to="360 50 50"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
              <video
                class="w-full h-full z-30 object-cover absolute"
                autoplay
                loop
                muted
              >
                <source
                  src="https://demo.ngkh.ir/images/slider7/kolidor.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--  -->
    <section class="py-12 flex flex-col bg-white dark:bg-zinc-900">
      <div class="container mx-auto xl:px-20 px-5">
        <div
          class="rounded-lg gap-7 lg:gap-10 grid lg:grid-cols-2 grid-cols-1 p-5 lg:p-10 bg-gray-100 dark:bg-zinc-800 shadow-lg"
        >
          <div class="flex flex-col justify-center items-center lg:items-start">
            <!-- title -->
            <h2
              class="font-bold text-lg lg:text-2xl text-center lg:text-start dark:text-zinc-50"
            >
              {{ $t("main_page.brands.title") }}
            </h2>
            <!-- yellow line -->
            <div class="w-16 h-0.5 bg-yellow mt-2"></div>
            <!-- desc -->
            <p
              class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-3 dark:text-zinc-50"
            >
              {{ $t("main_page.brands.p1") }}
              <br />
              {{ $t("main_page.brands.p2") }}
            </p>
          </div>
          <!--  -->
          <div class="flex items-center justify-center">
            <div
              class="grid lg:grid-cols-3 grid-cols-2 lg:gap-4 gap-3 flex-wrap rounded-lg overflow-hidden"
            >
              <img
                class="w-64 object-cover"
                :src="require('~/assets/media/img/brand-1.jpg')"
                alt="volta"
              />
              <img
                class="w-64 object-cover"
                :src="require('~/assets/media/img/brand-2.jpg')"
                alt="volta"
              />
              <img
                class="w-64 object-cover"
                :src="require('~/assets/media/img/brand-3.jpg')"
                alt="volta"
              />
              <img
                class="w-64 object-cover"
                :src="require('~/assets/media/img/brand-4.jpg')"
                alt="volta"
              />
              <img
                class="w-64 object-cover"
                :src="require('~/assets/media/img/brand-5.jpg')"
                alt="volta"
              />
              <img
                class="w-64 object-cover"
                :src="require('~/assets/media/img/brand-6.jpg')"
                alt="volta"
              />
              <img
                class="w-64 object-cover"
                :src="require('~/assets/media/img/brand-7.jpg')"
                alt="volta"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section class="py-12 flex flex-col bg-yellow relative">
      <!-- bacground -->
      <div
        class="w-2/4 h-full absolute top-0"
        :class="$i18n.locale == 'fa' ? 'right-0' : 'left-0'"
      >
        <img
          class="w-full h-full object-cover z-10"
          :src="require('~/assets/media/img/volta1.jpg')"
          alt="volta"
        />
        <div
          style="opacity: 40%"
          class="w-full h-full absolute top-0 right-0 bg-black"
        ></div>
      </div>
      <!--  -->

      <!-- content -->
      <div class="container mx-auto flex justify-center px-5 z-10">
        <div
          class="basis-full xl:basis-3/5 bg-white dark:bg-zinc-900 rounded-lg overflow-hidden shadow-lg relative"
        >
          <!-- item -->
          <div class="flex items-center gap-y-8 h-32 px-5 py-4 md:p-0 relative">
            <div
              class="hidden basis-1/6 md:flex bg-yellow items-center justify-center font-bold text-white h-full"
            >
              <img
                style="width: 5rem"
                :src="require('~/assets/media/svg/car.svg')"
                alt="car icon"
              />
            </div>
            <!--  -->
            <div
              class="basis-full md:basis-5/6 flex flex-col z-10 px-0 md:px-6"
            >
              <h2 class="font-bold text-sm lg:text-base mb-2 dark:text-zinc-50">
                {{ $t("main_page.products.car[0]") }}
              </h2>
              <p class="text-sm md:text-base dark:text-zinc-50">
                {{ $t("main_page.products.car[1]") }}
              </p>
              <nuxt-link
                :to="localePath('/car-battery')"
                class="yellow text-sm lg:text-base mt-2"
              >
                {{ $t("main_page.products.see_more") }}
              </nuxt-link>
            </div>
            <!-- for mobile -->
            <img
              class="block md:hidden w-auto h-full absolute opacity-20 mx-5"
              :class="$i18n.locale == 'fa' ? 'left-0' : 'right-0'"
              style="width: 5rem"
              :src="require('~/assets/media/svg/car-black.svg')"
              alt="car icon"
            />
          </div>
          <!-- item -->
          <div class="flex items-center gap-y-8 h-32 px-5 py-4 md:p-0 relative">
            <div
              class="hidden basis-1/6 md:flex bg-yellow items-center justify-center font-bold text-white h-full"
            >
              <img
                style="width: 5rem"
                :src="require('~/assets/media/svg/truck.svg')"
                alt="car icon"
              />
            </div>
            <!--  -->
            <div
              class="basis-full md:basis-5/6 flex flex-col z-10 px-0 md:px-6"
            >
              <h2 class="font-bold text-sm lg:text-base mb-2 dark:text-zinc-50">
                {{ $t("main_page.products.heavy_vehicle[0]") }}
              </h2>
              <p class="text-sm md:text-base dark:text-zinc-50">
                {{ $t("main_page.products.heavy_vehicle[1]") }}
              </p>
              <nuxt-link
                :to="localePath('/heavy-vehicle-battery')"
                class="yellow text-sm lg:text-base mt-2"
              >
                {{ $t("main_page.products.see_more") }}
              </nuxt-link>
            </div>
            <!-- for mobile -->
            <img
              class="block md:hidden w-auto h-full absolute opacity-20 px-5 py-10"
              :class="$i18n.locale == 'fa' ? 'left-0' : 'right-0'"
              :src="require('~/assets/media/svg/truck-black.svg')"
              alt="car icon"
            />
          </div>
          <!-- item -->
          <div class="flex items-center gap-y-8 h-32 px-5 py-4 md:p-0 relative">
            <div
              class="hidden basis-1/6 md:flex bg-yellow items-center justify-center font-bold text-white h-full"
            >
              <img
                style="width: 5rem"
                :src="require('~/assets/media/svg/motorcycle.svg')"
                alt="car icon"
              />
            </div>
            <!--  -->
            <div
              class="basis-full md:basis-5/6 flex flex-col z-10 px-0 md:px-6"
            >
              <h2 class="font-bold text-sm lg:text-base mb-2 dark:text-zinc-50">
                {{ $t("main_page.products.motorcycle[0]") }}
              </h2>
              <p class="text-sm md:text-base dark:text-zinc-50">
                {{ $t("main_page.products.motorcycle[1]") }}
              </p>
              <nuxt-link
                :to="localePath('/motorcycle-battery')"
                class="yellow text-sm lg:text-base mt-2"
              >
                {{ $t("main_page.products.see_more") }}
              </nuxt-link>
            </div>
            <!-- for mobile -->
            <img
              class="block md:hidden w-auto h-full absolute opacity-20 px-5 py-6"
              :class="$i18n.locale == 'fa' ? 'left-0' : 'right-0'"
              :src="require('~/assets/media/svg/motorcycle-black.svg')"
              alt="car icon"
            />
          </div>
          <!-- item -->
          <div class="flex items-center gap-y-8 h-32 px-5 py-4 md:p-0 relative">
            <div
              class="hidden basis-1/6 md:flex bg-yellow items-center justify-center font-bold text-white h-full"
            >
              <img
                style="width: 4rem"
                :src="require('~/assets/media/svg/battery.svg')"
                alt="car icon"
              />
            </div>
            <!--  -->
            <div
              class="basis-full md:basis-5/6 flex flex-col z-10 px-0 md:px-6"
            >
              <h2 class="font-bold text-sm lg:text-base mb-2 dark:text-zinc-50">
                {{ $t("main_page.products.VRLA[0]") }}
              </h2>
              <p class="text-sm md:text-base dark:text-zinc-50">
                {{ $t("main_page.products.VRLA[1]") }}
              </p>
              <nuxt-link
                :to="localePath('/backup-battery')"
                class="yellow text-sm lg:text-base mt-2"
              >
                {{ $t("main_page.products.see_more") }}
              </nuxt-link>
            </div>
            <!-- for mobile -->
            <img
              class="block md:hidden w-auto h-full absolute opacity-20 px-5 py-8"
              :class="$i18n.locale == 'fa' ? 'left-0' : 'right-0'"
              :src="require('~/assets/media/svg/battery-black.svg')"
              alt="car icon"
            />
          </div>
          <!-- bg -->
          <img
            class="hidden md:block absolute bottom-24 w-80 object-cover opacity-10 p-10"
            :class="$i18n.locale == 'fa' ? 'left-0' : 'right-0'"
            :src="require('~/assets/media/img/battery.png')"
            alt="bg battery"
          />
        </div>
      </div>
    </section>
    <!--  -->
    <section
      class="container mx-auto xl:px-20 px-5 pt-20 pb-12 transformer-slider"
    >
      <!-- title -->
      <div class="flex flex-col items-center">
        <!-- title -->
        <h1 class="font-bold text-lg lg:text-2xl dark:text-zinc-50">
          {{ $t("main_page.swiper_slider") }}
        </h1>
        <!-- yellow line -->
        <div class="w-16 h-0.5 bg-yellow mt-3"></div>
      </div>
      <!-- slider -->
      <slider-3d-banners />
    </section>
    <!--  -->
    <section class="w-full dark:bg-zinc-900 py-12 relative">
      <img
        class="absolute top-20 lg:top-0 opacity-50"
        style="transform: scaleX(-1)"
        :src="require('~/assets/media/img/pattern-shabakeh.png')"
        alt="pattern shabakeh"
      />
      <div class="container mx-auto xl:px-20 px-5">
        <!-- title -->
        <div
          class="w-full flex flex-col justify-center items-center lg:items-start"
        >
          <h2
            class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
          >
            {{ $t("main_page.battery_details.title") }}
          </h2>
          <!-- yellow line -->
          <div class="w-16 h-0.5 bg-yellow mt-3"></div>
        </div>
        <div class="w-full look-shop__box relative flex flex-col mt-5">
          <!-- image and detail box -->
          <div
            class="box__item w-full h-full relative flex justify-center flex-col"
          >
            <!-- img -->
            <div class="w-full bg-no-repeat bg-inherit">
              <img
                :src="require('~/assets/media/img/enfejari.png')"
                alt="enfejari"
                class="w-full h-auto object-cover z-20"
              />
            </div>
            <!-- detail box -->
            <div class="item__detail absolute" id="item1">
              <div
                class="detail__box hover:cursor-pointer flex items-center justify-center flex-col-reverse rounded-full"
              >
                <!-- detail item -->
                <div
                  class="box__item-detail z-1 p-2 sm:p-3 flex flex-col items-center bg-white absolute invisible opacity-0 z-10"
                >
                  <!-- image -->
                  <img
                    class="w-full object-cover"
                    :src="require('~/assets/media/img/starter-battery2-1.jpg')"
                    alt="volta"
                  />
                  <!-- title -->
                  <nuxt-link
                    :to="localePath('/battery-details')"
                    class="item-detail__title flex justify-center text-center mt-3 overflow-hidden"
                    >{{ $t("main_page.battery_details.more") }}</nuxt-link
                  >
                </div>
                <!-- + -->
                <span
                  class="z-2 box__icon bg-white mt-2 mb-0 sm:mt-0 sm:mb-0 rounded-full flex items-center justify-center"
                  >+</span
                >
              </div>
            </div>
            <!-- detail box -->
            <div class="item__detail absolute" id="item2">
              <div
                class="detail__box hover:cursor-pointer flex items-center justify-center flex-col-reverse rounded-full"
              >
                <!-- detail item -->
                <div
                  class="box__item-detail z-1 p-2 sm:p-3 flex flex-col items-center bg-white absolute invisible opacity-0 z-10"
                >
                  <!-- image -->
                  <img
                    class="w-full object-cover"
                    :src="require('~/assets/media/img/technology_cont02.jpg')"
                    alt="technology_cont02"
                  />
                  <!-- title -->
                  <nuxt-link
                    :to="localePath('/battery-details')"
                    class="item-detail__title flex justify-center text-center mt-3 overflow-hidden"
                    >{{ $t("main_page.battery_details.more") }}</nuxt-link
                  >
                </div>
                <!-- + -->
                <span
                  class="z-2 box__icon bg-white mt-2 mb-0 sm:mt-0 sm:mb-0 rounded-full flex items-center justify-center"
                  >+</span
                >
              </div>
            </div>
            <!-- detail box -->
            <div class="item__detail absolute" id="item3">
              <div
                class="detail__box hover:cursor-pointer flex items-center justify-center flex-col-reverse rounded-full"
              >
                <!-- detail item -->
                <div
                  class="box__item-detail z-1 p-2 sm:p-3 flex flex-col items-center bg-white absolute invisible opacity-0 z-10"
                >
                  <!-- image -->
                  <img
                    class="w-full object-cover"
                    :src="require('~/assets/media/img/brand-1.jpg')"
                    alt="volta"
                  />
                  <!-- title -->
                  <nuxt-link
                    :to="localePath('/battery-details')"
                    class="item-detail__title flex justify-center text-center mt-3 overflow-hidden"
                    >{{ $t("main_page.battery_details.more") }}</nuxt-link
                  >
                </div>
                <!-- + -->
                <span
                  class="z-2 box__icon bg-white mt-2 mb-0 sm:mt-0 sm:mb-0 rounded-full flex items-center justify-center"
                  >+</span
                >
              </div>
            </div>
            <!-- detail box -->
            <div class="item__detail absolute" id="item7">
              <div
                class="detail__box hover:cursor-pointer flex items-center justify-center flex-col-reverse rounded-full"
              >
                <!-- detail item -->
                <div
                  class="box__item-detail z-1 p-2 sm:p-3 flex flex-col items-center bg-white absolute invisible opacity-0 z-10 rounded-md"
                >
                  <!-- image -->
                  <img
                    class="w-full object-contain h-28"
                    :src="require('~/assets/media/img/technology_select.png')"
                    alt="volta"
                  />
                  <!-- title -->
                  <nuxt-link
                    :to="localePath('/battery-details')"
                    class="item-detail__title flex justify-center text-center mt-3 overflow-hidden"
                    >{{ $t("main_page.battery_details.more") }}</nuxt-link
                  >
                </div>
                <!-- + -->
                <span
                  class="z-2 box__icon bg-white mt-2 mb-0 sm:mt-0 sm:mb-0 rounded-full flex items-center justify-center"
                  >+</span
                >
              </div>
            </div>
            <!-- detail box -->
            <div class="item__detail absolute" id="item8">
              <div
                class="detail__box hover:cursor-pointer flex items-center justify-center flex-col-reverse rounded-full"
              >
                <!-- detail item -->
                <div
                  class="box__item-detail z-1 p-2 sm:p-3 flex flex-col items-center bg-white absolute invisible opacity-0 z-10 rounded-md"
                >
                  <!-- image -->
                  <img
                    class="w-full object-contain h-28"
                    :src="require('~/assets/media/img/cover.png')"
                    alt="volta"
                  />
                  <!-- title -->
                  <nuxt-link
                    :to="localePath('/battery-details')"
                    class="item-detail__title flex justify-center text-center mt-3 overflow-hidden"
                    >{{ $t("main_page.battery_details.more") }}</nuxt-link
                  >
                </div>
                <!-- + -->
                <span
                  class="z-2 box__icon bg-white mt-2 mb-0 sm:mt-0 sm:mb-0 rounded-full flex items-center justify-center"
                  >+</span
                >
              </div>
            </div>
            <!-- detail box -->
            <div class="item__detail absolute" id="item9">
              <div
                class="detail__box hover:cursor-pointer flex items-center justify-center flex-col-reverse rounded-full"
              >
                <!-- detail item -->
                <div
                  class="box__item-detail z-1 p-2 sm:p-3 flex flex-col items-center bg-white absolute invisible opacity-0 z-10 rounded-md"
                >
                  <!-- image -->
                  <img
                    class="w-full object-contain h-28"
                    :src="require('~/assets/media/img/darbvrla.png')"
                    alt="volta"
                  />
                  <!-- title -->
                  <nuxt-link
                    :to="localePath('/battery-details')"
                    class="item-detail__title flex justify-center text-center mt-3 overflow-hidden"
                    >{{ $t("main_page.battery_details.more") }}</nuxt-link
                  >
                </div>
                <!-- + -->
                <span
                  class="z-2 box__icon bg-white mt-2 mb-0 sm:mt-0 sm:mb-0 rounded-full flex items-center justify-center"
                  >+</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section class="py-12 flex flex-col dark:bg-zinc-900">
      <div
        class="container mx-auto flex xl:px-20 px-5 gap-10 flex-col lg:flex-row items-center"
      >
        <div class="basis-1/2 shadow-lg">
          <img
            class="w-full h-80 object-cover rounded-lg"
            :src="require('~/assets/media/img/our-team.jpg')"
            alt="admin img"
          />
        </div>
        <div
          class="basis-1/2 flex flex-col items-center lg:items-start justify-center"
        >
          <!-- title -->
          <h2
            class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
          >
            {{ $t("main_page.admin_speech.title") }}
          </h2>
          <!-- yellow line -->
          <div class="w-16 h-0.5 bg-yellow mt-3"></div>
          <!-- desc -->
          <p
            class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2 dark:text-zinc-50"
          >
            {{ $t("main_page.admin_speech.desc") }}
          </p>
        </div>
      </div>
    </section>
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
        <!-- mobile only -->
        <div class="grid lg:hidden rounded-lg gap-7 lg:gap-10 grid-cols-1">
          <div class="flex items-center justify-center">
            <div
              class="w-full flex justify-center flex-wrap gap-y-10 mt-10 gap-10"
            >
              <div
                class="p-10 shadow-md rounded-lg bg-white dark:bg-zinc-950 border-bottom-yellow"
              >
                <img
                  class="flex flex-col items-center gap-5 lg:basis-1/12 sm:basis-1/12 basis-2/12 object-cover"
                  :src="require('~/assets/media/img/customer1.png')"
                  alt="volta"
                />
              </div>
              <div
                class="p-10 shadow-md rounded-lg bg-white dark:bg-zinc-950 border-bottom-yellow"
              >
                <img
                  class="flex flex-col items-center gap-5 lg:basis-1/12 sm:basis-1/12 basis-2/12 object-cover"
                  :src="require('~/assets/media/img/customer2.png')"
                  alt="volta"
                />
              </div>
              <div
                class="p-10 shadow-md rounded-lg bg-white dark:bg-zinc-950 border-bottom-yellow"
              >
                <img
                  class="flex flex-col items-center gap-5 lg:basis-1/12 sm:basis-1/12 basis-2/12 object-cover"
                  :src="require('~/assets/media/img/customer3.png')"
                  alt="volta"
                />
              </div>
              <div
                class="p-10 shadow-md rounded-lg bg-white dark:bg-zinc-950 border-bottom-yellow"
              >
                <img
                  class="flex flex-col items-center gap-5 lg:basis-1/12 sm:basis-1/12 basis-2/12 object-cover"
                  :src="require('~/assets/media/img/customer4.png')"
                  alt="volta"
                />
              </div>
              <div
                class="p-10 shadow-md rounded-lg bg-white dark:bg-zinc-950 border-bottom-yellow"
              >
                <img
                  class="flex flex-col items-center gap-5 lg:basis-1/12 sm:basis-1/12 basis-2/12 object-cover"
                  :src="require('~/assets/media/img/customer5.png')"
                  alt="volta"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- web only -->
        <div class="w-full hidden lg:block">
          <div class="w-full">
            <slider-3d-customers />
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section
      class="w-full h-full bg-no-repeat bg-center bg-cover py-16 relative flex"
      :style="cssProps"
    >
      <!-- bg -->
      <div
        style="opacity: 75%"
        class="w-full h-full absolute top-0 right-0 bg-black"
      ></div>
      <!-- content -->
      <div
        class="container mx-auto xl:px-20 px-5 flex text-white justify-between z-20 flex-wrap gap-y-10"
      >
        <!-- item -->
        <div
          class="flex items-center gap-5 basis-full sm:basis-1/2 lg:basis-auto justify-center xl:justify-normal"
        >
          <!-- icon -->
          <div class="w-12 h-12">
            <img
              class="w-full"
              :src="require('~/assets/media/svg/product.svg')"
              alt="icon"
            />
          </div>
          <div class="flex flex-col">
            <!-- number -->
            <span class="font-bold text-2xl">120</span>
            <!-- title -->
            <span class="lg:text-base text-sm">{{
              $t("main_page.counter.prouducts")
            }}</span>
          </div>
        </div>
        <!-- item -->
        <div
          class="flex items-center gap-5 basis-full sm:basis-1/2 lg:basis-auto justify-center xl:justify-normal"
        >
          <!-- icon -->
          <div class="w-12 h-12">
            <img
              class="w-full"
              :src="require('~/assets/media/svg/agent.svg')"
              alt="icon"
            />
          </div>
          <div class="flex flex-col">
            <!-- number -->
            <span class="font-bold text-2xl">180</span>
            <!-- title -->
            <span class="lg:text-base text-sm">{{
              $t("main_page.counter.agent")
            }}</span>
          </div>
        </div>
        <!-- item -->
        <div
          class="flex items-center gap-5 basis-full sm:basis-1/2 lg:basis-auto justify-center xl:justify-normal"
        >
          <!-- icon -->
          <div class="w-12 h-12">
            <img
              class="w-full"
              :src="require('~/assets/media/svg/personnel2.svg')"
              alt="icon"
            />
          </div>
          <div class="flex flex-col">
            <!-- number -->
            <span class="font-bold text-2xl">350</span>
            <!-- title -->
            <span class="lg:text-base text-sm">{{
              $t("main_page.counter.personnel")
            }}</span>
          </div>
        </div>
        <!-- item -->
        <div
          class="flex items-center gap-5 basis-full sm:basis-1/2 lg:basis-auto justify-center xl:justify-normal"
        >
          <!-- icon -->
          <img
            class="w-12 h-full"
            :src="require('~/assets/media/svg/certification.svg')"
            alt="icon"
          />
          <div class="flex flex-col">
            <!-- number -->
            <span class="font-bold text-2xl">32</span>
            <!-- title -->
            <span class="lg:text-base text-sm">{{
              $t("main_page.counter.certification")
            }}</span>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section class="pb-12 pt-16 flex flex-col dark:bg-zinc-900">
      <div class="container mx-auto flex flex-col items-center xl:px-20 px-5">
        <!-- title -->
        <h1 class="font-bold text-lg lg:text-2xl dark:text-zinc-50">
          {{ $t("main_page.contact_us.title") }}
        </h1>
        <!-- yellow line -->
        <div class="w-16 h-0.5 bg-yellow mt-3"></div>
        <!-- desc -->
        <p
          class="w-full lg:w-2/6 text-center mt-3 text-sm lg:text-base dark:text-zinc-50"
        >
          {{ $t("main_page.contact_us.desc") }}
        </p>
        <div
          class="w-full flex justify-center flex-wrap gap-y-10 mt-10 dark:text-zinc-50"
        >
          <!-- item -->
          <div
            class="flex flex-col items-center gap-3 lg:basis-4/12 md:basis-5/12 basis-full"
          >
            <img
              class="w-12"
              :src="require('~/assets/media/svg/address.svg')"
              alt="address"
            />
            <div class="flex flex-col">
              <h2 class="font-bold text-center text-sm lg:text-base mb-2">
                {{ $t("main_page.contact_us.address.title") }}
              </h2>
              <p class="text-center text-sm lg:text-base">
                {{ $t("main_page.contact_us.address.desc") }}
              </p>
              <a
                href="https://www.google.com/maps/place/%D8%B4%D8%B1%DA%A9%D8%AA+%D9%86%DB%8C%D8%B1%D9%88%DA%AF%D8%B3%D8%AA%D8%B1%D8%A7%D9%86+%D8%AE%D8%B1%D8%A7%D8%B3%D8%A7%D9%86%E2%80%AD/@36.480484,59.682356,13z/data=!4m6!3m5!1s0x3f6c8646fd9f18dd:0x92056bd4a6061b1f!8m2!3d36.4804837!4d59.6823555!16s%2Fg%2F11bw61923s?hl=en&entry=ttu"
                class="yellow text-sm text-center lg:text-base mt-1"
                >{{ $t("main_page.contact_us.address.btn") }}</a
              >
            </div>
          </div>
          <!-- item -->
          <div
            class="flex flex-col items-center gap-3 lg:basis-4/12 md:basis-5/12 basis-full"
          >
            <img
              class="w-12"
              :src="require('~/assets/media/svg/mail.svg')"
              alt="mail"
            />
            <div class="flex flex-col">
              <h2 class="font-bold text-center text-sm lg:text-base mb-2">
                {{ $t("main_page.contact_us.contacts.title") }}
              </h2>
              <p class="text-center text-sm lg:text-base">info@ngkh.ir</p>
              <a
                href="tel:+677839749472"
                class="text-center text-sm lg:text-base underline"
                dir="ltr"
              >
                +67 7839 749 472
              </a>
              <a
                href="tel:+677839749472"
                class="yellow text-sm text-center lg:text-base mt-1"
                >{{ $t("main_page.contact_us.contacts.btn") }}</a
              >
            </div>
          </div>
          <!-- item -->
          <div
            class="flex flex-col items-center gap-3 lg:basis-4/12 md:basis-5/12 basis-full"
          >
            <img
              class="w-12"
              :src="require('~/assets/media/svg/support.svg')"
              alt="mail"
            />
            <div class="flex flex-col">
              <h2 class="font-bold text-center text-sm lg:text-base mb-2">
                {{ $t("main_page.contact_us.after_sales_service.title") }}
              </h2>
              <p class="text-center text-sm lg:text-base">
                پشتیبانی :
                <a
                  href="tel:+2626611"
                  class="text-center text-sm lg:text-base underline"
                  dir="ltr"
                >
                  2626611
                </a>
              </p>
              <a
                href="tel:+2626611"
                class="yellow text-sm text-center lg:text-base mt-1"
                >{{ $t("main_page.contact_us.after_sales_service.btn") }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <section class="py-12 dark:bg-zinc-900" v-if="$i18n.locale == 'fa'">
      <div class="container mx-auto xl:px-20 px-5">
        <!--  -->
        <div class="mb-5 flex justify-between items-center text-sm">
          <div class="flex flex-col">
            <!-- title -->
            <h1 class="font-bold text-lg lg:text-2xl dark:text-zinc-50">
              آخرین مقالات
            </h1>
            <!-- yellow line -->
            <div class="w-16 h-0.5 bg-yellow mt-3"></div>
          </div>
          <!--  -->
          <nuxt-link
            class="text-sm lg:text-md dark:text-white ease-in-out flex"
            :to="'blog/'"
            >مشاهده بیشتر
          </nuxt-link>
        </div>
        <!--  -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          <div
            v-for="(item, index) in posts"
            :key="index"
            class="overflow-hidden flex flex-col px-2 pt-2 rounded-lg shadow-md hover:shadow-lg bg-gray-100 dark:bg-zinc-800"
          >
            <nuxt-link
              :to="'blog/' + posts[index].slug"
              class="h-44 w-full overflow-hidden flex items-center rounded-lg"
            >
              <!-- posts[index].featured_image_url -->
              <img
                class="w-full h-full object-cover"
                :src="
                  posts[index]._embedded['wp:featuredmedia']['0'].source_url
                "
                alt="Sunset in the mountains"
              />
            </nuxt-link>

            <div
              class="px-2 py-3 mb-auto flex flex-col items-start gap-2 relative h-36"
            >
              <nuxt-link
                :to="'blog/' + posts[index].slug"
                class="font-medium transition text-limit-1 ease-in-out inline-block dark:text-white w-full"
                >{{ posts[index].title.rendered }}</nuxt-link
              >
              <div
                class="text-gray-500 text-sm text-limit-2 transition-all dark:text-white leading-6"
                v-html="posts[index].excerpt.rendered"
              />
              <div
                class="w-full flex justify-between absolute left-0 bottom-3 px-2"
              >
                <nuxt-link
                  class="text-sm yellow ease-in-out flex"
                  :to="'blog/' + posts[index].slug"
                  >ادامه مطلب
                </nuxt-link>
              </div>
            </div>
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
  async fetch() {
    this.posts = await fetch(
      "http://sub.ngkh.ir/wp-json/wp/v2/posts?per_page=4&_embed"
    ).then((res) => res.json());
    this.cat = await fetch("http://sub.ngkh.ir/wp-json/wp/v2/categories").then(
      (res) => res.json()
    );
  },
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
      cssProps: {
        backgroundImage: `url(${require("~/assets/media/img/car-battery.jpeg")})`,
      },
      bgEnfejari: {
        backgroundImage: `url(${require("~/assets/media/img/enfejari.png")})`,
      },
      bgVideo: {
        backgroundImage: `url(${require("~/assets/media/img/bg-video.png")})`,
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
.look-shop__box {
  .box__item {
    .item__detail {
      &#item1 {
        left: 75%;
        bottom: 28%;
      }
      &#item2 {
        left: 70%;
        bottom: 30%;
      }
      &#item3 {
        left: 65%;
        bottom: 32%;
      }
      &#item7 {
        left: 44%;
        bottom: 95%;
      }
      &#item8 {
        left: 40%;
        bottom: 82%;
      }
      &#item9 {
        left: 40%;
        bottom: 72%;
      }
      .detail__box {
        animation: ripple 800ms infinite;
        &:hover {
          animation: unset;
          .box__icon {
            background: rgb(138, 138, 138);
          }
          .box__item-detail {
            opacity: 1;
            visibility: visible;
          }
        }
        .box__icon {
          width: 25px;
          height: 25px;
          transition: 0.3s;
          background: $yellow-color;
          color: rgb(255, 255, 255);
          @media only screen and (max-width: 992px) {
            opacity: 1;
            visibility: visible;
          }
          @media only screen and (max-width: 576px) {
            background: rgb(138, 138, 138);
            color: rgb(255, 255, 255);
          }
        }
        .box__item-detail {
          width: 250px;
          left: calc(0px + 25px);
          bottom: 0;
          box-shadow: -1px 5px 5px 0 hsl(0deg 0% 56% / 20%);
          transition: 250ms;
          .item-detail__title {
            font-size: 14px;
            text-overflow: ellipsis;
            display: -webkit-box;
            max-height: 40px; /* fallback */
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
            @media (max-width: 992px) {
              font-size: 12px;
            }
            &:hover {
              color: #9b9b9b !important;
            }
          }
          .item-detail__currency {
            font-size: 14px;
          }
          @media only screen and (max-width: 576px) {
            width: 100%;
            opacity: 1;
            visibility: visible;
            position: unset;
            left: unset;
          }
        }
        @media only screen and (max-width: 992px) {
          animation: unset;
        }
      }
      @media only screen and (max-width: 576px) {
        left: unset;
        bottom: unset;
        position: unset;
      }
    }
  }
  .box__title {
    font-size: 20px;
  }
}
@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0.1px transparent, 0 0 0 0.1px transparent,
      0 0 0 0.1px transparent, 0 0 0 0.1px rgba(235, 181, 5, 0.507);
  }
  100% {
    box-shadow: 0 0 0 10px transparent, 0 0 0 10px transparent,
      0 0 0 10px transparent, 0 0 0 12px transparent;
  }
}
</style>