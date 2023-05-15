<script setup>
defineProps({
  link: String
});
</script>

<template>
  <a class="w-8 h-8 cursor-pointer" target="_blank" :href="link">
    <svg viewBox="0 0 128 128">
      <slot></slot>
    </svg>
  </a>
</template>
