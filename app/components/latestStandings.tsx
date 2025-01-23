import type { StandingsData } from "~/utils/games";
import StandingsList from "./standings-list";

export default function LatestStandings({
  data: { east, west },
}: {
  data: StandingsData;
}) {
  return (
    <section>
      <h2 className="section-heading">Standings</h2>
      <div className="md:flex justify-between md:space-x-5 lg:space-x-3">
        <StandingsList data={west} heading="Western" />
        <StandingsList data={east} heading="Eastern" />
      </div>
    </section>
  );
}
