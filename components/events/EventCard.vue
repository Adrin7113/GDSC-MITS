<template>
  <div
    class="w-[400px] h-[450px] shrink-0 bg-white flex flex-col gap-2 p-5 pt-10 overflow-y-scroll no-scrollbar"
  >
    <div
      class="flex gap-5 justify-center items-center border-b-2 border-black pb-5"
    >
      <NuxtImg class="w-36 h-36" :src="picture" alt="Event Picture" />
      <h1 class="w-1/2 text-2xl font-bold">{{ name }}</h1>
    </div>
    <h1 class="text-2xl font-bold">{{ subName }}</h1>
    <h1 class="text-md">
      {{ time }}
    </h1>
    <h1 class="text-xl font-bold">{{ location }}</h1>
    <p class="text-sm">{{ description }}</p>
  </div>
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
