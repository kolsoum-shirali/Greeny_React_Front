export default function ProductLoading() {
  return (
    <div class="rounded-md border p-4">
      <div class="flex animate-pulse space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-64 rounded bg-gray-200"></div>
          <div class="space-y-3">
            <div class="h-10 rounded bg-gray-200"></div>
            <div class="h-10 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
