import type { Route } from "./+types/home";
import {
  getGamesToday,
  getLatestStandings,
  getUpcomingGames,
  type StandingsData,
  type TodaysGames,
  type UpcomingGamesType,
} from "~/utils/games";
import React from "react";
import { Await, data, type HeadersArgs } from "react-router";
import SkeletonTodaysGames from "~/components/ui/loading/skeleton-todays-games";
import LatestGames from "~/components/latestGames";
import LatestStandings from "~/components/latestStandings";
import UpcomingGames from "~/components/upcomingGames";

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
  const upcomingGames = getUpcomingGames();

  return data(
    { gamesData, latestStandings, upcomingGames },
    {
      headers: {
        "Cache-Control": "max-age=3600, public",
      },
    }
  );
}

clientLoader.hydrate = true;

interface ClientCache {
  gamesData: TodaysGames;
  latestStandings: StandingsData;
  upcomingGames: UpcomingGamesType[];
}

let cache: ClientCache;

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  if (cache)
    return {
      gamesData: cache.gamesData,
      latestStandings: cache.latestStandings,
      upcomingGames: cache.upcomingGames,
    };

  const { gamesData, latestStandings, upcomingGames } =
    (await serverLoader()) as unknown as ClientCache;

  cache = { gamesData, latestStandings, upcomingGames };

  return { gamesData, latestStandings, upcomingGames };
}

export default function Home({
  loaderData: { gamesData, latestStandings, upcomingGames },
}: Route.ComponentProps) {
  return (
    <main className="lg:flex justify-between lg:space-x-10">
      <div className="lg:w-2/4">
        <div className="mb-10">
          <React.Suspense fallback={<SkeletonTodaysGames />}>
            <Await resolve={gamesData}>
              {(gamesData) => <LatestGames data={gamesData} />}
            </Await>
          </React.Suspense>
        </div>
        <div className="mb-10">
          <React.Suspense fallback={<SkeletonTodaysGames />}>
            <Await resolve={upcomingGames}>
              {(upcomingGames) => <UpcomingGames data={upcomingGames} />}
            </Await>
          </React.Suspense>
        </div>
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
