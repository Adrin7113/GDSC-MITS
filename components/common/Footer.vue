<template>
  <footer
    class="w-full min-h-[600px] p-5 md:p-20 bg-black mono relative py-24 md:pt-44 border-white text-white"
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
      class="absolute bottom-5 md:bottom-15 lg:bottom-56 left-10 w-16 h-16 md:w-auto md:h-auto"
    />
    <h1
      @click="hanldeScroll"
      class="flex gap-5 w-max justify-start items-center h-max text-3xl md:text-5xl font-bold border-b-4 pb-2 mb-10 cursor-default"
    >
      Links <SVGLinesArrowTilted width="25" height="25" />
    </h1>
    <div
      class="flex gap-10 lg:flex-row justify-center lg:gap-60 text-2xl border-b-2 pb-10"
    >
      <div class="flex flex-col gap-5">
        <h1
          class="transition-all ease-in-out duration-300 hover:font-bold cursor-pointer hover:text-gGreen hover:scale-105"
        >
          A Link
        </h1>
        <h1
          class="transition-all ease-in-out duration-300 hover:font-bold cursor-pointer hover:text-gGreen hover:scale-105"
        >
          A Link
        </h1>
        <h1
          class="transition-all ease-in-out duration-300 hover:font-bold cursor-pointer hover:text-gGreen hover:scale-105"
        >
          A Link
        </h1>
        <h1
          class="transition-all ease-in-out duration-300 hover:font-bold cursor-pointer hover:text-gGreen hover:scale-105"
        >
          A Link
        </h1>
      </div>
      <div class="flex flex-col gap-5">
        <h1
          class="transition-all ease-in-out duration-300 hover:font-bold cursor-pointer hover:text-gGreen hover:scale-105"
        >
          A Link
        </h1>
        <h1
          class="transition-all ease-in-out duration-300 hover:font-bold cursor-pointer hover:text-gGreen hover:scale-105"
        >
          A Link
        </h1>
        <h1
          class="transition-all ease-in-out duration-300 hover:font-bold cursor-pointer hover:text-gGreen hover:scale-105"
        >
          A Link
        </h1>
        <h1
          class="transition-all ease-in-out duration-300 hover:font-bold cursor-pointer hover:text-gGreen hover:scale-105"
        >
          A Link
        </h1>
      </div>
    </div>
    <div class="flex flex-col gap-10 md:flex-row justify-between mt-16">
      <div class="flex gap-10 md:gap-20 text-xl">
        <h1>GDSC MITS</h1>
        <h1 class="text-center">MITS 2023 All rights reserved</h1>
      </div>
      <div class="flex gap-10">
        <SVGLogosDiscord color="white" />
        <SVGLogosInstagram color="white" />
        <SVGLogosTwitter color="white" />
        <SVGLogosGithub color="white" />
        <SVGLogosLinkedIn color="white" />
      </div>
    </div>
  </footer>
</template>
<script setup></script>
