<template>
  <article
    class="w-[300px] h-[500px] md:w-[400px] md:h-[450px] shrink-0 bg-white flex flex-col gap-2 p-5 pt-10 overflow-y-scroll no-scrollbar"
  >
    <header
      class="flex flex-col md:flex-row gap-5 justify-center items-center border-b-2 border-black pb-5"
    >
      <section class="flex flex-col">
        <h1 class="text-xl font-bold md:text-center">
          {{ tempLead.name }}
        </h1>
        <span class="text-xl md:pl-4">
          {{ tempLead.division }}
        </span>
        <span class="text-xl md:pl-4">
          {{ tempLead.role }}
        </span>
      </section>
      <!-- <div
        :style="{ backgroundImage: `url(${tempLead.picture})` }"
        class="w-1/2 h-[200px] bg-cover bg-center rounded-xl"
      ></div> -->
      <!-- Or use NuxtImg (Needs testing) -->
      <NuxtImg
        class="w-1/2 rounded-xl"
        :src="tempLead.picture"
        alt="Lead Picture"
      />
    </header>
    <span class="text-center font-bold text-xl pt-2">Contact me here!</span>
    <footer>
      <nav class="pt-5 flex gap-5 justify-center">
        <SVGLogosLinkedIn
          @click="navigateToOut(tempLead.linkedIn)"
          class="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
        />
        <SVGLogosGithub
          @click="navigateToOut(tempLead.github)"
          class="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
        />
        <SVGLogosGmail
          @click="navigateToOut(tempLead.email)"
          class="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
        />
        <SVGLogosWhatsapp
          class="cursor-pointer hover:scale-110 transition-all ease-in-out duration-300"
        />
      </nav>
    </footer>
  </article>
</template>
<script setup>
const tempLead = {
  name: "Adrin Jose C T",
  role: "Web Development Lead",
  division: "S5 CSE-B",
  picture: "images/leads/adrin.JPEG",
  number: "7994594947",
  linkedIn: "https://www.linkedin.com/in/dryn",
  github: "https://github.com/Adrin7113",
  email: "mailto:adrinjosect@gmail.com",
};
const navigateToOut = (path) => window.open(path, "_blank");
const router = useRouter();
</script>
