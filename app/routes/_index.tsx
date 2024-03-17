import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, json, useActionData } from "@remix-run/react";

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
  const data = useActionData<typeof action>();
  const team = data?.team ?? null;

  return (
    <>
      <main>
        <div className="p-11 bg-primary text-neutral-50" data-theme={team}>
          <h1>Primary theme</h1>
        </div>
        {/* <div className="p-11 bg-primary" data-theme="rainforest">
          <h1>Rainforest theme</h1>
        </div>
        <div className="p-11 bg-primary" data-theme="candy">
          <h1>Candy theme</h1>
        </div> */}
      </main>
      <aside>
        <Form method="POST">
          <button type="submit" value="phx" name="team-chooser">
            Choose PHX
          </button>
        </Form>
      </aside>
    </>
  );
}
