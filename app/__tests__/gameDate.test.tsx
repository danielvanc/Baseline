import { render, screen } from "@testing-library/react";
import GameDateInfo from "~/components/gameDateInfo";
import { gamesTodayNotStarted, gamesYesterdayNotStarted } from "./mocks";
import type { GamesType } from "~/utils/games";

beforeAll(() => {
  vi.useFakeTimers();
});

afterAll(() => {
  vi.useRealTimers();
});

function setUp(game: GamesType, gamesDate: string) {
  render(<GameDateInfo game={game} gamesDate={gamesDate} />);
}

test("Renders GameDateInfo for Today", () => {
  vi.setSystemTime("2025-01-30T00:00:00Z");
  const { games } = gamesTodayNotStarted;
  setUp(games[0], "2025-01-30T03:00:00Z");

  expect(screen.getByText(/3:00 am \(et\)/i)).toBeInTheDocument();
  expect(screen.queryByText(/29 \/ 01/i)).not.toBeInTheDocument();
});

test("Renders GameDateInfo for Yesterday", () => {
  vi.setSystemTime("2025-01-30T00:00:00Z");
  const { games } = gamesYesterdayNotStarted;
  setUp(games[0], "2025-01-29T00:00:00Z");

  expect(screen.getByText(/112 - 110/i)).toBeInTheDocument();
  expect(screen.queryByText(/3:00 am \(et\)/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/29 \/ 01/i)).not.toBeInTheDocument();
});

test("Renders GameDateInfo for previous days ago", () => {
  vi.setSystemTime("2025-01-30T00:00:00Z");
  const { games } = gamesYesterdayNotStarted;
  setUp(games[0], "2025-01-27T00:00:00Z");

  expect(screen.queryByText(/3:00 am \(et\)/i)).not.toBeInTheDocument();
  expect(screen.getByText(/29 \/ 01/i)).toBeInTheDocument();
  expect(screen.getByText(/112 - 110/i)).toBeInTheDocument();
});
