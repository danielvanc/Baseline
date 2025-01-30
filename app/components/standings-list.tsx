import { getCDNLogo, highlightRow, TeamTableRow } from "../utils/games";

export default function StandingsList({
  data,
  heading,
  theme,
}: {
  data: TeamTableRow[];
  heading: "Eastern" | "Western";
  theme: string;
}) {
  return (
    <div className="bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow rounded-lg text-white border-[1px] border-faded md:w-1/2 mb-5 xl:mb-0">
      <div className="flex justify-between items-center">
        <h3 className="section-heading-small p-3">{heading}</h3>
        <ul
          data-testid="headings"
          className="flex justify-end 2xl:justify-evenly mr-3 space-x-3 lg:space-x-4 2xl:space-x-3 w-1/3 md:w-1/5 xl:w-1/6 2xl:w-1/3 [&>li]:opacity-25 [&>li]:text-sm [&>li]:font-bold"
        >
          <li>W</li>
          <li>L</li>
          <li className="hidden 2xl:block">W%</li>
        </ul>
      </div>
      <ul data-testid="team-list">
        {data.map((team) => (
          <li
            key={team.teamId}
            className={`flex items-center justify-between p-3 border-faded border-b-[1px] text-sm ${highlightRow(
              theme,
              team.teamId,
              0
            )}`}
          >
            <span className="flex items-center space-x-1">
              <img
                src={getCDNLogo(team.teamId)}
                alt=""
                className="w-7 h-7 inline-block mr-2"
              />
              <span className="lg:hidden xl:block">{team.teamCity}</span>{" "}
              <span>{team.teamName}</span>
            </span>
            <ul className="flex space-x-3 2xl:w-1/3 justify-end 2xl:justify-evenly">
              <li>{team.wins}</li>
              <li>{team.losses}</li>
              <li className="hidden 2xl:block">{team.winPct}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
