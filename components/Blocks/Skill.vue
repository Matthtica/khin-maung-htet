<script setup>
defineProps({
  title: String,
  level: String,
  description: String,
});
</script>

<template>
  <div class="box flex gap-5 items-center border-2 border-main rounded-md p-3 backdrop-blur shadow-lg">
    <h1
      class="role h-48 border-2 border-main text-xl font-wide write-vert-rl text-center px-2 bg-white"
    >
      {{ title }}
    </h1>
    <div class="description flex w-9/12 flex-col">
      <div class="font-cowboy text-2xl">
        Level - <span class="text-paper-blue pop">{{ level }}</span>
      </div>
      <div class="font-raleway text-justify">
        {{ description }}
      </div>
    </div>
    <slot>
      Nothing
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.pop {
  text-shadow: 1px 1px 3px rgb(0, 0, 0, 40%);
}

.font-wide {
  letter-spacing: 0.4em;
}

.write-vert-rl {
  writing-mode: vertical-rl;
}

@media (max-width: 800px) {
  .box {
    flex-direction: column;
    height: auto;
  }
  .role {
    writing-mode: horizontal-tb;
    height: auto;
    width: 20ch;
  }
  .description {
    width: 100%;
  }
}
</style>
