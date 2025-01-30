import { render, screen } from "@testing-library/react";
import LatestGames from "~/components/latestGames";
import { gamesYesterday, gamesYesterdayNotStarted } from "./mocks";
import { createRoutesStub } from "react-router";

function setUp(mockData = gamesYesterday) {
  const LatestGamesRouteStub = createRoutesStub([
    {
      path: "/",
      Component: () => {
        return <LatestGames data={mockData} theme={"all"} />;
      },
      HydrateFallback: () => null,
    },
  ]);

  render(<LatestGamesRouteStub />);
}

test("Renders latest games component successfully", async () => {
  setUp();
  expect(
    screen.getByRole("heading", { name: /yesterday's games/i })
  ).toBeInTheDocument();

  expect(
    screen.queryByRole("heading", { name: /today's games/i })
  ).not.toBeInTheDocument();

  expect(
    screen.queryByRole("heading", { name: /previous games/i })
  ).not.toBeInTheDocument();

  const gameList = screen.getByRole("list");

  expect(gameList).toBeInTheDocument();
  expect(gameList.children).toHaveLength(1);
});

test("Renders correct teams", () => {
  setUp();
  const gameList = screen.getByRole("list");

  expect(gameList).toBeInTheDocument();
  expect(gameList.children).toHaveLength(1);

  expect(screen.getByText(/112 - 110/i)).toBeInTheDocument();

  expect(screen.getByText(/chicago bulls/i)).toBeInTheDocument();

  expect(screen.getByText(/charlotte hornets/i)).toBeInTheDocument();
});

test("Renders correct scores", () => {
  setUp();
  expect(screen.getByText(/112 - 110/i)).toBeInTheDocument();
});

test("Renders link with correct url if game is in Final state", () => {
  setUp();
  const gameLink = screen.getByRole("link");

  expect(gameLink).toBeInTheDocument();
  expect(gameLink).toHaveAttribute("href", "/game/234234234242/2025-01-29");
  expect(gameLink).toHaveAttribute("data-discover", "true");
});

test("Renders no link with correct url if game is NOT in Final state", () => {
  setUp(gamesYesterdayNotStarted);
  const gameLink = screen.queryByRole("link");

  expect(gameLink).not.toBeInTheDocument();
});

test("Renders correct images", () => {
  setUp();
  expect(screen.getByText(/112 - 110/i)).toBeInTheDocument();

  const homeTeamImage = screen.getByTestId("home-team-logo");
  expect(homeTeamImage).toBeInTheDocument();
  expect(homeTeamImage).toHaveAttribute(
    "src",
    "https://cdn.nba.com/logos/nba/1610612741/global/L/logo.svg"
  );
  expect(homeTeamImage).toHaveAttribute("class", "w-10 h-10 inline-block mr-2");

  const awayTeamImage = screen.getByTestId("away-team-logo");
  expect(awayTeamImage).toBeInTheDocument();

  expect(awayTeamImage).toHaveAttribute(
    "src",
    "https://cdn.nba.com/logos/nba/1610612766/global/L/logo.svg"
  );
  expect(awayTeamImage).toHaveAttribute("class", "w-10 h-10 inline-block mr-2");
});
