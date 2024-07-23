import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      modules: path.resolve(__dirname, "./src/modules/"),
      hooks: path.resolve(__dirname, "./src/hooks/"),
    },
  },
});

export const test = {
  environment: "jsdom",
  globals: true,
  setupFiles: "./tests/setup.jsx",
};
