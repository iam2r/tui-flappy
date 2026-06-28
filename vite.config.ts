import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { vueTui } from "@vue-tui/vite";
import { isBuiltin } from "node:module";

// Self-contained build: bundle everything except Node builtins.
// Runs with just `node dist/main.js` — no node_modules needed.
export default defineConfig({
  plugins: [vueTui({ entry: "/src/main.tsx" }), vueJsx()],
  build: {
    target: "node22",
    minify: false,
    rolldownOptions: {
      platform: "node",
      external: (id) => isBuiltin(id),
    },
  },
});
