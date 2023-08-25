<template>
  <div class="overflow-hidden">
    <!--  -->
    <div
      class="w-full min-h-screen h-auto bg-fixed bg-cover relative"
      :style="cssProps"
    >
      <!-- bg blur -->
      <div
        class="blur-lg w-full h-full absolute top-0 left-0 bg-black/60"
        style="filter: blur(16px) !important"
      ></div>
      <!-- content -->
      <section
        class="py-10 flex flex-col w-full min-h-screen h-auto text-white"
      >
        <div
          class="container mx-auto flex xl:px-20 px-5 gap-10 flex-col lg:flex-row min-h-screen h-auto z-10"
        >
          <!--  -->
          <div
            class="basis-full flex flex-col items-center lg:items-start min-h-screen h-auto justify-center"
          >
            <!-- title -->
            <h2 class="font-bold text-lg lg:text-2xl text-center lg:text-end">
              {{ $t("policy_page.title") }}
            </h2>
            <!-- yellow line -->
            <div class="w-16 h-0.5 bg-yellow mt-3"></div>
            <!-- desc -->
            <p
              class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
            >
              {{ $t("policy_page.subject") }}
            </p>
            <br />
            <p
              class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
            >
              {{ $t("policy_page.p1") }}
            </p>
            <p
              class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
            >
              <span class="font-bold">{{ $t("policy_page.bold") }}</span>
              {{ $t("policy_page.p2") }}
            </p>
            <ul
              class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2 mx-5"
              style="list-style-type: circle !important"
            >
              <li>
                {{ $t("policy_page.li1") }}
              </li>
              <li>
                {{ $t("policy_page.li2") }}
              </li>
              <li>{{ $t("policy_page.li3") }}</li>
              <li>
                {{ $t("policy_page.li4") }}
              </li>
              <li>
                {{ $t("policy_page.li5") }}
              </li>
              <li>{{ $t("policy_page.li6") }}</li>
              <li>{{ $t("policy_page.li7") }}</li>
              <li>{{ $t("policy_page.li8") }}</li>
              <li>{{ $t("policy_page.li9") }} .</li>
            </ul>
            <p
              class="text-center lg:text-justify text-sm lg:text-base leading-7 lg:leading-8 mt-2"
            >
              {{ $t("policy_page.p3") }}
            </p>
            <br />
            <p
              class="flex justify-end text-sm lg:text-base leading-7 lg:leading-8"
            >
              {{ $t("policy_page.admin") }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("~/assets/media/img/img1.jpg")})`,
      },
    };
  },
};
</script>