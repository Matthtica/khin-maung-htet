<template>
  <div class="w-screen h-screen bg-cover flex flex-col relative the-background">
    <div class="lay mx-auto w-5/6 xs:px-8 lg:px-16 overflow-auto h-full hide-scrollbar">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.the-background {
  background-image: url('@/resources/white-wall.jpg');
  background-color: var(--paper-white);
  background-blend-mode: lighten;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

@media (max-width: 450px) {
  .lay {
    width: 100%;
  }
}
</style>
