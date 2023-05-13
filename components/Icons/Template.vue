<script setup>
defineProps({
  name: String,
});
</script>

<template>
  <div class="flex items-center gap-1">
    <div class="w-10 h-10">
      <svg viewBox="0 0 128 128">
        <slot></slot>
      </svg>
    </div>
    <h1 class="text-md font-bold">
      {{ name }}
    </h1>
  </div>
</template>
