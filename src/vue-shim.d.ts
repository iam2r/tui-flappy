declare module "@vue-tui/vite" {
  import type { PluginOption } from "vite";
  export function vueTui(opts?: { entry?: string }): PluginOption;
}
