import type { SVGSparkle } from '#build/components';
<template>
  <div class="min-h-[600px] flex flex-col items-center">
    <div class="relative">
      <h1 class="text-9xl font-semibold mono">learn. collaborate.</h1>
      <div class="w-full flex gap-80 items-center my-5">
        <h1 class="text-9xl font-semibold mono">create.</h1>
        <button class="w-[300px] h-[75px] bg-black mono text-3xl text-white">
          Get Started
        </button>
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
