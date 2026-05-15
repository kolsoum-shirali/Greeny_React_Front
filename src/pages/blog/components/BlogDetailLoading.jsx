export default function BlogDetailLoading() {
  return (
    <div class="flex-1 space-y-6 py-1">
          <div class="h-52 lg:h-96 rounded bg-gray-200"></div>
          <div class="space-y-3">
            {[...Array(12)].map((_, index) => (
              <div class="h-4 rounded bg-gray-200" key={index}></div>
            ))}
          </div>    
        </div>
  );
}
