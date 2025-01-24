export default function SkeletonNews({
  blocksToShow = 10,
}: {
  blocksToShow?: number;
}) {
  const blocks = Array.from({ length: blocksToShow }, (_, i) => i);

  return (
    <>
      <div className="relative backdrop-filter backdrop-blur-lg shadow-md bg-gray-100 h-8 mb-4 w-2/4 rounded-lg bg-opacity-10"></div>
      <div className="space-x-4 w-full">
        <div className="relative  rounded-lg">
          {blocks.map((_, idx) => (
            <div
              key={`s-${idx}`}
              className="flex flex-row items-start mb-4 space-x-2  animate-pulse bg-opacity-10"
            >
              <div className="mx-auto h-8 w-full rounded-lg bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md bg-gray-100">
                &nbsp;
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
