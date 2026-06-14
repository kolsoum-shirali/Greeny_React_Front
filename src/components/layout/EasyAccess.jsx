import { Link } from "react-router-dom";
const token = localStorage.getItem("token");
const options = [
  { title: "اکانت من", link: token ? "/profile" : "/register" },
  { title: "درباره ما", link: "/about-us" },
  { title: "تماس با ما", link: "/contact-us" },
];

export default function EasyAccess() {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3">
      <h3 className="text-lg lg:text-xl mb-2 md:mb-5">دسترسی سریع</h3>
      <div className="space-y-1">
        {options.map((option, index) => {
          return (
            <div key={index}>
              <Link
                to={option.link}
                className="text-sm lg:text-base text-gray-500"
              >
                {option.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
