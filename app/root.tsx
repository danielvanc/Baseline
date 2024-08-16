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

const defaultBgGradient =
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
    <html lang="en" className="h-screen font-sans">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={classes} data-theme={team}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const teamFetcher = useFetcher<typeof action>();
  const submitTeamSelection = useSubmit();
  const ref = useRef<HTMLSelectElement>(null);
  const selectedTeam = ref.current?.value;
  const data = useActionData<typeof action>();

  const showAllTeams = data?.team === "all";
  const submittedTeam = data && !showAllTeams ? data.team : null;
  // For a nicer UX when switching themes on a slow network, thet's optimistically-load the theme.
  const team = useIsSubmitting({}) ? selectedTeam : submittedTeam;
  const classes =
    submittedTeam && (submittedTeam !== "all" || team !== "all")
      ? "bg-brand-bg"
      : defaultBgGradient;

  return (
    <Document classes={classes} team={team?.toString()}>
      <header>
        <nav>
          <h1>Baseline</h1>
          <div>
            <teamFetcher.Form method="post">
              <select
                name="team"
                onChange={(e) => submitTeamSelection(e.target.form)}
                ref={ref}
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
    <Document classes={defaultBgGradient} team="all">
      <div>
        <p>{message}</p>
      </div>
    </Document>
  );
}
