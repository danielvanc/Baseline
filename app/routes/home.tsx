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
import { getLatestNews, type NewsItem } from "~/utils/news";
import LatestNews from "~/components/latestNews";

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
  const latestNews = getLatestNews();

  return data(
    { gamesData, latestStandings, upcomingGames, latestNews },
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
  latestNews: NewsItem[];
}

let cache: ClientCache;

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  if (cache)
    return {
      gamesData: cache.gamesData,
      latestStandings: cache.latestStandings,
      upcomingGames: cache.upcomingGames,
      latestNews: cache.latestNews,
    };

  const { gamesData, latestStandings, upcomingGames, latestNews } =
    (await serverLoader()) as unknown as ClientCache;

  cache = { gamesData, latestStandings, upcomingGames, latestNews };

  return { gamesData, latestStandings, upcomingGames, latestNews };
}

export default function Home({
  loaderData: { gamesData, latestStandings, upcomingGames, latestNews },
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
        <div className="mb-10">
          <React.Suspense fallback={<SkeletonTodaysGames />}>
            <Await resolve={latestStandings}>
              {(latestStandings) => <LatestStandings data={latestStandings} />}
            </Await>
          </React.Suspense>
        </div>

        <div className="mb-10">
          <React.Suspense fallback={<SkeletonTodaysGames />}>
            <Await resolve={latestNews}>
              {(latestNews) => <LatestNews data={latestNews} />}
            </Await>
          </React.Suspense>
        </div>
      </div>
    </main>
  );
}
