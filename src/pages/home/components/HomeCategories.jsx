import { Link } from "react-router-dom";
const categories = [
  { title: "محصولات کشاورزی", link: "/create-ads?type=1" },
  { title: "کار و خدمات کشاورزی", link: "/create-ads?type=2" },
  { title: "تجهیزات و ادوات کشاورزی", link: "/create-ads?type=3" },
  { title: "ملک و زمین کشاورزی", link: "/create-ads?type=4" },
];

export default function HomeCategories() {
  return (
    <div>
      <h3 className="text-white bg-green-600 text-center p-2 md:text-base lg:text-lg rounded-t-md">
        دسته بندی
      </h3>
      <ul className="md:text-sm lg:text-base px-5 shadow ">
        {categories.map((category, index) => (
          <li
            key={index}
            className="hover:bg-slate-100 hover:text-green-800 transition-colors p-3 border-b border-b-gray-400/20"
          >
            <Link to={category.link}>{category.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
