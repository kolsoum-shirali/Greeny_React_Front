import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function DesktopMenubar() {
  const { pathname } = useLocation();

  // Use a boolean or null for better type safety, though string is fine if you check truthiness
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null); // Update state to re-render
    navigate("/");
    alert("با موفقیت از حساب کاربری خود خارج شدید");
  };

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
    { title: "فروشگاه", url: "/products", subMenu: [] },
    { title: "تماس با ما", url: "/contact-us", subMenu: [] },
    { title: "ارتباط با ما", url: "/about-us", subMenu: [] },
    {
      title: "احراز هویت",
      url: "",
      subMenu: [
        {
          title: !token ? "لاگین" : "خروج از حساب کاربری",
          url: !token ? "/login" : pathname,
          isLogout: token,
        },
        {
          title: !token ? "ثبت نام" : "ویرایش حساب کاربری",
          url: !token ? "/register" : "/profile",
        },
      ],
    },
  ];

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
                      // If this item has the logout flag, render an onClick handler
                      if (item.isLogout) {
                        return (
                          <div
                            key={inx}
                            className="text-sm cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              logout();
                            }}
                          >
                            <h6 className="text-gray-500 hover:bg-slate-100 p-2 hover:text-red-600 transition-colors">
                              {item.title}
                            </h6>
                          </div>
                        );
                      }

                      // Otherwise, render it as a normal Link
                      return (
                        <Link key={inx} to={item.url} className="text-sm">
                          <h6 className="text-gray-500 hover:bg-slate-100 p-2 hover:text-green-800 transition-colors cursor-pointer">
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
