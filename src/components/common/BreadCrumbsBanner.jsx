import Banner from "../../assets/img/single-banner.jpg";
export default function BreadCrumbsBanner({options,caption}) {
  return (
    <div className="relative h-60 flex justify-center">
      <img src={Banner} alt="" className="w-full h-auto object-cover" />
      <div className="absolute z-1 inset-0 bg-green-500/50 flex flex-col text-white space-y-4 justify-center items-center">
        <h1 className="font-semibold text-3xl">{caption}</h1>
        <ul className="flex">
          {options.map((item, index) => (
            <li
              key={index}
              className={`text-lg ${item.link ? "" : "text-black/50"}`}
            >
              {item.title}
              {options.length - 1 === index ? (
                ""
              ) : (
                <i className="icon-left-open text-sm"></i>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
