<script setup>
import Star from "~icons/ic/sharp-star-rate";
definePageMeta({
  layout: "centered"
})
const skills = useSkills();

</script>

<template>
  <div class="p-3">
    <div class="mt-3 border-4 border-black flex flex-col items-center p-3 gap-2 brut">
      <div class="flex items-center gap-5 m-1">
        <Star class="text-paper-red text-7xl" />
        <h1 class="font-cowboy text-5xl text-paper-blue uppercase">Proficency</h1>
        <Star class="text-paper-red text-7xl" />
      </div>
      <div class="bg-paper-black h-1 w-5/6"></div>
      <SkillProficiency v-for="skill in skills" :name="skill.name" :level="skill.level" />
    </div>
  </div>
</template>

<style scoped>
.brut {
  box-shadow: 0.5em 0.5em 0px var(--paper-black);
}

.border-paper-red {
  border-color: var(--paper-black);
}
</style>
