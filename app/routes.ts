import { relative, type RouteConfig } from "@remix-run/route-config";

const { route } = relative("./app/routes");

export const routes: RouteConfig = [route("/", "index.tsx")];
