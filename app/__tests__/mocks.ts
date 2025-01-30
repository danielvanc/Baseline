import type { TodaysGames } from "~/utils/games";

export const gamesYesterday: TodaysGames = {
  gameDate: "2025-01-29T03:00:00Z",
  games: [
    {
      gameId: "234234234242",
      gameEt: "2025-01-29T03:00:00Z",
      gameTimeUTC: "2025-01-29T03:00:00Z",
      gameLabel: "Test Game",
      gameSubLabel: "Test Sub Label",
      gameStatusText: "Final",
      awayTeam: {
        losses: 1,
        score: 112,
        teamCity: "Charlotte",
        teamId: 1610612766,
        teamName: "Hornets",
        teamTricode: "CHA",
        wins: 2,
      },
      homeTeam: {
        losses: 1,
        score: 110,
        teamCity: "Chicago",
        teamId: 1610612741,
        teamName: "Bulls",
        teamTricode: "CHI",
        wins: 2,
      },
    },
  ],
};

export const gamesYesterdayNotStarted: TodaysGames = {
  gameDate: "2025-01-29T03:00:00Z",
  games: [
    {
      gameId: "234234234242",
      gameEt: "2025-01-29T03:00:00Z",
      gameTimeUTC: "2025-01-29T03:00:00Z",
      gameLabel: "Test Game",
      gameSubLabel: "Test Sub Label",
      gameStatusText: "",
      awayTeam: {
        losses: 1,
        score: 112,
        teamCity: "Charlotte",
        teamId: 1610612766,
        teamName: "Hornets",
        teamTricode: "CHA",
        wins: 2,
      },
      homeTeam: {
        losses: 1,
        score: 110,
        teamCity: "Chicago",
        teamId: 1610612741,
        teamName: "Bulls",
        teamTricode: "CHI",
        wins: 2,
      },
    },
  ],
};

export const gamesTodayNotStarted: TodaysGames = {
  gameDate: "2025-01-29T03:00:00Z",
  games: [
    {
      gameId: "234234234242",
      gameEt: "2025-01-29T03:00:00Z",
      gameTimeUTC: "2025-01-29T03:00:00Z",
      gameLabel: "Test Game",
      gameSubLabel: "Test Sub Label",
      gameStatusText: "",
      awayTeam: {
        losses: 1,
        score: 112,
        teamCity: "Charlotte",
        teamId: 1610612766,
        teamName: "Hornets",
        teamTricode: "CHA",
        wins: 2,
      },
      homeTeam: {
        losses: 1,
        score: 110,
        teamCity: "Chicago",
        teamId: 1610612741,
        teamName: "Bulls",
        teamTricode: "CHI",
        wins: 2,
      },
    },
  ],
};
