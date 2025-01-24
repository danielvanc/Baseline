export default function LatestStandings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="section-heading">Standings</h2>
      <div className="md:flex justify-between md:space-x-5 lg:space-x-3">
        {children}
      </div>
    </section>
  );
}
