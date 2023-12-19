import type { SVGSparkle } from '#build/components';
<template>
  <div class="flex flex-col items-center pt-40 pb-20 mono">
    <div class="relative">
      <h1 class="text-9xl font-semibold">learn. Collaborate.</h1>
      <div class="w-full flex gap-80 items-center my-5">
        <h1 class="text-9xl font-semibold">create.</h1>
        <div class="relative">
          <button
            class="relative z-20 h-[75px] bg-black mono p-5 text-3xl text-white flex justify-center items-center gap-5 hover:scale-105 -translate-x-5 hover:translate-x-0 -translate-y-5 hover:-translate-y-0 transition-all duration-300 ease-in-out"
          >
            Get Started
            <SVGLinesArrowStraight />
          </button>
          <div class="h-[75px] w-full bg-black/90 absolute top-0 left-0"></div>
        </div>
      </div>
      <SVGSparkle class="absolute top-[-4rem] right-0" />
    </div>
    <p class="mono w-2/3 text-center">
      “Are You Intrested in Google Developer Technologies ? Then you are in the
      right place, In GDSC, We will grow our knowledge together in a
      peer-to-peer learning environment and build solutions for local businesses
      and our community.”
    </p>
  </div>
</template>
