import { TeamTableRow } from "../utils/games";
export default function StandingsList({
  data,
  heading,
}: {
  data: TeamTableRow[];
  heading: "Eastern" | "Western";
}) {
  return (
    <div className="bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow rounded-lg text-white border-[1px] border-faded xl:w-1/2 mb-5 xl:mb-0">
      <div className="flex justify-between items-center">
        <h3 className="section-heading-small p-3">{heading}</h3>
        <ul className="flex space-x-3 w-1/3 [&>li]:opacity-25 [&>li]:text-sm [&>li]:font-bold">
          <li>W</li>
          <li>L</li>
          <li>Win%</li>
        </ul>
      </div>
      <ul className="">
        {data.map((team) => (
          <li
            key={team.teamId}
            className="flex justify-between p-3 border-faded border-b-[1px] text-sm"
          >
            <span className="w-2/4 whitespace-nowrap">
              <img
                src={`https://cdn.nba.com/logos/nba/${team.teamId}/global/L/logo.svg`}
                alt=""
                className="w-7 h-7 inline-block mr-2"
              />
              {team.teamCity} {team.teamName}
            </span>
            <ul className="flex space-x-3 w-1/3">
              <li>{team.wins}</li>
              <li>{team.losses}</li>
              <li>{team.winPct}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
