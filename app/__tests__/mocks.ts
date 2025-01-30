import type { TodaysGames } from "~/utils/games";
import type { NewsItem } from "~/utils/news";

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

export const latestNews: NewsItem[] = [
  {
    title: "Wemby gets a hero’s welcome in Paris",
    url: "https://www.nba.com/news/victor-wembanyama-gets-a-heros-welcome-in-paris",
  },
  {
    title: "NBA Storylines: Most improved defenses this season",
    url: "https://www.nba.com/news/nba-storylines-most-improved-defenses-2024-25",
  },
  {
    title: "Cavs' Atkinson earns spot as 2025 All-Star coach",
    url: "https://www.nba.com/news/kenny-atkinson-cavaliers-2025-all-star-coach",
  },
  {
    title: "League Pass Game of the Day: Kings vs. Nuggets",
    url: "https://www.nba.com/news/league-pass-game-of-the-day-kings-vs-nuggets-9-et",
  },
  {
    title: "Hornets' Miller (wrist) has season-ending surgery",
    url: "https://www.nba.com/news/hornets-brandon-miller-out-for-season-torn-ligament-right-wrist",
  },
];
