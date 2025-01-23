import { getCDNLogo, getGamesHeading, type TodaysGames } from "~/utils/games";
import GameDateInfo from "./gameDateInfo";

export default function LatestGames({ data }: { data: TodaysGames }) {
  const { gameDate, games } = data;
  const sectionHeading = getGamesHeading(gameDate);

  return (
    <section>
      <h2 className="section-heading">{sectionHeading}</h2>
      <ul className="bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow rounded-lg text-white border-faded border-[1px]">
        {games.map((game) => (
          <li
            key={game.gameId}
            className="border-faded border-b-[1px] relative text-sm"
          >
            <div className="flex flex-col sm:flex-row items-center p-2 md:p-2">
              <div className="sm:w-2/5 sm:text-right flex flex-row-reverse sm:flex-row items-center justify-end [&>svg]:min-w-[45px] [&>svg]:min-h-[45px]">
                <span className="sm:max-w-32 xl:max-w-none xl:whitespace-nowrap">
                  {game.awayTeam.teamCity} {game.awayTeam.teamName}
                </span>
                <span className="mr-3 sm:ml-3 sm:mr-0 absolute sm:relative left-10 sm:left-auto top-1/2 transform sm:transform-none -translate-y-1/2">
                  <img
                    src={getCDNLogo(game.awayTeam.teamId)}
                    alt=""
                    className="w-10 h-10 inline-block mr-2"
                  />
                </span>
              </div>
              <div className="mx-3 sm:w-1/5 text-center">
                <GameDateInfo gamesDate={gameDate} game={game} />
              </div>
              <div className="sm:w-2/5 text-left flex items-center [&>svg]:min-w-[45px] [&>svg]:min-h-[45px]">
                <span className="absolute sm:relative right-10 sm:right-auto transform -translate-y-1/2 sm:transform-none">
                  <img
                    src={getCDNLogo(game.homeTeam.teamId)}
                    alt=""
                    className="w-10 h-10 inline-block mr-2"
                  />
                </span>
                <span className="ml-3 sm:max-w-32 xl:max-w-none xl:whitespace-nowrap">
                  {game.homeTeam.teamCity} {game.homeTeam.teamName}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
