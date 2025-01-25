import { isYesterday, isBefore, subDays } from "date-fns";
import { data } from "react-router";
import { endpoints } from "~/config/api";
import { teams } from "~/config/teams";

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

export interface UpcomingGamesType
  extends Pick<
    GamesType,
    "gameId" | "gameLabel" | "gameStatusText" | "awayTeam" | "homeTeam"
  > {
  gameDateTimeEst: string;
}

export interface GameWeek {
  weekNumber: string;
  weekName: string;
  startDate: string;
  endDate: string;
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
  try {
    const response = await fetch(endpoints.latestGames);
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
  } catch {
    console.error("Unable to retrieve today's games");

    throw data("Unable to retrieve today's games");
  }
}

export async function getUpcomingGames() {
  try {
    const response = await fetch(endpoints.upcomingGames);
    const json = await response.json();

    const { leagueSchedule } = json;
    const { gameDates, weeks } = leagueSchedule as {
      gameDates: { gameDate: string; games: UpcomingGamesType[] }[];
      weeks: GameWeek[];
    };

    const currentDate = new Date().toISOString().split("T")[0];

    const isDateWithinRange = (compare: string, start: string, end: string) =>
      compare >= start.split("T")[0] && compare <= end.split("T")[0];

    const currentWeek = weeks.filter((week) =>
      isDateWithinRange(currentDate, week.startDate, week.endDate)
    )[0];

    const getGameLineups = (startDate: string, endDate: string) => {
      return gameDates.filter((gameDay) => {
        const gameDate = gameDay.gameDate.split(" ")[0];
        const [month, day, year] = gameDate.split("/");
        const gamesDate = `${year}-${month}-${day}`;
        const formedDate = currentDate.split("T")[0];

        return (
          isDateWithinRange(gamesDate, startDate, endDate) &&
          gamesDate > formedDate
        );
      });
    };

    let scheduleDates = getGameLineups(
      currentWeek.startDate,
      currentWeek.endDate
    );

    if (!scheduleDates.length || scheduleDates[0].games.length < 5) {
      const nextWeek = weeks.filter(
        (week) => week.weekNumber === currentWeek.weekNumber + 1
      )[0];
      const newDates = getGameLineups(nextWeek.startDate, nextWeek.endDate);

      scheduleDates = [...scheduleDates, ...newDates.slice(0, 2)];
    }

    const upcomingSchedule = scheduleDates
      .map((gameDay) =>
        gameDay.games.map(
          ({
            gameId,
            awayTeam,
            homeTeam,
            gameLabel,
            gameStatusText,
            gameDateTimeEst,
          }: UpcomingGamesType) => ({
            gameId,
            gameLabel,
            gameStatusText,
            awayTeam,
            homeTeam,
            gameDateTimeEst,
          })
        )
      )
      .flat();

    return upcomingSchedule;
  } catch {
    console.error("Unable to retrieve upcoming games");

    throw data("Unable to retrieve upcoming games");
  }
}

export async function getLatestStandings() {
  try {
    const response = await fetch(
      `${endpoints.latestStandings}?GroupBy=conf&LeagueID=00&Season=2024-25&SeasonType=Regular%20Season&Section=overall`,
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
  } catch {
    console.error("Unable to retrieve latest standings");

    throw data("Unable to retrieve latest standings");
  }
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

export function getCDNLogo(teamId: number) {
  return `https://cdn.nba.com/logos/nba/${teamId}/global/L/logo.svg`;
}

export function highlightRow(
  selectedTheme: string,
  homeTeamId: number,
  awayTeamId: number
) {
  const highlightedStyles = "bg-opacity-20 bg-white bg-opacity-10";
  const selectedTeam =
    selectedTheme !== "all"
      ? teams.filter((team) => team.abbr === selectedTheme)
      : null;

  if (!selectedTeam) return "";

  const ids = [homeTeamId, awayTeamId];
  if (selectedTheme && ids.includes(selectedTeam[0].id)) {
    return highlightedStyles;
  }

  return "";
}
