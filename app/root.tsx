import {
  ActionFunctionArgs,
  ErrorResponse,
  json,
  LinksFunction,
  LoaderFunctionArgs,
  redirect,
} from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import tailwindStyles from "~/styles/tailwind.css?url";
import { teams, TeamSelector } from "./config/teams";
import React from "react";
import { invariantResponse } from "@epic-web/invariant";
import { parseWithZod } from "@conform-to/zod";
import { themeCookie } from "./utils/theme.server";
import ThemeLogo from "./components/ui/ThemeLogo";
import Header from "./components/header";

const defaultTheme = "all";
const defaultBg =
  "bg-gradient-to-b from-orange-500 via-orange-700 to-orange-300";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get("Cookie");
  if (cookieHeader) {
    const cookie = (await themeCookie.parse(cookieHeader)) || {
      theme: defaultTheme,
    };

    return json({ theme: cookie.theme });
  }

  return json({ theme: defaultTheme });
}

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const submission = parseWithZod(data, { schema: TeamSelector });

  const themeCookieHeader = request.headers.get("Cookie");
  const cookie = (await themeCookie.parse(themeCookieHeader)) || {
    theme: defaultTheme,
  };

  invariantResponse(
    submission.status === "success",
    JSON.stringify({
      error: "Invalid theme received",
    }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );

  const team = data.get("team") || defaultTheme;

  cookie.theme = team;

  return redirect("/", {
    headers: {
      "Set-Cookie": await themeCookie.serialize(cookie, {
        expires: new Date(Date.now() + 60_000),
      }),
    },
  });
}

function Document({
  children,
  classNames = "",
  theme,
}: {
  children: React.ReactNode;
  classNames: string;
  theme: string;
}) {
  return (
    <html lang="en" className="h-screen font-sans" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={`h-screen ${classNames}`}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const savedTheme = useLoaderData<typeof loader>()?.theme ?? defaultTheme;
  const spanRef = React.useRef<HTMLSpanElement>(savedTheme);
  const newTheme = spanRef?.current?.innerText || savedTheme;
  const classNames = newTheme !== defaultTheme ? "bg-skin-base" : defaultBg;
  const selectedTeamName =
    newTheme && newTheme !== defaultTheme
      ? teams.find((t) => t.abbr === newTheme)?.name
      : "Baseline";

  return (
    <Document classNames={classNames} theme={newTheme}>
      <h1 className="text-skin-base absolute bottom-[-30px] right-0 text-9xl font-black opacity-20">
        {selectedTeamName}
      </h1>
      {newTheme !== defaultTheme && <ThemeLogo theme={newTheme} />}
      <div className="container">
        <Header
          newTheme={newTheme}
          defaultTheme={defaultTheme}
          spanRef={spanRef}
        />
        <Outlet />
      </div>
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError() as ErrorResponse;
  const message = error.data.error;

  return (
    // TODO: Use whatever theme the user has selected
    <Document classNames={defaultBg} theme={defaultTheme}>
      <div>
        <p>{message}</p>
      </div>
    </Document>
  );
}
