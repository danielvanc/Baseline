import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

const { NODE_ENV, MOCKS } = process.env;

if ((NODE_ENV === "development" || NODE_ENV === "test") && MOCKS === "true") {
  console.info("🔶 Mock server running");

  process.once("SIGINT", () => server.close());
  process.once("SIGTERM", () => server.close());
}
