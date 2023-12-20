<template>
  <section
    class="w-full min-h-[600px] p-5 md:p-20 bg-white mono relative py-24 md:py-44"
  >
    <SVGSparkle
      color1="#7000FF"
      color2="#005FFF"
      color3="#36DB32"
      class="absolute top-[30px] right-5 md:right-20 w-16 h-16 md:w-auto md:h-auto"
    />
    <SVGSparkle
      color1="#7000FF"
      color2="#005FFF"
      color3="#36DB32"
      class="absolute bottom-5 md:bottom-15 lg:bottom-20 left-10 w-16 h-16 md:w-auto md:h-auto"
    />
    <h1
      @click="hanldeScroll"
      class="flex gap-5 w-max justify-start items-center h-max text-3xl md:text-5xl font-bold border-b-4 border-black pb-2 mb-10"
    >
      About Us <SVGLinesArrowTilted color="black" width="25" height="25" />
    </h1>
    <div class="w-full flex flex-col gap-5 lg:ml-44">
      <div class="flex flex-col 2xl:flex-row">
        <span class="text-5xl md:text-6xl md:mt-10 font-medium">
          Work smarter.
        </span>
        <span class="text-5xl md:text-6xl md:mt-10 font-medium">
          Work together.
        </span>
      </div>
      <span class="text-5xl md:text-6xl font-medium">become a member now.</span>
    </div>
    <!-- Kinda annoying and doenst look good. Might return to it later -->
    <!-- <NuxtImg
      src="/gdscWritten.png"
      class="lg:mx-44 py-10"
      alt="The GDSC Logo."
    /> -->
    <div class="flex flex-col lg:flex-row gap-10 xl:gap-64 lg:px-44 mt-10">
      <p class="w-full lg:w-1/2 text-lg">
        Google development Student Clubs is a community for student developers
        to help them immerse in technology. GDSC helps student to learn
        technologies, connect with like minded people and build solutions for
        the community
      </p>
      <button
        class="bg-black text-white h-[75px] p-5 text-xl font-semibold hover:scale-105 hover:bg-gGreen hover:text-black transition-all ease-in-out duration-300"
      >
        Become a Member
      </button>
    </div>
  </section>
</template>
<script setup></script>
