// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        'unplugin-icons/nuxt',
        '@nuxt/image-edge'
    ],
    css: [
        '@/assets/global.css',
    ]
})
