export default function SkeletonStandings({
  blocksToShow = 15,
}: {
  blocksToShow?: number;
}) {
  const blocks = Array.from({ length: blocksToShow }, (_, i) => i);

  return (
    <>
      <div className="relative  animate-pulse rounded-lg bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow h-8 mb-2 w-2/4"></div>
      <div className="flex animate-pulse space-x-4 w-full">
        <div className="relative w-1/2  rounded-lg bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow">
          {blocks.map((_, idx) => (
            <div
              key={`s-${idx}`}
              className="flex flex-row items-start p-2 space-x-2"
            >
              <div className="mx-auto h-14 w-full rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md">
                &nbsp;
              </div>
            </div>
          ))}
        </div>
        <div className="relative w-1/2 rounded-lg bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-lg shadow">
          {blocks.map((_, idx) => (
            <div
              key={`s-${idx}`}
              className="flex flex-row items-start p-2 space-x-2"
            >
              <div className="mx-auto h-14 w-full rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md">
                &nbsp;
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
