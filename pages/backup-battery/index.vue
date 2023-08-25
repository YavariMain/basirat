<template>
  <section
    class="cat-slider lg:px-0 dark:bg-zinc-900 min-h-screen overflow-hidden flex flex-col gap-10 relative"
  >
    <img
      :style="$i18n.locale == 'fa' ? '' : 'transform: scaleX(-1)'"
      class="w-full absolute opacity-25"
      :src="require('~/assets/media/img/png-pattern2.png')"
      alt="logo"
    />
    <!-- brands -->
    <div class="container mx-auto pt-20 px-5 z-10">
      <div class="w-full">
        <!-- Tabs -->
        <ul
          id="tabs"
          class="flex justify-center pt-2 px-1 w-full gap-5 flex-wrap"
        >
          <!-- unikor -->
          <li
            class="border-yellow border border-zinc-400 hover:cursor-pointer p-1 rounded-md -mb-px"
          >
            <img
              id="default-tab"
              href="#first"
              class="w-16 object-cover"
              :src="require('~/assets/media/img/brand-7.jpg')"
              alt="volta"
            />
          </li>
        </ul>
        <!-- Tab Contents -->
        <div
          id="tab-contents"
          class="relative mt-10 lg:mt-20"
          style="height: 60rem"
        >
          <!-- unikor -->
          <div id="first" class="absolute w-full opacity-0 active">
            <div
              class="flex flex-col items-center lg:items-start mb-10 container mx-auto px-7"
            >
              <!-- title -->
              <h2
                class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
              >
                <template v-if="$i18n.locale == 'fa'">
                  {{ unikor.brandFA }}
                </template>
                <template v-else>
                  {{ unikor.brandEN }}
                </template>
              </h2>
              <!-- yellow line -->
              <div class="w-16 h-0.5 bg-yellow mt-3"></div>
            </div>
            <slider-battery :contents="unikor.backup" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const unikor = await $content("unikor").fetch();
    return {
      unikor,
    };
  },
  data() {
    return {};
  },
  mounted() {
    let tabsContainer = document.querySelector("#tabs");
    let tabTogglers = tabsContainer.querySelectorAll("#tabs img");
    tabTogglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        e.preventDefault();
        let tabName = this.getAttribute("href");
        let tabContents = document.querySelector("#tab-contents");
        for (let i = 0; i < tabContents.children.length; i++) {
          tabTogglers[i].parentElement.classList.remove(
            "-mb-px",
            "border-yellow"
          );
          tabContents.children[i].classList.remove("invisible");
          tabContents.children[i].classList.add("active");
          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }
          tabContents.children[i].classList.remove("active");
          tabContents.children[i].classList.add("invisible");
        }
        e.target.parentElement.classList.add("-mb-px", "border-yellow");
      });
    });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
.cat-slider {
  transition: all 0.5s;
  .cat-slider__title {
    font-size: 25px;
    @media only screen and (max-width: 767px) {
      font-size: calc(2vw + 20px);
    }
  }
}
#tab-contents {
  .active {
    transition: all 1s ease;
    visibility: visible;
    opacity: 1;
  }
}
</style>
