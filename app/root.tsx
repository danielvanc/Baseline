import {
  ActionFunctionArgs,
  ErrorResponse,
  json,
  LinksFunction,
} from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData,
  useFetcher,
  useRouteError,
  useSubmit,
} from "@remix-run/react";
import tailwindStyles from "~/styles/tailwind.css?url";
import { teams, TeamSelector } from "./config/teams";
import { useRef } from "react";
import { useIsSubmitting } from "~/utils/optimistic";
import { invariantResponse } from "@epic-web/invariant";
import { parseWithZod } from "@conform-to/zod";

const defaultBg =
  "bg-gradient-to-b from-orange-500 via-orange-700 to-orange-300";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }];
};

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const submission = parseWithZod(data, { schema: TeamSelector });

  invariantResponse(
    submission.status === "success",
    JSON.stringify({
      error: "Invalid theme received",
    }),
    { status: 500, headers: { "Content-Type": "application/json" } }
  );

  const team = data.get("team");

  return json({ team });
}

function Document({
  children,
  classes = "",
  team,
}: {
  children: React.ReactNode;
  classes?: string;
  team?: string;
}) {
  return (
    <html lang="en" className="h-screen font-sans" data-theme={team}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={classes}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const teamFetcher = useFetcher<typeof action>();
  const teamSelectionFormRef = useRef<HTMLSelectElement>(null);
  const submitTeamSelection = useSubmit();
  const data = useActionData<typeof action>();

  const optimisticTeam = teamSelectionFormRef.current?.value;
  const showAllTeams = data?.team === "all";
  const submittedTeam = data && !showAllTeams ? data.team : null;

  // For a nicer UX when switching themes on a slow network, thet's optimistically-load the theme.
  const team = useIsSubmitting({}) ? optimisticTeam : submittedTeam;

  const classes = team && team !== "all" ? "bg-skin-base" : defaultBg;
  const selectedTheme =
    team && team !== "all"
      ? teams.find((t) => t.abbr === team)?.name
      : "Baseline";

  return (
    <Document classes={classes} team={team?.toString()}>
      <h1 className="text-skin-base">{selectedTheme}</h1>
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
                ref={teamSelectionFormRef}
              >
                <option key={`theme-no-team`} value={"all"}>
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
    <Document classes={defaultBg} team="all">
      <div>
        <p>{message}</p>
      </div>
    </Document>
  );
}
