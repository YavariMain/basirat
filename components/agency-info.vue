<template>
  <div class="w-full relative">
    <div
      class="w-full flex flex-col bg-gray-200 dark:bg-zinc-800 border-yellow p-3 gap-3 rounded-md text-sm md:text-base dark:text-white"
    >
      <span>شهر: {{ city }}</span>
      <span>نام نمایندگی: {{ agencyName }}</span>
      <span>شماره ثابت: {{ number }}</span>
      <span>آدرس: {{ address }}</span>
    </div>
    <div class="w-full h-4"></div>
  </div>
</template>

<script>
export default {
  props: {
    province: String,
    city: String,
    agencyName: String,
    number: String,
    address: String,
    counter: Number,
  },
  data() {
    return {};
  },
};
</script>
