<template>
  <div class="border-main border-2 w-full rounded-md backdrop-blur shadow-lg flex overflow-clip">
    <div class="flex flex-col flex-1 m-3">
      <h1 class="font-cowboy text-lg text-paper-blue">This website</h1>
      <p>
        This is my portfolio website to showcase my work and skills.
      </p>
      <h1 class="font-cowboy mt-3 text-paper-blue">Technologies used: </h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-3">
        <IconsNuxt />
        <IconsTailwind />
        <IconsSass />
      </div>
    </div>
    <div class="flex-1 h-full bg-red-400">
      <img src="@/resources/portfolio-website-ss.png" class="object-cover h-full w-full" alt="demo"/>
    </div>
  </div>
</template>
