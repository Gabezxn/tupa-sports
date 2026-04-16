export function SkeletonGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="card-surface animate-pulse p-4">
          <div className="mb-4 h-40 rounded-xl bg-white/10" />
          <div className="mb-2 h-4 w-3/4 rounded bg-white/10" />
          <div className="h-4 w-1/2 rounded bg-white/10" />
        </div>
      ))}
    </div>
  );
}
