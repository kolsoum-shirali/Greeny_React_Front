export default function NavigationSlider({ navigationId }) {
  return (
    <div className="hidden xl:block">
      <i
        id={`prev-btn-${navigationId}`}
        className="icon-right-open text-4xl absolute -right-16 top-1/2 z-1 text-green-600 cursor-pointer"
      ></i>
      <i
        id={`next-btn-${navigationId}`}
        className="icon-left-open text-4xl absolute -left-16 top-1/2 z-1 text-green-600 cursor-pointer"
      ></i>
    </div>
  );
}
