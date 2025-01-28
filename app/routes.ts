import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("game/:gameId/:gameDate", "routes/game.tsx"),
] satisfies RouteConfig;
