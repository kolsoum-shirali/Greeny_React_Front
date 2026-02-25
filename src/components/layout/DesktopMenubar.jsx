const Menus = [
  { title: "خانه", url: "/", subMenu: [] },
  {
    title: "دسته بندی ها",
    url: "",
    subMenu: [
      { title: "خرید محصولات کشاورزی" },
      { title: "فروش محصولات کشاورزی" },
      { title: "کار و خدمات کشاورزی" },
      { title: "تجهیزات و ادوات کشاورزی" },
      { title: "ملک و زمین کشاورزی" },
    ],
  },
  { title: "بلاگ ها", url: "", subMenu: [] },
  { title: "راهنما", url: "", subMenu: [] },
  { title: "ارتباط با ما", url: "", subMenu: [] },
  {
    title: "احراز هویت",
    url: "",
    subMenu: [
      { title: "لاگین", url: "" },
      { title: "ثبت نام", url: "" },
      { title: "ویرایش حساب کاربری", url: "" },
    ],
  },
];

export default function DesktopMenubar() {
  return (
    <div className="py-4 px-1 border-t border-b-gray-400/20 hidden lg:block">
      <ul className="flex gap-x-8">
        {Menus.map((menu, index) => {
          return (
            <li
              key={index}
              className="relative hover:text-green-800 transition-colors bg cursor-pointer group"
            >
              {menu.title}
              {menu.subMenu.length > 0 && <i className="icon-down-open"></i>}
              {menu.subMenu.length > 0 && (
                <div className="absolute right-0 w-56 bg-white opacity-0  border border-gray-400/20 shadow-md z-10 p-5 invisible transition-all transform translate-y-16 group-hover:translate-y-0 duration-300 ease-in-out delay-150 group-hover:opacity-100 group-hover:visible">
                  <ul>
                    {menu.subMenu.map((item, inx) => {
                      return (
                        <li
                          key={inx}
                          className="text-sm text-gray-500 hover:bg-slate-100 hover:text-green-800 transition-colors cursor-pointer p-1"
                        >
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
