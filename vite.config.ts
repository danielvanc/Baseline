import { vitePlugin as remix } from "@remix-run/dev";

import { defineConfig, loadEnv } from "vite";
import { installGlobals } from "@remix-run/node";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    server: {
      port: 3000,
    },
    plugins: [
      remix({
        ignoredRouteFiles: ["**/*.css"],
        future: {
          unstable_routeConfig: true,
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
          unstable_optimizeDeps: true,
        },
      }),
      tsconfigPaths(),
    ],
    define: {
      "process.env.MOCKS": JSON.stringify(env.MOCKS),
    },
  };
});
