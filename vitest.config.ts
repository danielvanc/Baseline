import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      include: "app",
    }),
  ],
  test: {
    globals: true,
    include: ["./app/__tests__/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    root: __dirname,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      include: ["./app/**/*"],
      reporter: ["text", "json", "html"],
      reportsDirectory: "./coverage",
    },
  },
});
