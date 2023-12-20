<template>
  <div class="w-full min-h-[600px] p-20 bg-white mono relative py-44">
    <SVGSparkle
      color1="#7000FF"
      color2="#005FFF"
      color3="#36DB32"
      class="absolute top-[30px] right-20"
    />
    <SVGSparkle
      color1="#7000FF"
      color2="#005FFF"
      color3="#36DB32"
      class="absolute bottom-20 left-10"
    />
    <h1
      @click="hanldeScroll"
      class="flex gap-5 w-max justify-start items-center h-max text-5xl font-bold border-b-4 border-black pb-2"
    >
      About Us <SVGLinesArrowTilted color="black" width="25" height="25" />
    </h1>
    <h1 class="text-7xl px-44 mt-10 mb-5 font-medium">
      Work smarter. Work together.
    </h1>
    <h1 class="text-7xl px-44 font-medium">become a member now.</h1>
    <NuxtImg src="/gdscWritten.png" class="mx-44 py-10" alt="The GDSC Logo." />
    <div class="flex gap-64 px-44">
      <h1 class="w-1/2 text-lg">
        Google development Student Clubs is a community for student developers
        to help them immerse in technology. GDSC helps student to learn
        technologies, connect with like minded people and build solutions for
        the community
      </h1>
      <button
        class="bg-black text-white h-[75px] p-5 text-xl font-semibold hover:scale-105 hover:bg-gGreen hover:text-black transition-all ease-in-out duration-300"
      >
        Become a Member
      </button>
    </div>
  </div>
</template>
<script setup></script>
