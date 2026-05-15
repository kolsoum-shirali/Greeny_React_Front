export default function CommentLoading() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <div className="h-16 rounded-full aspect-square bg-gray-200"></div>
        <div className="w-full">
          <div className="space-y-4 md:w-3/12">
            {[...Array(2)].map((_, inx) => (
              <div kye={inx} class="h-4 rounded bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
      {[...Array(2)].map((_, index) => (
        <div class="h-4 rounded bg-gray-200" key={index}></div>
      ))}
    </div>
  );
}
