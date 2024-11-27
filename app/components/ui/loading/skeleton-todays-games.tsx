export default function SkeletonTodaysGames({
  blocksToShow = 5,
}: {
  blocksToShow?: number;
}) {
  const blocks = Array.from({ length: blocksToShow }, (_, i) => i);

  return (
    <>
      <div className="relative  animate-pulse rounded-lg bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow h-8 mb-2 w-2/4"></div>
      <div className="relative flex animate-pulse flex-col rounded-lg bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow">
        {blocks.map((_, idx) => (
          <div
            key={`s-${idx}`}
            className="flex flex-row items-start p-2 space-x-2"
          >
            <div className="mx-auto h-24 w-2/5 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md">
              &nbsp;
            </div>
            <div className="mx-auto h-24 w-1/5 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md">
              &nbsp;
            </div>
            <div className="mx-auto h-24 w-2/5 rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md">
              &nbsp;
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
