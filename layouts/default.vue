<template>
  <!-- class="select-none". Removes text selection. Remove if needed -->
  <div class="min-h-screen max-w-screen select-none">
    <main>
      <CommonNavbar />
      <slot />

      <CommonFooter />
    </main>
  </div>
</template>
<script setup>
useHead({
  title: "GDSC MITS",
  meta: [
    {
      name: "Google Developers Student Club Muthoot Institute of Technology and Science",
      content:
        "The website built for the Google Developers Student Club at Muthoot Institute of Technology and Science",
    },
  ],
});
</script>
