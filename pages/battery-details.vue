<template>
  <section
    class="py-10 flex flex-col w-full  dark:bg-zinc-900"
  >
    <div
      class="container mx-auto flex xl:px-20 px-5 gap-10 flex-col lg:flex-row"
    >
      <!--  -->
      <div
        class="basis-full flex flex-col items-center lg:items-start  dark:text-white"
      >
        <!-- title -->
        <h2
          class="font-bold text-lg lg:text-2xl text-center lg:text-end"
        >
          {{ $t("battery_details_page.title") }}
        </h2>
        <!-- yellow line -->
        <div class="w-16 h-0.5 bg-yellow mt-3"></div>
        <img
          :src="require('~/assets/media/img/technology_top_02_01.jpg')"
          alt="technology_top_02_01"
          class="my-10 w-full"
        />
        <!-- desc -->
        <p
          class="text-start lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
        >
          {{ $t("battery_details_page.p1") }}
        </p>
        <p
          class="text-start lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
        >
          {{ $t("battery_details_page.p2") }}
        </p>
        <!--  -->
        <div class="grid grid-cols-1 gap-7 mt-10 w-full" ref="target">
          <!-- item -->
          <div
            class="overflow-hidden flex flex-col rounded-lg "
          >
            <div
              class="h-44 w-full overflow-hidden flex items-center justify-center"
              style="background: #f5f5f5"
            >
              <img
                class="h-full"
                :src="require('~/assets/media/img/img_technology1.jpg')"
                alt="img_technology1"
              />
            </div>

            <div class="py-3 mb-auto flex flex-col items-start gap-2">
              <span
                class="font-bold inline-block dark:text-white w-full"
                >{{ $t("battery_details_page.item1[0]") }}
              </span>
              <p
                class="text-gray-500 text-sm dark:text-white leading-6"
              >
                {{ $t("battery_details_page.item1[1]") }}
              </p>
            </div>
          </div>
          <!-- item -->
          <div
            class="overflow-hidden flex flex-col rounded-lg "
          >
            <div
              class="h-44 w-full overflow-hidden flex items-center justify-center"
              style="background: #f5f5f5"
            >
              <img
                class="h-full"
                :src="require('~/assets/media/img/img_technology2.jpg')"
                alt="img_technology2"
              />
            </div>

            <div class="py-3 mb-auto flex flex-col items-start gap-2">
              <span
                class="font-bold inline-block dark:text-white w-full"
                >{{ $t("battery_details_page.item2[0]") }}
              </span>
              <p
                class="text-gray-500 text-sm dark:text-white leading-6"
              >
                {{ $t("battery_details_page.item2[1]") }}
              </p>
            </div>
          </div>
          <!-- item -->
          <div
            class="overflow-hidden flex flex-col rounded-lg "
          >
            <div
              class="h-44 w-full overflow-hidden flex items-center justify-center"
              style="background: #f5f5f5"
            >
              <img
                class="h-full"
                :src="require('~/assets/media/img/img_technology3.jpg')"
                alt="img_technology3"
              />
            </div>

            <div class="py-3 mb-auto flex flex-col items-start gap-2">
              <span
                class="font-bold inline-block dark:text-white w-full"
                >{{ $t("battery_details_page.item3[0]") }}
              </span>
              <p
                class="text-gray-500 text-sm dark:text-white leading-6"
              >
                {{ $t("battery_details_page.item3[1]") }}
              </p>
            </div>
          </div>
          <!-- item -->
          <div
            class="overflow-hidden flex flex-col rounded-lg "
          >
            <div
              class="h-44 w-full overflow-hidden flex items-center justify-center"
              style="background: #f5f5f5"
            >
              <img
                class="h-full"
                :src="require('~/assets/media/img/img_technology4.jpg')"
                alt="img_technology4"
              />
            </div>

            <div class="py-3 mb-auto flex flex-col items-start gap-2">
              <span
                class="font-bold inline-block dark:text-white w-full"
                >{{ $t("battery_details_page.item4[0]") }}
              </span>
              <p
                class="text-gray-500 text-sm dark:text-white leading-6"
              >
                {{ $t("battery_details_page.item4[1]") }}
              </p>
            </div>
          </div>
          <!-- item -->
          <div
            class="overflow-hidden flex flex-col rounded-lg "
          >
            <div
              class="h-44 w-full overflow-hidden flex items-center justify-center"
              style="background: #f5f5f5"
            >
              <img
                class="h-full"
                :src="require('~/assets/media/img/img_technology5.jpg')"
                alt="img_technology5"
              />
            </div>

            <div class="py-3 mb-auto flex flex-col items-start gap-2">
              <span
                class="font-bold inline-block dark:text-white w-full"
                >{{ $t("battery_details_page.item5[0]") }}
              </span>
              <p
                class="text-gray-500 text-sm dark:text-white leading-6"
              >
                {{ $t("battery_details_page.item5[1]") }}
              </p>
            </div>
          </div>
          <!-- item -->
          <div
            class="overflow-hidden flex flex-col rounded-lg "
          >
            <div
              class="h-44 w-full overflow-hidden flex items-center justify-center"
              style="background: #f5f5f5"
            >
              <img
                class="h-full"
                :src="require('~/assets/media/img/img_technology6.jpg')"
                alt="img_technology6"
              />
            </div>

            <div class="py-3 mb-auto flex flex-col items-start gap-2">
              <span
                class="font-bold inline-block dark:text-white w-full"
                >{{ $t("battery_details_page.item6[0]") }}
              </span>
              <p
                class="text-gray-500 text-sm dark:text-white leading-6"
              >
                {{ $t("battery_details_page.item6[1]") }}
              </p>
            </div>
          </div>
        </div>
        <img
          :src="require('~/assets/media/img/motor-product.png')"
          alt="motor-product"
          class="my-10 w-full"
        />
        <div
          class="rounded-lg flex flex-col p-5 lg:p-10 bg-gray-100 dark:bg-zinc-800 shadow-lg w-full"
        >
          <!-- title -->
          <h2 class="font-bold text-lg lg:text-2xl">
            {{ $t("battery_details_page.li_title") }}
          </h2>
          <ul
            class="text-start lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2 mx-5"
            style="list-style-type: circle !important"
          >
            <li>
              {{ $t("battery_details_page.li1") }}
            </li>
            <li>{{ $t("battery_details_page.li2") }}</li>
            <li>
              {{ $t("battery_details_page.li3") }}
            </li>
            <li>{{ $t("battery_details_page.li4") }}</li>
            <li>{{ $t("battery_details_page.li5") }}</li>
            <li>{{ $t("battery_details_page.li6") }}</li>
          </ul>
        </div>
        <img
          :src="require('~/assets/media/img/Vector-Smart-Object.jpg')"
          alt="Vector-Smart-Object"
          class="my-10 w-full"
        />
        <div class="my-10 w-full flex flex-wrap">
          <img
            :src="require('~/assets/media/img/Terminal.jpg')"
            alt="Terminal"
            class="w-full lg:w-1/2"
          />
          <img
            :src="require('~/assets/media/img/Dimensions.jpg')"
            alt="Dimensions"
            class="w-full lg:w-1/2"
          />
        </div>
      </div>
    </div>
  </section>
</template>