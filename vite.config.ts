import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { vueTui } from "@vue-tui/vite";

// vueJsx enables JSX/TSX in .tsx files alongside vueTui's terminal renderer.
export default defineConfig({
  plugins: [vueTui({ entry: "/src/main.tsx" }), vueJsx()],
});
