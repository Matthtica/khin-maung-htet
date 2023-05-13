<script setup></script>

<template>
  <div class="bg-gray-200 h-screen w-screen flex">
    <div class="w-5/6 mx-auto my-10 border-2 border-black p-2">
      <ResumeItem k="Fullname" value="Mg Khin Maung Htet" />
      <ResumeItem k="Date of birth" value="April / 11 / 2001" />
      <ResumeItem k="Current Location" value="Yangon, Myanmar" />
      <ResumeItem k="Education" value="Dagon University, 2nd year Mathematics" />
      <ResumeItem k="Total Experience" value="2+ years of self-taught programming" />
      <ResumeItem k="Relevant Experience" value="2+ months of Full stack with NuxtJS" />
      <ResumeItem k="Notice Period" value="1 day" />
      <ResumeItem k="Available to join with 30 days" value="Yes" />
      <ResumeItem k="Job experience" value="none" />
      <ResumeItem k="Expected Salary" value="300$ ±" />
      <ResumeItem k="Open to relocate to Thailand" value="Yes" />
      <ResumeItem k="Have valid passport" value="Not yet" />
      <ResumeItem k="Marital Status" value="Yes" />
      <ResumeItem k="Initial call about relocation" value="Yes" />
      <ResumeItem k="Languages" value="Burmese(native), English(conversational)" />
      <ResumeItem k="Skills" value="Problem Solving, Programming, English, Linux" />
      <ResumeItem k="Technologies" value="C/C++, Javascript, Typescript, Vuejs, Reactjs, Nuxtjs" />
      <ResumeItem k="" value="git, GitHub, HTML5, CSS, SCSS, TailwindCSS, OpenGL" />
      <ResumeItem k="Familier Technologies" value="Java, Kotlin, Android SDK, REST API, Rust, Python" />
      <ResumeItem k="" value="Google cloud services, SQL, NoSQL, supabase" />
      <ResumeItem k="" value="CommonLisp, ThreeJS, Svelte, Solidjs, lua" />
      <ResumeItem k="Software" value="Vim" />
      <div class="relative py-1 px-3 odd:bg-gray-400 even:bg-gray-300">
        <div>My github link:</div>
        <a class="cent ln" target="_blank" href="https://github.com/Matthtica">Matthtica</a>
      </div>
      <div class="relative py-1 px-3 odd:bg-gray-400 even:bg-gray-300">
        <div>My leetcode profile:</div>
        <a class="cent ln" target="_blank" href="https://leetcode.com/Karlicin/">Karlicin</a>
      </div>
      <div class="relative py-1 px-3 odd:bg-gray-400 even:bg-gray-300">
        <div>My mycurrent portfolio:</div>
        <a class="cent ln" target="_blank" href="https://mgxtet-portfolio.vercel.app/">Khin Maung Htet's Portfolio</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cent {
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translateY(-50%);
}

.ln {
  text-decoration: underline;
  color: blue;
}
</style>
