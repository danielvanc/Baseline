import { http, HttpResponse } from "msw";

export const miscHandlers = [
  http.get("/__manifest", () => {
    return HttpResponse.json({});
  }),
];
