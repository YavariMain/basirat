<template>
  <section class="w-full bg-gray-100 dark:bg-zinc-900 dark:text-white">
    <div class="lg:w-1/2 sm:w-2/3 mx-auto flex flex-col pb-10 xl:px-0 px-5">
      <!-- image -->
      <div class="w-full overflow-hidden flex items-center rounded-lg mt-10">
        <!-- post[0].featured_image_url -->
        <img
          class="w-full h-full"
          :src="post[0]._embedded['wp:featuredmedia']['0'].source_url"
          :alt="post[0].title.rendered"
        />
      </div>
      <!-- title -->
      <div class="w-full">
        <!-- title -->
        <h1
          class="font-bold text-lg lg:text-2xl lg:text-end pt-10 lg:mt-px dark:text-zinc-50"
        >
          {{ post[0].title.rendered }}
        </h1>
        <!-- yellow line -->
        <div class="w-16 h-0.5 bg-yellow mt-2"></div>
        <p
          class="font-bold yellow mt-5 leading-7"
          v-html="post[0].excerpt.rendered"
        ></p>
      </div>
      <!-- content -->
      <div class="mt-5 leading-7" v-html="post[0].content.rendered"></div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const post = await $axios.$get(
      `http://sub.ngkh.ir/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
    );
    return { post };
  },
};
</script>