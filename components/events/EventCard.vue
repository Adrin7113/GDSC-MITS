<template>
  <article
    class="w-[300px] md:w-[400px] md:h-[450px] shrink-0 bg-white flex flex-col gap-2 p-5 pt-10 overflow-y-scroll no-scrollbar"
  >
    <figure
      class="flex gap-5 justify-center items-center border-b-2 border-black pb-5"
    >
      <NuxtImg class="w-36 h-36" :src="picture" alt="Event Picture" />
      <h1 class="w-1/2 text-2xl font-bold">{{ name }}</h1>
    </figure>
    <span class="text-2xl font-bold">{{ subName }}</span>
    <time class="text-md">
      {{ time }}
    </time>
    <span class="text-xl font-bold">{{ location }}</span>
    <p class="text-sm">{{ description }}</p>
  </article>
</template>
<script setup>
const { name, subName, picture, time, date, description, location } =
  defineProps([
    "name",
    "subName",
    "picture",
    "time",
    "date",
    "description",
    "location",
  ]);
const router = useRouter();
</script>
