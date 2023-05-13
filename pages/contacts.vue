<script lang="ts" setup>
definePageMeta({
  layout: "centered",
});

</script>

<template>
  <div class="h-full p-3">
    <div class="flex items-center justify-evenly w-full mt-3 border-2 border-black p-3 brut">
      <div class="w-[5em] h-[5em] border-2 border-black overflow-clip">
        <img src="@/resources/cropped-me.png"/>
      </div>
      <div class="flex flex-col justify-center items-center font-semibold bg-video">
        <h1 class="font-cowboy text-4xl text-paper-blue">Khin Maung Htet</h1>
        <div class="my-2 w-full border-b-2 border-black bg-paper-black"></div>
        <h2 class="font-cowboy text-xl text-paper-blue">Flexible Programmer</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.brut {
  box-shadow: 0.5em 0.5em 0px var(--paper-black);
}

.border-paper-red {
  border-color: var(--paper-red);
}

</style>
