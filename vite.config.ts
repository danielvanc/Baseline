import { defineConfig, loadEnv } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      port: 3000,
    },
    plugins: [reactRouter(), tsconfigPaths()],
    define: {
      "process.env.MOCKS": JSON.stringify(env.MOCKS),
    },
  };
});
