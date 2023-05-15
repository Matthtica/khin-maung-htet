<script setup></script>

<template>
  <div class="mt-12 flex flex-col gap-6">
    <h1 class="font-cowboy text-4xl text-end pop text-paper-red">Skills</h1>
    <BlocksSkill
      title="Front-End Developer"
      level="Advanced"
      description="
      I believe that design should be intuitive,
      aesthetically pleasing, and effectively solve
      complex problems. I strive to create designs
      that function seamlessly and don't require
      extensive instructions, even for simple tasks
      like opening a door."
    >
      <div class="skill-icons grid grid-cols-2 gap-5 mr-4">
        <IconsReact/>
        <IconsVue />
        <IconsSvelte />
        <IconsSass />
        <IconsTailwind />
        <IconsJavascript />
      </div>
    </BlocksSkill>
    <BlocksSkill
      title="Back-End Developer"
      level="Intern"
      description="
      As a back-end developer, I prioritize writing
      clean, scalable code that is easy to read,
      test, and maintain. I build a strong foundation
      for software systems, always thinking ahead to
      ensure they can handle increased demand as they grow."
    >
      <div class="skill-icons grid grid-cols-2 gap-5 mr-5">
        <IconsNode />
        <IconsNuxt />
        <IconsPostgresql />
        <IconsGit />
        <IconsGoogleCloud />
        <IconsTypescript />
      </div>
    </BlocksSkill>
    <BlocksSkill
      title="Graphics Designer"
      level="Certified"
      description="
      I specialize in combining design with
      interactivity to create visually
      engaging vector graphics. I stay current
      with the latest design trends and bring
      a fresh perspective to every project."
    >
      <div class="skill-icons grid grid-cols-1 gap-3">
        <IconsPhotoshop />
        <IconsIllustrator />
      </div>
    </BlocksSkill>
    <BlocksSkill
      title="Graphics Programmer"
      level="Undefined / Hobby"
      description="
      Graphics programming is my favorite.
      I love working on low-level software,
      graphics applications, and high-performance
      applications. I'm dedicated to producing
      efficient and reliable code that meets
      project needs."
    >
      <div class="skill-icons grid grid-cols-2 gap-3">
        <IconsRust />
        <IconsC />
        <IconsCpp />
        <IconsOpenGL />
      </div>
    </BlocksSkill>
  </div>
</template>

<style scoped>
.pop {
  text-shadow: 2px 2px 3px rgb(0, 0, 0, 50%);
}

.stuck-at-rl {
  bottom: -8%;
  right: 0;
}

@media (max-width: 800px) {
  .skill-icons {
    display: flex;
  }
}
</style>
