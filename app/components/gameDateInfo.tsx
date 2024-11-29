import { getRelativeLabel, type GamesType } from "~/utils/games";
import { format } from "date-fns";

const RELATIVE_STATUS = {
  Today: "Today",
  Yesterday: "Yesterday",
  Previous: "Previous",
};

function ShowScore({ game }: { game: GamesType }) {
  return (
    <span className="block opacity-50">
      {game.awayTeam.score} - {game.homeTeam.score}
    </span>
  );
}

export default function GameDateInfo({
  gamesDate,
  game,
}: {
  gamesDate: string;
  game: GamesType;
}) {
  const relativeGameTime = getRelativeLabel(gamesDate);
  // TODO: Update this to the known gameSTatusText when in progress
  const gameInProgress = game.gameStatusText && game.gameStatusText !== "Final";

  if (relativeGameTime === RELATIVE_STATUS.Today && !game.gameStatusText)
    return (
      <div className="w-full text-sm">
        <span>{format(game.gameEt, "h:mm a")} (ET)</span>
      </div>
    );

  if (relativeGameTime === RELATIVE_STATUS.Today && gameInProgress)
    return (
      <div>
        <span className="block opacity-35">{format(game.gameEt, "MM/dd")}</span>
        <ShowScore game={game} />
      </div>
    );

  if (
    relativeGameTime === RELATIVE_STATUS.Today &&
    game.gameStatusText === "Final"
  )
    return <ShowScore game={game} />;

  return (
    <div>
      {relativeGameTime === "Previous" ? (
        <span className="opacity-35 absolute right-1 transform rotate-90 origin-center">
          {format(game.gameEt, "MM/dd")}
        </span>
      ) : null}
      <ShowScore game={game} />
    </div>
  );
}
