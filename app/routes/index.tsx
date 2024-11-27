import type { Route } from "./+types/index";
import { getGamesToday } from "~/utils/games";
import React from "react";
import { Await } from "react-router";
import SkeletonTodaysGames from "~/components/ui/loading/skeleton-todays-games";
import LatestGames from "~/components/latestGames";

export function meta() {
  return [
    { title: "Baseline" },
    { name: "description", content: "Welcome to Baseline!" },
  ];
}

export async function loader() {
  const gamesData = getGamesToday();

  return { gamesData };
}

export default function Index({
  loaderData: { gamesData },
}: Route.ComponentProps) {
  return (
    <React.Suspense fallback={<SkeletonTodaysGames />}>
      <Await resolve={gamesData}>
        {(gamesData) => <LatestGames data={gamesData.data} />}
      </Await>
    </React.Suspense>
  );
}
