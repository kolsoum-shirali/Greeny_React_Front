const contactWays = [
  {
    title: "دفتر اصلی",
    desc: "ایران - اصفهان - خیابان ظفر",
    icon: "icon-location-outline",
  },
  { title: "شماره تماس", desc: "09130000000", icon: "icon-phone" },
  { title: "ایمیل", desc: "support@greeny.com", icon: "icon-mail" },
];
export default function ContactWays() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5 md:gap-9">
        {contactWays.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-md border border-gray-400/20 space-y-3 shadow-md px-5 py-7 lg:py-14 col-span-3  md:col-span-1 hover:bg-green-600 transition-colors duration-75 group"
            >
              <i
                className={`${item.icon} text-3xl text-green-800 group-hover:text-white transition-colors duration-75`}
              ></i>
              <p className="text-lg font-semibold group-hover:text-white transition-colors duration-75">
                {item.title}
              </p>
              <p className="text-base text-gray-500 group-hover:text-white transition-colors duration-75">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
