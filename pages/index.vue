<script setup>
definePageMeta({
  layout: "centered"
})
</script>

<template>
  <div class="w-full h-full flex flex-col">
    <Intro />
    <AboutMe />
    <Skills />
    <Projects />
    <div class="mt-10">
      <p class="text-center">Copyright © - Karl</p>
      <p class="text-center">All Rights Reserved</p>
    </div>
  </div>
</template>

<style scoped>
.font-campus {
  font-family: campus;
}
</style>
