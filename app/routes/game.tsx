import type { Route } from "./+types/game";
import { getCDNLogo, getGameStats, type GameStats } from "~/utils/games";
import { format } from "date-fns";

export async function loader({ params }: Route.LoaderArgs) {
  const { gameId, gameDate } = params;

  const gameStats = await getGameStats(gameDate, gameId);

  return { gameStats };
}

export default function Game({
  loaderData: { gameStats },
}: Route.ComponentProps) {
  const { awayTeam, homeTeam, gameLeaders, teamLeaders, gameEt, gameLabel } =
    gameStats[0] as GameStats;

  const awayTeamName = `${awayTeam.teamCity} ${awayTeam.teamName}`;
  const homeTeamName = `${homeTeam.teamCity} ${homeTeam.teamName}`;

  return (
    <main className="max-w-[950px] mx-auto text-white pb-40">
      <div className="max-w-[450px] mx-auto bg-white rounded-lg p-4 -bottom-16 relative text-gray-700 shadow-2xl">
        <p className="text-center opacity-25">
          {format(gameEt, "dd / MM / yyyy - hh:mm")} (ET)
        </p>
        <div className="flex space-x-5 justify-between py-4">
          <div className="flex  justify-between space-x-8 items-center w-1/2">
            <span className="text-2xl text-right max-w-[160px] w-full">
              <span className="max-w-[100px] block float-right">
                {awayTeamName}
              </span>
            </span>
            <span className="text-lg">{awayTeam.score}</span>
          </div>
          <div className="flex flex-row-reverse items-center w-1/2 justify-between">
            <span className="ml-8 text-2xl max-w-[160px] w-full">
              {homeTeamName}
            </span>
            <span className="text-lg">{homeTeam.score}</span>
          </div>
        </div>
        <p className="text-center opacity-25">{gameLabel}</p>
      </div>

      <div className="flex justify-between space-x-16 border-white border-[1px] rounded-md p-5 border-opacity-25">
        <div className="w-1/2">
          <div className="flex items-center mb-5">
            <img
              src={getCDNLogo(awayTeam.teamId)}
              alt=""
              className="w-20 h-20 inline-block md:mr-2"
            />
            <ul>
              <li>Wins: {awayTeam.wins}</li>
              <li>Losses: {awayTeam.losses}</li>
            </ul>
          </div>
          <h3 className="section-heading-small-upper">Score per period</h3>
          <ul className="flex mb-16 space-x-7 mt-2">
            {awayTeam.periods.map((period, index) => (
              <li
                key={`${awayTeam.teamId}-${awayTeam.score}-${index}`}
                className="bg-white bg-opacity-20 p-3 pb-5 relative"
              >
                <span className="absolute left-1 bottom-1 opacity-25">
                  {index === 4 ? "OT" : index + 1}
                </span>
                <span className="text-xl font-bold">{period.score}</span>
              </li>
            ))}
          </ul>

          <div className="mb-5 text-right">
            <h3 className="section-heading-small-upper">Game leader</h3>
            <ul className="[&>li]:opacity-60">
              <li>
                {gameLeaders.awayLeaders.name} (
                {gameLeaders.awayLeaders.position})
              </li>
              <li>Points: {gameLeaders.awayLeaders.points}</li>
              <li>Assists: {gameLeaders.awayLeaders.assists}</li>
              <li>Rebounds: {gameLeaders.awayLeaders.rebounds}</li>
            </ul>
          </div>

          <div>
            <h3 className="section-heading-small-upper">Team leader</h3>
            <ul className="[&>li]:opacity-60">
              <li>
                {teamLeaders.awayLeaders.name} (
                {teamLeaders.awayLeaders.position})
              </li>
              <li>Points: {teamLeaders.awayLeaders.points}</li>
              <li>Assists: {teamLeaders.awayLeaders.assists}</li>
              <li>Rebounds: {teamLeaders.awayLeaders.rebounds}</li>
            </ul>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex flex-row-reverse items-center mb-5">
            <img
              src={getCDNLogo(homeTeam.teamId)}
              alt=""
              className="w-20 h-20 inline-block md:mr-2"
            />
            <ul className="text-right">
              <li>Wins: {homeTeam.wins}</li>
              <li>Losses: {homeTeam.losses}</li>
            </ul>
          </div>
          <h3 className="section-heading-small-upper">Score per period</h3>
          <ul className="flex mb-16 space-x-7 mt-2">
            {homeTeam.periods.map((period, index) => (
              <li
                key={`${homeTeam.teamId}-${homeTeam.score}-${index}`}
                className="bg-white bg-opacity-20 p-3 pb-5 relative"
              >
                <span className="absolute left-1 bottom-1 opacity-25">
                  {index === 4 ? "OT" : index + 1}
                </span>
                <span className="text-xl font-bold">{period.score}</span>
              </li>
            ))}
          </ul>

          <div className="mb-5">
            <h3 className="section-heading-small-upper">Game leader</h3>
            <ul className="[&>li]:opacity-60">
              <li>
                {gameLeaders.homeLeaders.name} (
                {gameLeaders.homeLeaders.position})
              </li>
              <li>Points: {gameLeaders.homeLeaders.points}</li>
              <li>Assists: {gameLeaders.homeLeaders.assists}</li>
              <li>Rebounds: {gameLeaders.homeLeaders.rebounds}</li>
            </ul>
          </div>

          <div className="text-right">
            <h3 className="section-heading-small-upper">Team leader</h3>
            <ul className="[&>li]:opacity-60">
              <li>
                {teamLeaders.homeLeaders.name} (
                {teamLeaders.homeLeaders.position})
              </li>
              <li>Points: {teamLeaders.homeLeaders.points}</li>
              <li>Assists: {teamLeaders.homeLeaders.assists}</li>
              <li>Rebounds: {teamLeaders.homeLeaders.rebounds}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
