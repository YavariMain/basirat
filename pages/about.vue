<template>
  <div class="overflow-hidden dark:bg-zinc-900">
    <!-- image section -->
    <section>
      <img
        class="w-full"
        :src="require('~/assets/media/img/our-team.jpg')"
        alt="our-team"
      />
    </section>
    <!--  -->
    <section class="py-10 flex flex-col">
      <div
        class="container mx-auto flex xl:px-20 px-5 gap-10 flex-col lg:flex-row dark:text-zinc-50"
      >
        <!--  -->
        <div
          class="basis-1/2 flex flex-col items-center lg:items-start justify-center"
        >
          <!-- title -->
          <h2 class="font-bold text-lg lg:text-2xl text-center lg:text-end">
            {{ $t("about_page.title") }}
          </h2>
          <!-- yellow line -->
          <div class="w-16 h-0.5 bg-yellow mt-3"></div>
          <!-- desc -->
          <p
            class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
          >
            {{ $t("about_page.p1") }}
          </p>
          <br />
          <p
            class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
          >
            {{ $t("about_page.p2") }}
          </p>
        </div>
        <!--  -->
        <div class="basis-1/2 shadow-lg">
          <img
            class="w-full h-full object-cover rounded-lg"
            :src="require('~/assets/media/img/about-img1.jpg')"
            alt="about-img"
          />
        </div>
      </div>
    </section>
  </div>
</template>