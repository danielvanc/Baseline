import type { TeamTableRow } from "~/utils/games";
import StandingsList from "./standings-list";

export default function LatestStandings({
  data: { east, west },
}: {
  data: {
    east: TeamTableRow[];
    west: TeamTableRow[];
  };
}) {
  return (
    <section>
      <h2 className="section-heading">Standings</h2>
      <div className="xl:flex justify-between xl:space-x-3">
        <StandingsList data={west} heading="Western" />
        <StandingsList data={east} heading="Eastern" />
      </div>
    </section>
  );
}
