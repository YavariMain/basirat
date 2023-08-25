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
          {{ $t("laboratory_page.title") }}
        </h2>
        <!-- yellow line -->
        <div class="w-16 h-0.5 bg-yellow mt-3"></div>
        <!-- desc -->
        <p
          class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
        >
          {{ $t("laboratory_page.p1") }}
        </p>
        <br />
        <p
          class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
        >
          {{ $t("laboratory_page.p2") }}
        </p>
        <ul
          class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2 mx-5"
          style="list-style-type: circle !important"
        >
          <li>
            {{ $t("laboratory_page.li1") }}
          </li>
          <li>
            {{ $t("laboratory_page.li2") }}
          </li>
          <li>{{ $t("laboratory_page.li3") }}</li>
          <li>
            {{ $t("laboratory_page.li4") }}
          </li>
        </ul>
        <p
          class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
        >
          {{ $t("laboratory_page.p3") }}
        </p>
        <br />
        <p
          class="flex justify-end lg:text-base leading-7 lg:leading-8 font-bold text-2xl font-sans"
        >
          ISO/IEC 17025:2017
        </p>
        <img
          :src="require('~/assets/media/img/Logo-w.jpg')"
          alt="Logo ISO"
          class="my-10"
        />
        <p
          class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
        >
          {{ $t("laboratory_page.p4") }}
        </p>
        <img
          :src="require('~/assets/media/img/lab.jpg')"
          alt="Laboratory"
          class="my-10"
        />
      </div>
    </div>
  </section>
</template>