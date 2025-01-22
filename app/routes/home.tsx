import type { Route } from "./+types/home";
import {
  getGamesToday,
  getLatestStandings,
  type StandingsData,
  type TodaysGames,
} from "~/utils/games";
import React from "react";
import { Await, data, type HeadersArgs } from "react-router";
import SkeletonTodaysGames from "~/components/ui/loading/skeleton-todays-games";
import LatestGames from "~/components/latestGames";
import LatestStandings from "~/components/latestStandings";

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
  const latestStandings = getLatestStandings();

  return data(
    { gamesData, latestStandings },
    {
      headers: {
        "Cache-Control": "max-age=3600, public",
      },
    }
  );
}

clientLoader.hydrate = true;

let cache: {
  gamesData: TodaysGames;
  latestStandings: StandingsData;
};

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  if (cache)
    return {
      gamesData: cache.gamesData,
      latestStandings: cache.latestStandings,
    };

  const { gamesData, latestStandings } = (await serverLoader()) as unknown as {
    gamesData: TodaysGames;
    latestStandings: StandingsData;
  };
  cache = { gamesData, latestStandings };

  return { gamesData, latestStandings };
}

export default function Home({
  loaderData: { gamesData, latestStandings },
}: Route.ComponentProps) {
  return (
    <main className="lg:flex justify-between lg:space-x-10">
      <div className="lg:w-2/4 mb-10 lg:mb-0">
        <React.Suspense fallback={<SkeletonTodaysGames />}>
          <Await resolve={gamesData as Promise<TodaysGames>}>
            {(gamesData) => <LatestGames data={gamesData} />}
          </Await>
        </React.Suspense>
      </div>
      <div className="lg:w-2/4">
        <React.Suspense fallback={<SkeletonTodaysGames />}>
          <Await resolve={latestStandings}>
            {(latestStandings) => <LatestStandings data={latestStandings} />}
          </Await>
        </React.Suspense>
      </div>
    </main>
  );
}
