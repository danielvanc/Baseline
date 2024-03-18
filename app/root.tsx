import { ActionFunctionArgs, json, LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
} from "@remix-run/react";
import tailwindStyles from "~/styles/tailwind.css?url";

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
  const hasSelectedTeam = !!(
    teamFetcher.state === "idle" && teamFetcher?.data?.team
  );
  const team = hasSelectedTeam ? teamFetcher?.data?.team : null;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-brand-bg border-l-brand-bdr" data-theme={team}>
        <header>
          <nav>
            <h1>Baseline</h1>
            <div>
              <teamFetcher.Form method="post">
                <button type="submit" value="phx" name="team-chooser">
                  Choose PHX
                </button>
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
