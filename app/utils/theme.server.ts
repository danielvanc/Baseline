import { createCookie } from "react-router";

export const themeCookie = createCookie("theme_session", {
  httpOnly: true,
  maxAge: 60,
  path: "/",
  sameSite: "lax",
  secrets: process.env.THEME_SECRET?.split(","),
  secure: process.env.NODE_ENV === "production",
});
