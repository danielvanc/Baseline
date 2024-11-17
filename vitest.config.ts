import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    root: __dirname,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
