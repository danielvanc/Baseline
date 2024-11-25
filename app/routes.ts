import { route, type RouteConfig } from "@remix-run/route-config";

export default [route("/", "routes/index.tsx")] satisfies RouteConfig;
