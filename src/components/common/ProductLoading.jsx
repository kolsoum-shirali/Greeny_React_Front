export default function ProductLoading() {
  return (
    <div className="rounded-md border p-4">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-64 rounded bg-gray-200"></div>
          <div className="space-y-3">
            <div className="h-10 rounded bg-gray-200"></div>
            <div className="h-10 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
