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
import {
  Await,
  data,
  useRouteLoaderData,
  type HeadersArgs,
} from "react-router";
import SkeletonTodaysGames from "~/components/ui/loading/skeleton-todays-games";
import LatestGames from "~/components/latestGames";
import LatestStandings from "~/components/latestStandings";
import UpcomingGames from "~/components/upcomingGames";
import { getLatestNews, type NewsItem } from "~/utils/news";
import LatestNews from "~/components/latestNews";
import StandingsList from "~/components/standings-list";
import SkeletonStandings from "~/components/ui/loading/skeleton-standings";
import SkeletonNews from "~/components/ui/loading/skeleton-news";

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
  const { theme } = useRouteLoaderData("root");

  return (
    <main className="lg:flex justify-between lg:space-x-10">
      <div className="lg:w-2/4">
        <div className="mb-10">
          <React.Suspense fallback={<SkeletonTodaysGames />}>
            <Await resolve={gamesData}>
              {(gamesData) => <LatestGames data={gamesData} theme={theme} />}
            </Await>
          </React.Suspense>
        </div>
        <div className="mb-10">
          <React.Suspense fallback={<SkeletonTodaysGames />}>
            <Await resolve={upcomingGames}>
              {(upcomingGames) => (
                <UpcomingGames data={upcomingGames} theme={theme} />
              )}
            </Await>
          </React.Suspense>
        </div>
      </div>
      <div className="lg:w-2/4">
        <div className="mb-10">
          <React.Suspense fallback={<SkeletonStandings />}>
            <Await resolve={latestStandings}>
              {(latestStandings) => (
                <LatestStandings>
                  <StandingsList
                    data={latestStandings.west}
                    heading="Western"
                    theme={theme}
                  />
                  <StandingsList
                    data={latestStandings.east}
                    heading="Eastern"
                    theme={theme}
                  />
                </LatestStandings>
              )}
            </Await>
          </React.Suspense>
        </div>

        <div className="mb-10">
          <React.Suspense fallback={<SkeletonNews />}>
            <Await resolve={latestNews}>
              {(latestNews) => <LatestNews data={latestNews} />}
            </Await>
          </React.Suspense>
        </div>
      </div>
    </main>
  );
}
