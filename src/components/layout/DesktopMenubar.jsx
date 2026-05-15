import { Link } from "react-router-dom";

const Menus = [
  { title: "خانه", url: "/", subMenu: [] },
  {
    title: "دسته بندی ها",
    url: "",
    subMenu: [
      { title: "خرید محصولات کشاورزی", url: "/" },
      { title: "فروش محصولات کشاورزی", url: "/" },
      { title: "کار و خدمات کشاورزی", url: "/" },
      { title: "تجهیزات و ادوات کشاورزی", url: "/" },
      { title: "ملک و زمین کشاورزی", url: "/" },
    ],
  },
  { title: "بلاگ ها", url: "/blog", subMenu: [] },
  { title: "تماس با ما", url: "/contact-us", subMenu: [] },
  { title: "ارتباط با ما", url: "/about-us", subMenu: [] },
  {
    title: "احراز هویت",
    url: "",
    subMenu: [
      { title: "لاگین", url: "/login" },
      { title: "ثبت نام", url: "/register" },
      { title: "ویرایش حساب کاربری", url: "/profile" }, // assign a URL if needed
    ],
  },
];

export default function DesktopMenubar() {
  return (
    <div className="py-4 px-5 border-b border-gray-400/20 hidden lg:block">
      <ul className="flex gap-x-8">
        {Menus.map((menu, index) => {
          return (
            <li
              key={index}
              className="relative hover:text-green-800 transition-colors bg cursor-pointer group"
            >
              {menu.url ? (
                <Link to={menu.url}>{menu.title}</Link>
              ) : (
                <span>{menu.title}</span>
              )}
              {menu.subMenu.length > 0 && <i className="icon-down-open"></i>}
              {menu.subMenu.length > 0 && (
                <div className="absolute right-0 w-56 bg-white opacity-0 border border-gray-400/20 shadow-md z-10 p-5 invisible transition-all transform translate-y-16 group-hover:translate-y-0 duration-300 ease-in-out delay-150 group-hover:opacity-100 group-hover:visible">
                  <div>
                    {menu.subMenu.map((item, inx) => {
                      return (
                        <Link key={inx} to={item.url} className="text-sm">
                          <h6 className="text-gray-500 hover:bg-slate-100 p-2 hover:text-green-800 transition-colors cursor-pointer ">
                            {item.title}
                          </h6>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
