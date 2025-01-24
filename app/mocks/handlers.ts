import { upcomingGames } from "./upcomingGames";
import { leagueStandings } from "./leagueStandings";
import { miscHandlers } from "./miscHandlers";
import { scoresTodayAllTeams } from "./scoresToday";
import { latestNews } from "./latestNews";

export const handlers = [
  ...miscHandlers,
  ...scoresTodayAllTeams,
  ...leagueStandings,
  ...upcomingGames,
  ...latestNews,
];
