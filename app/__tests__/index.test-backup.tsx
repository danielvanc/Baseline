import { createRoutesStub, useLoaderData } from "react-router";
import * as HomeRoute from "../routes/home";
import { render, waitFor } from "@testing-library/react";

const gamesTestData = {
  gameDate: "2025-01-29T03:00:00Z",
  games: [
    {
      gameId: "234234234242",
      gameEt: "2025-01-29T03:00:00Z",
      gameTimeUTC: "2025-01-29T03:00:00Z",
      gameLabel: "Test Game",
      gameSubLabel: "Test Sub Label",
      gameStatusText: "Test Game Status Text",
      awayTeam: {},
      homeTeam: {},
    },
  ],
};

const standingsTestData = {
  east: [
    {
      teamId: 23423423423,
      teamCity: "",
      teamName: "",
      conference: "",
      division: "",
      wins: 1,
      losses: 2,
      winPct: 23,
    },
  ],
  west: [
    {
      teamId: 23423423423,
      teamCity: "",
      teamName: "",
      conference: "",
      division: "",
      wins: 1,
      losses: 2,
      winPct: 23,
    },
  ],
};

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useRouteLoaderData: vi.fn().mockReturnValue({
      theme: "all",
    }),
  };
});

test("initial render test", async () => {
  const LatestGamesRouteStub = createRoutesStub([
    {
      // id: "home",
      // index: true,
      path: "/",
      // loader: HomeRoute.loader,
      Component: () => {
        // const loaderData = useLoaderData<typeof HomeRoute.loader>();
        const LatestGames = LatestGamesRoute.default;
        return <LatestGames data={gamesTestData} theme={"all"} />;
      },
      HydrateFallback: () => null,
    },
  ]);

  // https://github.com/remix-run/react-router/issues/12494
  const HomeRouteStub = createRoutesStub([
    {
      id: "home",
      index: true,
      path: "/",
      loader: HomeRoute.loader,
      Component: () => {
        const loaderData = useLoaderData<typeof HomeRoute.loader>();
        const Home = HomeRoute.default;
        return (
          <Home
            loaderData={loaderData}
            params={{}}
            matches={[
              {
                id: "root",
                params: {},
                pathname: "/",
                handle: {},
                data: { theme: "all" },
              },
              {
                id: "routes/home",
                params: {},
                pathname: "/",
                handle: {},
                data: loaderData,
              },
            ]}
          />
        );
      },
      HydrateFallback: () => null,
    },
  ]);

  const { debug } = render(
    // <HomeRouteStub
    //   initialEntries={["/"]}
    //   hydrationData={{
    //     loaderData: {
    //       gamesData: gamesTestData,
    //       latestStandings: standingsTestData,
    //       upcomingGames: gamesTestData,
    //       latestNews: [{ title: "test news", url: "https://www.yahoo.com" }],
    //     },
    //   }}
    // />
    <HomeRouteStub initialEntries={["/"]} />
  );

  await waitFor(() => debug());
});
