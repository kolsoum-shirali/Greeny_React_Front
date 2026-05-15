import Banner from "../../assets/img/single-banner.jpg";
import { Link } from "react-router-dom";

export default function BreadCrumbsBanner({ options, caption }) {
  return (
    <div className="relative flex h-60 justify-center overflow-hidden">
      <img src={Banner} alt={Banner} className="h-full w-full object-cover" />
      <div className="absolute inset-0 z-1 flex items-center justify-center bg-green-500/50 text-center text-white">
        <div className="w-11/12 px-4">
          <h1 className="mb-4 text-lg font-semibold md:text-3xl break-words">
            {caption}
          </h1>
          <ul className="flex flex-wrap justify-center gap-2">
            {options.map((item, index) => (
              <li
                key={index}
                className={`max-w-full text-sm md:text-lg break-words ${
                  !item.link && "text-black"
                }`}
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    className="flex items-center gap-1 break-words"
                  >
                    <span className="break-words">{item.title}</span>
                    {options.length - 1 !== index && (
                      <i className="icon-left-open text-sm"></i>
                    )}
                  </Link>
                ) : (
                  <span className="break-words">{item.title}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
