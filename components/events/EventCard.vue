<template>
  <div
    class="w-[400px] h-[400px] shrink-0 bg-gCream flex flex-col justify-between p-5 pt-10"
  >
    <h1 class="text-2xl font-bold">
      {{ name }}
    </h1>
    <h1 class="">
      {{ description }}
    </h1>
    <div class="border-t-2 border-black pt-5">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="font-bold">{{ location }} {{ time }}</h1>
          <h1 class="font-bold text-2xl">{{ date }}</h1>
        </div>
        <SVGLinesArrowStraight
          @click="router.push(link)"
          color="#000000"
          class="cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const { name, time, date, description, link, location } = defineProps([
  "name",
  "time",
  "date",
  "description",
  "link",
  "location",
]);
const router = useRouter();
</script>
