<template>
  <div
    class="w-[400px] h-[450px] shrink-0 bg-white flex flex-col gap-2 p-5 pt-10 overflow-y-scroll no-scrollbar"
  >
    <div
      class="flex gap-5 justify-center items-center border-b-2 border-black pb-5"
    >
      <div>
        <h1 class="text-xl font-bold text-center">
          {{ tempLead.name }}
        </h1>
        <h1 class="text-xl pl-4">
          {{ tempLead.division }}
        </h1>
        <h1 class="text-xl pl-4">
          {{ tempLead.role }}
        </h1>
      </div>
      <div
        :style="{ backgroundImage: `url(${tempLead.picture})` }"
        class="w-1/2 h-[200px] bg-cover bg-center rounded-xl"
      ></div>
      <!-- Or use NuxtImg (Needs testing) -->
      <!-- <NuxtImg
        class="w-1/2 rounded-xl"
        :src="tempLead.picture"
        alt="Lead Picture"
      /> -->
    </div>
    <h1 class="text-center font-bold text-xl pt-2">Contact me here!</h1>
    <div class="pt-5 flex gap-5 justify-center">
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
    </div>
  </div>
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
