import { route, type RouteConfig } from "@remix-run/route-config";

export const routes: RouteConfig = [route("/", "routes/index.tsx")];
