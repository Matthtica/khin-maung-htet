import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "centered" | "default"
declare module "/home/karl/codes/web/karl-xtet/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}