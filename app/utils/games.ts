import { isYesterday, isBefore, subDays } from "date-fns";
import { teams } from "~/config/teams";
import { data } from "react-router";

export interface GamesType {
  gameId: string;
  gameEt: string;
  gameTimeUTC: string;
  gameLabel: string;
  gameSubLabel: string;
  gameStatusText: string;
  awayTeam: {
    teamCity: string;
    teamName: string;
    teamTricode: string;
    score: number;
  };
  homeTeam: {
    teamCity: string;
    teamName: string;
    teamTricode: string;
    score: number;
  };
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

  return data(gamesData);
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

export function getTeamLogo(teamTricode: string) {
  return teams
    .find((t) => t.abbr === teamTricode)
    ?.logo?.({ width: 40, height: 55 });
}
