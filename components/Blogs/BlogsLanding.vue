<template>
  <section
    class="w-full min-h-[600px] p-5 md:p-20 bg-gGreen text-white border-white mono relative py-24 md:py-44"
  >
    <SVGSparkle
      color1="#7000FF"
      color2="#FAFD5D"
      color3="#FAFD5D"
      class="absolute top-[30px] right-5 md:right-20 w-16 h-16 md:w-auto md:h-auto"
    />
    <SVGSparkle
      color1="#7000FF"
      color2="#EA4235"
      color3="#FAFD5D"
      class="absolute bottom-5 md:bottom-15 lg:bottom-20 left-10 w-16 h-16 md:w-auto md:h-auto"
    />
    <h1
      @click="hanldeScroll"
      class="flex gap-5 w-max justify-start items-center h-max text-3xl md:text-5xl font-bold border-b-4 pb-2 mb-10 cursor-default"
    >
      Blogs <SVGLinesArrowTilted width="25" height="25" />
    </h1>
    <div class="">
      <div class="flex flex-col gap-4 md:flex-row mb-4 lg:pl-44">
        <span class="text-5xl md:text-6xl font-semibold">Create.</span>
        <span class="text-5xl md:text-6xl font-semibold">Connect.</span>
      </div>
      <span class="text-5xl md:text-6xl font-semibold lg:pl-44">Explore.</span>
      <div class="mt-10 lg:pl-44">
        <h1
          v-for="blog in tempBlogTitles"
          class="border-b-2 pb-5 md:w-5/6 text-lg md:text-3xl my-5 group hover:text-black hover:font-bold transition-all ease-in-out duration-300 cursor-pointer"
        >
          {{ blog.title }}
          <SVGLinesArrowTilted
            width="30"
            height="30"
            class="-rotate-90 inline-block group-hover:-rotate-45 transition-all ease-in-out duration-300"
          />
        </h1>
      </div>
      <div
        class="flex flex-col lg:flex-row gap-10 justify-between lg:px-44 mt-20"
      >
        <h1 class="text-xl font-bold">
          Upload your Ideas to us and we will publish it in medium
        </h1>
        <button
          class="bg-white flex items-center justify-center text-black h-[75px] p-5 text-xl font-semibold hover:scale-105 hover:bg-black hover:text-white transition-all ease-in-out duration-300"
        >
          Upload you blog
        </button>
      </div>
    </div>
  </section>
</template>
<script setup>
const tempBlogTitles = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];
</script>
