<template>
  <nav class="flex justify-between p-10 pb-5 border-b-2">
    <NuxtImg
      class="h-12"
      src="/logo.png"
      alt="The GDSC Logo. Click here to go home."
    />
    <ul class="hidden md:flex gap-10">
      <li class="text-xl mono cursor-pointer hover:font-bold">Blog</li>
      <li class="text-xl mono cursor-pointer hover:font-bold">Resources</li>
      <li class="text-xl mono cursor-pointer hover:font-bold">About Us</li>
      <li class="text-xl mono cursor-pointer hover:font-bold">Events</li>
      <li class="text-xl mono cursor-pointer hover:font-bold">Contacts</li>
    </ul>
  </nav>
</template>
<script setup></script>
