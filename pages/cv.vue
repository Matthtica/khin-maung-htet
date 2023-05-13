<template>
  <div class="font-roboto w-full h-screen flex flex-col">
    <div class="bg-dark-gray h-36 w-full p-6 relative flex items-center">
      <div>
        <h1 class="text-white font-roboto-black text-3xl">Khin Maung Htet</h1>
        <p class="text-white">Graphics Designer / Software Developer</p>
      </div>
      <div class="absolute h-full aspect-square right-0 top-0">
        <img src="@/resources/cropped-me.png" alt="me" />
      </div>
    </div>
    <div class="flex bg-white h-full w-full">
      <div class="left-side h-full w-full p-4">
        <!-- NOTE: LEFT SIDE -->
        <p class="text-justify">
          I am a self-motivated software developer and graphics designer who is
          committed to continuous learning and personal development. Over the
          last three years, I have dedicated myself to learning programming and
          keeping up-to-date with the latest industry trends. Although I have
          not yet had the opportunity to work on a team or on-site, I am excited
          to apply my skills and collaborate with others to build exceptional
          software or design assets.
        </p>
        <h1
          class="font-roboto-black text-xl border-b-black border-b-1 pb-2 mt-5"
        >
          Skills
        </h1>
        <div>
          <ul class="list-disc list-inside" style="columns: 2">
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Problem Solving</li>
            <li>Git</li>
            <li>Linux</li>
            <li>C</li>
            <li>C++</li>
            <li>Javascript</li>
            <li>TypeScript</li>
            <li>Reactjs</li>
            <li>Sveltejs</li>
            <li>Vuejs</li>
            <li>Nuxtjs</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Tailwind CSS</li>
            <li>HTML</li>
            <li>SQL</li>
          </ul>
        </div>
        <h1
          class="font-roboto-black text-xl border-b-black border-b-1 pb-2 mt-5"
        >
          Education
        </h1>
        <p>2nd year Mathematics (not containued)</p>
        <!-- NOTE: END LEFT -->
      </div>
      <div class="right-side bg-gray-300 h-full w-full">
        <!-- NOTE: RIGHT SIDE -->
        <div class="flex flex-col gap-3 p-3">
          <h1 class="font-roboto-black text-xl border-b-black border-b-1 pb-2">
            Personal Info
          </h1>
          <div>
            <h2 class="font-roboto-bold">Email</h2>
            <a
              href="mailto:zxnightstalker199733@gmail.com"
              class="underline"
              target="_blank"
              >zxnightstalker199733@gmail.com</a
            >
          </div>
          <div>
            <h2 class="font-roboto-bold">Phone (Cellular, Viper, Telegram)</h2>
            <p>09-797877517</p>
          </div>
          <div>
            <h2 class="font-roboto-bold">Address</h2>
            <p>
              No.334, Mingalar Yarma road,<br />
              South Dagon Township, Yangon
            </p>
          </div>
          <div>
            <h2 class="font-roboto-bold">Portfolio website</h2>
            <a href="" target="_blank" class="underline"> mg-xtet.com </a>
          </div>
          <div>
            <h2 class="font-roboto-bold">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/mg-khin-maung-htet-5a6284198"
              class="underline"
              target="_blank"
            >
              https://www.linkedin.com/in/mg-khin-maung-htet-5a6284198
            </a>
          </div>
          <div>
            <h2 class="font-roboto-bold">
              Leetcode (problem solving skill reference)
            </h2>
            <a
              href="https://leetcode.com/Karlicin/"
              target="_blank"
              class="underline"
            >
              https://leetcode.com/Karlicin/
            </a>
          </div>
        </div>
        <div class="flex flex-col p-3">
          <h1
            class="font-roboto-black text-xl border-b-black border-b-1 pb-2 mb-3"
          >
            Languages
          </h1>
          <ul class="list-disc list-inside">
            <li>Myanmar (native)</li>
            <li>English (conversational)</li>
          </ul>
        </div>
        <div class="flex flex-col p-3">
          <h1
            class="font-roboto-black text-xl border-b-black border-b-1 pb-2 mb-3"
          >
            Status
          </h1>
          <ul class="list-disc list-inside">
            <li>Certified Graphics Designer</li>
            <li>Self-taught programmer</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style sceped>
.border-b-1 {
  border-bottom-width: 1px;
}

.left-side {
  flex: 100%;
}

.right-side {
  flex: 50%;
}
</style>
