import { ActionFunctionArgs, json, LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData,
  useFetcher,
  useSubmit,
} from "@remix-run/react";
import tailwindStyles from "~/styles/tailwind.css?url";
import { teams } from "./config/teams";
import React from "react";
import { useIsSubmitting } from "./utils/optimistic";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStyles }].filter(Boolean);
};

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const team = data.get("team-chooser");

  return json({ team });
}

export default function App() {
  const teamFetcher = useFetcher<typeof action>();
  const submitTeamSelection = useSubmit();
  const ref = React.useRef<HTMLSelectElement>(null);
  const selectedTeam = ref.current?.value;
  const data = useActionData<typeof action>();
  const showAllTeams = data?.team === "all";
  const submittedTeam = data && !showAllTeams ? data.team : null;

  const defaultBgGradient =
    "bg-gradient-to-b from-orange-500 via-orange-700 to-orange-300";
  // For a nicer UX when switching themes on a slow network, thet's optimistically-load the theme.
  const team = useIsSubmitting({}) ? selectedTeam : submittedTeam;
  const classes =
    submittedTeam && (submittedTeam !== "all" || team !== "all")
      ? "bg-brand-bg"
      : defaultBgGradient;

  return (
    <html lang="en" className="h-screen">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={classes} data-theme={team}>
        <header>
          <nav>
            <h1>Baseline</h1>
            <div>
              <teamFetcher.Form method="post">
                <select
                  name="team-chooser"
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
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
