import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/__manifest", () => {
    return HttpResponse.json({});
  }),
];
