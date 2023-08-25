<template>
  <section
    class="py-10 flex flex-col w-full min-h-screen h-auto dark:bg-zinc-900"
  >
    <div
      class="container mx-auto flex xl:px-20 px-5 gap-10 flex-col lg:flex-row min-h-screen h-auto"
    >
      <!--  -->
      <div
        class="basis-full flex flex-col items-center lg:items-start min-h-screen h-auto justify-center dark:text-white"
      >
        <!-- title -->
        <h2 class="font-bold text-lg lg:text-2xl text-center lg:text-end">
          {{ $t("guide_page.title") }}
        </h2>
        <!-- yellow line -->
        <div class="w-16 h-0.5 bg-yellow mt-3"></div>
        <!-- desc -->
        <p
          class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
        >
          {{ $t("guide_page.p1") }}
        </p>
        <br />
        <ul
          class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2 mx-5"
          style="list-style-type: circle !important"
        >
          <li>
            {{ $t("guide_page.li1") }}
          </li>
          <li>
            {{ $t("guide_page.li2") }}
          </li>
          <li>{{ $t("guide_page.li3") }}</li>
          <li>
            {{ $t("guide_page.li4") }}
          </li>
          <li>
            {{ $t("guide_page.li5") }}
          </li>
        </ul>
        <br />
        <!-- title -->
        <h2 class="font-bold text-lg lg:text-2xl text-center lg:text-end">
          {{ $t("guide_page.img_title") }}
        </h2>
        <!-- yellow line -->
        <div class="w-16 h-0.5 bg-yellow mt-3"></div>
        <div
          class="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-5 w-full lg:w-2/3"
        >
          <img
            :src="require('~/assets/media/img/alaem01.png')"
            alt="alaem1"
            class="w-full"
          />
          <img
            :src="require('~/assets/media/img/alaem02.png')"
            alt="alaem2"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </section>
</template>