import { isYesterday, isBefore, subDays } from "date-fns";

export interface GamesType {
  gameId: string;
  gameEt: string;
  gameTimeUTC: string;
  gameLabel: string;
  gameSubLabel: string;
  gameStatusText: string;
  awayTeam: {
    teamId: number;
    teamCity: string;
    teamName: string;
    teamTricode: string;
    score: number;
  };
  homeTeam: {
    teamId: number;
    teamCity: string;
    teamName: string;
    teamTricode: string;
    score: number;
  };
}

export interface TeamTableRow {
  teamId: number;
  teamCity: string;
  teamName: string;
  conference: string;
  division: string;
  wins: number;
  losses: number;
  winPct: number;
}

export interface StandingsData {
  east: TeamTableRow[];
  west: TeamTableRow[];
}

export interface TodaysGames {
  gameDate: string;
  games: GamesType[];
}

type RelativeLabelType = "Today" | "Yesterday" | "Previous";

const CURRENT_DATE_ISO = new Date().toISOString();

export async function getGamesToday() {
  const response = await fetch(
    "https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json"
  );
  const json = await response.json();
  const {
    scoreboard: { gameDate, games },
  } = json;

  const gamesData: TodaysGames = {
    gameDate,
    games: games.map(
      ({
        gameId,
        awayTeam,
        homeTeam,
        gameLabel,
        gameSubLabel,
        gameTimeUTC,
        gameEt,
      }: GamesType) => ({
        gameId,
        gameEt,
        gameTimeUTC,
        gameLabel,
        gameSubLabel,
        awayTeam,
        homeTeam,
      })
    ),
  };

  return gamesData;
}

export async function getLatestStandings() {
  const response = await fetch(
    "https://stats.nba.com/stats/leaguestandingsv3?GroupBy=conf&LeagueID=00&Season=2024-25&SeasonType=Regular%20Season&Section=overall",
    {
      headers: {
        Referer: "https://www.nba.com/",
      },
    }
  );
  const json = await response.json();

  const { resultSets } = json;
  const { rowSet } = resultSets[0];

  const mappedData: TeamTableRow[] = rowSet.map((row: [][]) => ({
    teamId: row[2],
    teamCity: row[3],
    teamName: row[4],
    conference: row[6],
    division: row[10],
    wins: row[13],
    losses: row[14],
    winPct: row[15],
  }));

  const east = mappedData.filter((team) => team.conference === "East");
  const west = mappedData.filter((team) => team.conference === "West");

  return { east, west };
}

export function getRelativeLabel(currentDateISO: string = CURRENT_DATE_ISO) {
  const gameDateObj = new Date(currentDateISO);
  let relativeLabel: RelativeLabelType = "Today";

  if (isYesterday(gameDateObj)) {
    relativeLabel = "Yesterday";
  } else if (isBefore(gameDateObj, subDays(new Date(), 1))) {
    relativeLabel = "Previous";
  }

  return relativeLabel;
}

export function getGamesHeading(gamesDate: string = CURRENT_DATE_ISO) {
  let sectionHeading = "Today's Games";
  const relativeGameTime = getRelativeLabel(gamesDate);

  if (relativeGameTime === "Today") return sectionHeading;

  if (relativeGameTime === "Yesterday") {
    sectionHeading = "Yesterday's Games";
  } else if (relativeGameTime === "Previous") {
    sectionHeading = "Previous Games";
  }

  return sectionHeading;
}
