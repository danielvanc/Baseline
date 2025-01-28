import type { Route } from "./+types/game";
import { getCDNLogo, getGameStats, type GameStats } from "~/utils/games";
import { format } from "date-fns";
import { Link } from "react-router";

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
      <div className="max-w-[450px] mx-auto bg-white rounded-lg p-4 lg:-bottom-16 mb-5 lg:mb-0 relative text-gray-700 shadow-2xl">
        <p className="text-center opacity-25">
          {format(gameEt, "dd / MM / yyyy - hh:mm")} (ET)
        </p>
        <div className="md:flex md:space-x-5 justify-between py-4">
          <div className="flex justify-between space-x-8 items-center md:w-1/2">
            <span className="text-lg md:text-2xl text-center md:text-right md:max-w-[160px] w-full">
              <span className="md:max-w-[100px] block md:float-right">
                {awayTeamName}
              </span>
            </span>
          </div>
          <div className="flex justify-center text-center space-x-5">
            <span className="text-lg">{awayTeam.score}</span>
            <span className="text-lg">{homeTeam.score}</span>
          </div>
          <div className="flex flex-row-reverse items-center md:w-1/2 justify-between text-center">
            <span className="md:ml-8 text-lg md:text-2xl md:max-w-[160px] w-full">
              {homeTeamName}
            </span>
          </div>
        </div>
        <p className="text-center opacity-25">{gameLabel}</p>
      </div>

      <div className="md:flex justify-between md:space-x-16 border-white border-[1px] rounded-md p-5 border-opacity-25">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="flex items-center mb-5 space-x-3">
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
          <ul className="flex mb-8 md:mb-16 space-x-3 md:space-x-7 mt-2">
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

          <div className="mb-5 md:text-right">
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

        <div className="md:w-1/2 border-t-[1px] border-white border-opacity-25 md:border-t-0 pt-8 md:pt-0">
          <div className="flex md:flex-row-reverse items-center mb-5">
            <img
              src={getCDNLogo(homeTeam.teamId)}
              alt=""
              className="w-20 h-20 inline-block md:mr-2 md:ml-5"
            />
            <ul className="text-right">
              <li>Wins: {homeTeam.wins}</li>
              <li>Losses: {homeTeam.losses}</li>
            </ul>
          </div>
          <h3 className="section-heading-small-upper">Score per period</h3>
          <ul className="flex  mb-8 md:mb-16 space-x-3 md:space-x-7 mt-2">
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

          <div className="md:text-right">
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

      <p className="text-center mt-5">
        <Link to="/">Home</Link>
      </p>
    </main>
  );
}
