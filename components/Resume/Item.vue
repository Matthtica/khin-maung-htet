<script setup>
defineProps({
  k: String,
  value: String
})
</script>

<template>
  <div class="relative py-1 px-3 odd:bg-gray-400 even:bg-gray-300">
    <div>{{ k }}: </div>
    <div class="cent">{{ value }}</div>
  </div>
</template>

<style scoped>
.cent {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translateY(-50%);
}

</style>
