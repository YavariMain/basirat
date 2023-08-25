<template>
  <section
    class="py-10 flex flex-col w-full min-h-screen h-auto dark:bg-zinc-900"
  >
    <div class="container mx-auto flex xl:px-20 px-5 flex-col h-auto">
      <div class="w-full">
        <div class="tabs dark:text-white">
          <div
            class="tabs__nav flex justify-center gap-x-7 lg:gap-x-4 gap-y-3 mb-14 flex-wrap font-bold"
          >
            <!-- EN Tab -->
            <template v-if="$i18n.locale == 'en'">
              <div
                class="tabs__nav_tab rounded-md border"
                :class="
                  active === index ? 'border-yellow' : 'border-transparent'
                "
                v-for="(item, index) in itemsEN"
                :key="index"
                @click="activate(index)"
              >
                {{ item }}
              </div>
            </template>
            <!-- FA Tab -->
            <template v-if="$i18n.locale == 'fa'">
              <div
                class="tabs__nav_tab rounded-md border"
                :class="
                  active == index ? 'border-yellow' : 'border-transparent'
                "
                v-for="(item, index) in itemsFA"
                :key="index"
                @click="activate(index)"
              >
                {{ item }}
              </div>
            </template>
          </div>
          <div class="tabs__content" v-if="active === 0">
            <div class="w-full flex flex-col">
              <!--  -->
              <div
                class="basis-full flex flex-col items-center lg:items-start h-auto justify-center dark:text-white"
              >
                <!-- title -->
                <h2
                  class="font-bold text-lg lg:text-2xl text-center lg:text-end"
                >
                  {{ $t("starter_battery_page.AGM.main_title") }}
                </h2>
                <!-- yellow line -->
                <div class="w-16 h-0.5 bg-yellow mt-3"></div>
                <!-- desc -->
                <p
                  class="text-sm lg:text-base leading-7 lg:leading-8 mt-2 w-full"
                >
                  {{ $t("starter_battery_page.AGM.main_paragraph") }}
                </p>
                <br />
                <p
                  class="text-sm lg:text-base leading-7 lg:leading-8 mt-2 w-full"
                >
                  <span class="font-bold">{{
                    $t("starter_battery_page.AGM.core_technology_subject")
                  }}</span
                  ><br />
                  {{ $t("starter_battery_page.AGM.core_technology_attr1") }}
                  <br />
                  {{ $t("starter_battery_page.AGM.core_technology_attr2") }}
                  <br />
                  {{ $t("starter_battery_page.AGM.core_technology_attr3") }}
                </p>
                <p
                  class="text-sm lg:text-base leading-7 lg:leading-8 mt-10 w-full"
                >
                  <span class="font-bold"
                    >{{
                      $t("starter_battery_page.AGM.advantages_subject")
                    }} </span
                  ><br />
                  {{ $t("starter_battery_page.AGM.advantages_attr1") }}<br />
                  {{ $t("starter_battery_page.AGM.advantages_attr2") }}<br />
                  {{ $t("starter_battery_page.AGM.advantages_attr3") }}<br />
                  {{ $t("starter_battery_page.AGM.advantages_attr4") }}
                </p>
                <img
                  class="my-10 lg:my-20"
                  :src="require('~/assets/media/img/img_technology_cont.png')"
                  alt="mg_technology_cont"
                />
              </div>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 flex-col lg:flex-row">
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery1.png')"
                      alt="admin img"
                    />
                  </div>
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item1[0]") }}
                    </h2>
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item1[1]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item1[2]") }}
                    </h3>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item1[3]") }}
                    </p>
                    <p
                      class="text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item1[4]") }}
                    </p>
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 lg:flex-row flex-col-reverse">
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- desc -->
                    <p
                      class="font-bold text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item2[0]") }}
                    </p>
                    <p
                      class="text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item2[1]") }}
                    </p>
                    <!-- desc -->
                    <p
                      class="font-bold text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item2[2]") }}
                    </p>
                    <p
                      class="text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item2[3]") }}
                    </p>
                    <!-- desc -->
                    <p
                      class="font-bold text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item2[4]") }}
                    </p>
                    <p
                      class="text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item2[5]") }}
                    </p>
                  </div>
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery2.png')"
                      alt="admin img"
                    />
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 flex-col lg:flex-row">
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery3.jpg')"
                      alt="admin img"
                    />
                  </div>
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item3[0]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item3[1]") }}
                    </h3>
                    <p
                      class="text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item3[2]") }}
                    </p>
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 lg:flex-row flex-col-reverse">
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item4[0]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item4[1]") }}
                    </h3>
                    <p
                      class="text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.AGM.item4[2]") }}
                    </p>
                  </div>
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery4.jpg')"
                      alt="admin img"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="tabs__content" v-if="active === 1">
            <div class="w-full flex flex-col">
              <!--  -->
              <div
                class="basis-full flex flex-col items-center lg:items-start h-auto justify-center dark:text-white"
              >
                <!-- title -->
                <h2
                  class="font-bold text-lg lg:text-2xl text-center lg:text-end"
                >
                  {{ $t("starter_battery_page.EFB.main_title") }}
                </h2>
                <!-- yellow line -->
                <div class="w-16 h-0.5 bg-yellow mt-3"></div>
                <!-- desc -->
                <p
                  class="text-sm lg:text-base leading-7 lg:leading-8 mt-2 w-full"
                >
                  {{ $t("starter_battery_page.EFB.main_paragraph") }}
                </p>
              </div>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 flex-col lg:flex-row">
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="
                        require('~/assets/media/img/starter-battery1-1.png')
                      "
                      alt="admin img"
                    />
                  </div>
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item1[0]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item1[1]") }}
                    </h3>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item1[2]") }}
                    </p>
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 lg:flex-row flex-col-reverse">
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item2[0]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item2[1]") }}
                    </h3>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item2[2]") }}
                    </p>
                  </div>
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery3.jpg')"
                      alt="admin img"
                    />
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 flex-col lg:flex-row">
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery4.jpg')"
                      alt="admin img"
                    />
                  </div>
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item3[0]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item3[1]") }}
                    </h3>
                    <p
                      class="text-sm lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.EFB.item3[2]") }}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="tabs__content" v-if="active === 2">
            <div class="w-full flex flex-col">
              <!--  -->
              <div
                class="basis-full flex flex-col items-center lg:items-start h-auto justify-center dark:text-white"
              >
                <!-- title -->
                <h2
                  class="font-bold text-lg lg:text-2xl text-center lg:text-end"
                >
                  {{ $t("starter_battery_page.SLA.main_title") }}
                </h2>
                <!-- yellow line -->
                <div class="w-16 h-0.5 bg-yellow mt-3"></div>
                <!-- desc -->
                <p
                  class="text-sm lg:text-base leading-7 lg:leading-8 mt-2 w-full"
                >
                  {{ $t("starter_battery_page.SLA.main_paragraph") }}
                </p>
                <br />
                <p
                  class="text-sm lg:text-base leading-7 lg:leading-8 mt-2 w-full"
                >
                  <span class="font-bold">{{
                    $t("starter_battery_page.SLA.core_technology_subject")
                  }}</span
                  ><br />
                  {{ $t("starter_battery_page.SLA.core_technology_attr1") }}
                  <br />
                  {{ $t("starter_battery_page.SLA.core_technology_attr2") }}
                  <br />
                  {{ $t("starter_battery_page.SLA.core_technology_attr3") }}
                </p>
                <p
                  class="text-sm lg:text-base leading-7 lg:leading-8 mt-10 w-full"
                >
                  <span class="font-bold">{{
                    $t("starter_battery_page.SLA.advantages_subject")
                  }}</span
                  ><br />
                  {{ $t("starter_battery_page.SLA.advantages_attr1") }}<br />
                  {{ $t("starter_battery_page.SLA.advantages_attr2") }}<br />
                  {{ $t("starter_battery_page.SLA.advantages_attr3") }}
                </p>
              </div>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 flex-col lg:flex-row">
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery2.png')"
                      alt="admin img"
                    />
                  </div>
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item1[0]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item1[1]") }}
                    </h3>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item1[2]") }}
                    </p>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item1[3]") }}
                    </h3>
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item1[4]") }}
                    </p>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item1[5]") }}
                    </h3>
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item1[6]") }}
                    </p>
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 lg:flex-row flex-col-reverse">
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item2[0]") }}
                    </h2>
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item2[1]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item2[2]") }}
                    </h3>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item2[3]") }}
                    </h3>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item2[4]") }}
                    </p>
                  </div>
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery5.png')"
                      alt="admin img"
                    />
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 flex-col lg:flex-row">
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery6.jpg')"
                      alt="admin img"
                    />
                  </div>
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item3[0]") }}
                    </h2>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item3[1]") }}
                    </p>
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 lg:flex-row flex-col-reverse">
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item4[0]") }}
                    </h2>
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item4[1]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item4[2]") }}
                    </h3>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item4[3]") }}
                    </h3>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item4[4]") }}
                    </p>
                  </div>
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery7.png')"
                      alt="admin img"
                    />
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 flex-col lg:flex-row">
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery8.png')"
                      alt="admin img"
                    />
                  </div>
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item5[0]") }}
                    </h2>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item5[1]") }}
                    </p>
                  </div>
                </div>
              </section>
              <!--  -->
              <section class="flex flex-col mt-24 lg:mt-10">
                <div class="w-full flex gap-10 lg:flex-row flex-col-reverse">
                  <div
                    class="basis-1/2 flex flex-col items-start lg:items-start justify-center"
                  >
                    <!-- title -->
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item6[0]") }}
                    </h2>
                    <h2
                      class="font-bold text-lg lg:text-2xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item6[1]") }}
                    </h2>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item6[2]") }}
                    </h3>
                    <h3
                      class="text-lg lg:text-xl text-center lg:text-end dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item6[3]") }}
                    </h3>
                    <!-- desc -->
                    <p
                      class="text-md lg:text-base leading-6 mt-2 dark:text-zinc-50"
                    >
                      {{ $t("starter_battery_page.SLA.item6[4]") }}
                    </p>
                  </div>
                  <div class="basis-1/2 flex">
                    <img
                      class="h-full w-full"
                      :src="require('~/assets/media/img/starter-battery9.jpg')"
                      alt="admin img"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.tabs {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  &__nav {
    display: flex;
    &_tab {
      padding: 10px 15px;
      cursor: pointer;
      border: solid 1px transparent;
      transition: 100ms linear all;
    }
  }
  &__content {
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }
}
</style>

<script>
export default {
  data() {
    return {
      active: 0,
      itemsEN: ["AGM Technology", "EFB Technology", "SLA Technology"],
      itemsFA: ["تکنولوژی AGM", "تکنولوژی EFB", "تکنولوژی SLA"],
    };
  },
  methods: {
    activate(index) {
      this.active = index;
    },
  },
};
</script>