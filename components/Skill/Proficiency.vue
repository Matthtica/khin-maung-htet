<script lang="ts" setup>
import Star from "~icons/ic/sharp-star-rate";
const props = defineProps({
  name: String,
  level: Number
})

const rem = 6 - props.level!;

</script>

<template>
  <div class="flex items-center justify-between w-4/6">
    <h1 class="font-cowboy text-2xl text-paper-blue text-shadow">{{ name }}</h1>
    <div class="flex items-center">
      <Star v-for="index in level" :key="index" class="text-xl text-paper-red text-shadow" />
      <Star v-for="index in rem" :key="index" class="text-xl text-gray-300 text-shadow" />
    </div>
  </div>
</template>
