import type { Route } from "./+types/home";
import { getGamesToday, type TodaysGames } from "~/utils/games";
import React from "react";
import { Await, data, type HeadersArgs } from "react-router";
import SkeletonTodaysGames from "~/components/ui/loading/skeleton-todays-games";
import LatestGames from "~/components/latestGames";

export function meta() {
  return [
    { title: "Baseline" },
    { name: "description", content: "Welcome to Baseline!" },
  ];
}

export function headers({ loaderHeaders }: HeadersArgs) {
  return loaderHeaders;
}

export async function loader() {
  const gamesData = getGamesToday();

  return data(
    { gamesData },
    {
      headers: {
        "Cache-Control": "max-age=3600, public",
      },
    }
  );
}

clientLoader.hydrate = true;

let cache: { gamesData: TodaysGames };

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  if (cache) return { gamesData: cache.gamesData };

  const { gamesData } = (await serverLoader()) as unknown as {
    gamesData: TodaysGames;
  };
  cache = { gamesData };

  return { gamesData };
}

export default function Home({
  loaderData: { gamesData },
}: Route.ComponentProps) {
  return (
    <React.Suspense fallback={<SkeletonTodaysGames />}>
      <Await resolve={gamesData as Promise<TodaysGames>}>
        {(gamesData) => <LatestGames data={gamesData} />}
      </Await>
    </React.Suspense>
  );
}
