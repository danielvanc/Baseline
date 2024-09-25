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
  useFetcher,
  useLoaderData,
  useRouteError,
  useSubmit,
} from "@remix-run/react";
import tailwindStyles from "~/styles/tailwind.css?url";
import { teams, TeamSelector } from "./config/teams";
import React from "react";
import { invariantResponse } from "@epic-web/invariant";
import { parseWithZod } from "@conform-to/zod";
import { themeCookie } from "./utils/theme.server";
import ThemeLogo from "./components/ui/ThemeLogo";

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
      <body className={classNames}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const teamFetcher = useFetcher<typeof action>();
  const teamsFormRef = React.useRef<HTMLSelectElement>(null);
  const submitTeamSelection = useSubmit();
  const savedTheme = useLoaderData<typeof loader>()?.theme ?? defaultTheme;
  const newTheme = teamsFormRef.current?.value || savedTheme;
  const classNames = newTheme !== defaultTheme ? "bg-skin-base" : defaultBg;

  const selectedTeamName =
    newTheme && newTheme !== defaultTheme
      ? teams.find((t) => t.abbr === newTheme)?.name
      : "Baseline";

  return (
    <Document classNames={classNames} theme={newTheme}>
      <h1 className="text-skin-base">{selectedTeamName}</h1>
      {newTheme !== defaultTheme && <ThemeLogo theme={newTheme} />}
      <header>
        <nav>
          <div className="logo text-9xl text-skin-base">
            <span className="underline">Base</span>Line
          </div>
          <div className="bg-skin-base">
            <teamFetcher.Form method="post">
              <select
                name="team"
                onChange={(e) => submitTeamSelection(e.target.form)}
                ref={teamsFormRef}
                defaultValue={teams.find((t) => t.abbr === newTheme)?.abbr}
              >
                <option key={`theme-no-team`} value={defaultTheme}>
                  All teams
                </option>
                {teams.map((team) => (
                  <option key={`theme-${team.abbr}`} value={team.abbr}>
                    {team.name}
                  </option>
                ))}
              </select>
            </teamFetcher.Form>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
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
