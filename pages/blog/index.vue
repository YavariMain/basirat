<template>
  <!--  -->
  <div class="py-12 dark:bg-zinc-900 flex flex-col gap-x-16 gap-y-20 posts">
    <div
      class="container mx-auto xl:px-20 px-5 overflow-hidden"
      v-for="(item, index) in categories"
      :key="index"
    >
      <!--  -->
      <div class="mb-5 flex justify-between items-center text-sm">
        <div class="flex flex-col">
          <!-- title -->
          <h1 class="font-bold text-lg lg:text-2xl dark:text-zinc-50">
            {{ categories[index].name }}
          </h1>
          <!-- yellow line -->
          <div class="w-16 h-0.5 bg-yellow mt-3"></div>
        </div>
        <!--  -->
        <nuxt-link
          class="text-xs ease-in-out flex w-24 lg:h-8 h-7 items-center justify-center text-white bg-yellow rounded-md"
          :to="'category/' + categories[index].slug"
          >مشاهده همه
        </nuxt-link>
      </div>
      <!--  -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-7 lg:gap-y-40"
      >
        <template v-for="(itemPost, indexPost) in posts">
          <template
            v-if="
              categories[index].name ==
              posts[indexPost]._embedded['wp:term']['0']['0'].name
            "
          >
            <div
              :key="indexPost"
              class="overflow-hidden flex flex-col px-2 pt-2 rounded-lg shadow-md hover:shadow-lg bg-gray-100 dark:bg-zinc-800"
            >
              <nuxt-link
                :to="posts[indexPost].slug"
                class="h-44 w-full overflow-hidden flex items-center rounded-lg"
              >
                <!-- posts[indexPost].featured_image_url -->
                <img
                  class="w-full h-full object-cover"
                  :src="
                    posts[indexPost]._embedded['wp:featuredmedia']['0']
                      .source_url
                  "
                  alt="Sunset in the mountains"
                />
              </nuxt-link>
              <!--  -->
              <div
                class="px-2 py-3 mb-auto flex flex-col items-start gap-2 relative h-36"
              >
                <nuxt-link
                  :to="posts[indexPost].slug"
                  class="font-medium transition text-limit-1 ease-in-out inline-block dark:text-white w-full"
                  >{{ posts[indexPost].title.rendered }}</nuxt-link
                >
                <div
                  class="text-gray-500 text-sm text-limit-2 transition-all dark:text-white leading-6"
                  v-html="posts[indexPost].excerpt.rendered"
                />
                <div
                  class="w-full flex justify-between absolute left-0 bottom-3 px-2"
                >
                  <nuxt-link
                    class="text-sm yellow ease-in-out flex"
                    :to="posts[indexPost].slug"
                    >ادامه مطلب
                  </nuxt-link>
                </div>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.posts = await fetch(
      "http://sub.ngkh.ir/wp-json/wp/v2/posts?per_page=100&_embed"
    ).then((res) => res.json());
    this.categories = await fetch(
      "http://sub.ngkh.ir/wp-json/wp/v2/categories"
    ).then((res) => res.json());
  },
  mounted() {
    setTimeout(() => {
      console.log(this.posts);
      console.log(this.categories);
    }, 1000);
  },
  data() {
    return {
      posts: [],
      categories: [],
    };
  },
};
</script>

<style lang="scss">
.posts {
  .container {
    height: 26rem !important;
    @media only screen and (max-width: 1024px) {
      height: 47rem !important;
    }
  }
}
</style>