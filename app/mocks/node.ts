import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

if (process.env.MOCKS === "true") {
  console.info("🔶 Mock server running");

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());
}
