import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, useFetcher } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Baseline" },
    { name: "description", content: "Welcome to Baseline!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const team = data.get("team-chooser");

  return json({ team });
}

export default function Index() {
  const fetcher = useFetcher<typeof action>();
  const hasSelectedTeam = !!(fetcher.state === "idle" && fetcher?.data?.team);
  const team = hasSelectedTeam ? fetcher?.data?.team : null;

  return (
    <>
      <main>
        <div className="p-11 bg-primary text-brand" data-theme={team}>
          <h1>Primary theme</h1>
        </div>
      </main>
      <aside>
        <fetcher.Form method="post">
          <button type="submit" value="phx" name="team-chooser">
            Choose PHX
          </button>
        </fetcher.Form>
      </aside>
    </>
  );
}
