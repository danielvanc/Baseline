import { server } from "./app/mocks/node";
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";

afterEach(cleanup);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
