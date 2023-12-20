import type { SVGSparkle } from '#build/components';
<template>
  <main class="flex flex-col items-center pt-10 md:pt-40 pb-20 mono">
    <section class="relative">
      <div class="flex flex-col lg:flex-row">
        <h1
          class="text-5xl pl-2 md:text-6xl lg:text-8xl my-4 xl:my-0 xl:text-9xl font-bold"
        >
          learn.
        </h1>
        <h1
          class="text-5xl pl-2 md:text-6xl lg:text-8xl my-4 xl:my-0 xl:text-9xl font-bold"
        >
          Collaborate.
        </h1>
      </div>
      <div
        class="w-full flex flex-col xl:flex-row xl:gap-80 xl:items-center my-5"
      >
        <h1
          class="text-5xl pl-2 md:text-6xl lg:text-8xl pb-10 xl:text-9xl font-bold"
        >
          create.
        </h1>
        <div class="relative flex justify-center md:block">
          <button
            class="relative my-5 md:my-0 z-20 h-[75px] bg-black mono p-2 px-5 text-xl md:p-5 md:text-3xl text-white flex justify-center items-center gap-5 hover:scale-105 xl:-translate-x-5 xl:hover:translate-x-0 xl:-translate-y-5 xl:hover:-translate-y-0 transition-all duration-300 ease-in-out"
          >
            Get Started
            <SVGLinesArrowStraight class="w-12 md:w-auto" />
          </button>
          <div
            class="hidden xl:block h-[75px] w-full bg-black/80 absolute top-0 left-0"
          ></div>
        </div>
      </div>
      <SVGSparkle
        class="absolute top-0 md:top-[-4rem] right-0 w-16 h-16 md:w-auto md:h-auto"
      />
    </section>
    <p class="mono w-2/3 text-left lg:text-center">
      “Are You Intrested in Google Developer Technologies ? Then you are in the
      right place, In GDSC, We will grow our knowledge together in a
      peer-to-peer learning environment and build solutions for local businesses
      and our community.”
    </p>
  </main>
</template>
