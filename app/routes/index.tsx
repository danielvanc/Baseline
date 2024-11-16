import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Baseline" },
    { name: "description", content: "Welcome to Baseline!" },
  ];
};

export async function loader() {
  return null;
}

export default function Index() {
  return <div className="p-11"></div>;
}
