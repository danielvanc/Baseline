import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Baseline" },
    { name: "description", content: "Welcome to Baseline!" },
  ];
};

export async function loader() {
  const response = await fetch(
    "https://stats.nba.com/stats/leaguestandingsv3?GroupBy=conf&LeagueID=00&Season=2023-24&SeasonType=Regular%20Season&Section=overall"
  );
  const data = await response.json();

  return { data };
}

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  console.log("data", data);

  return <div className="p-11"></div>;
}
