import Logo from "../../assets/img/logo.png";
const socials = [
  { icon: "icon-whatsapp" },
  { icon: "icon-telegram" },
  { icon: "icon-instagram" },
  { icon: "icon-linkedin" },
];
export default function FooteDesc() {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-6 space-y-8 max-sm:px-5">
      <img src={Logo} className="w-44" />
      <p className="text-sm lg:text-base">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
      <ul className="flex gap-2">
        {socials.map((social, index) => {
          return (
            <li key={index}>
              <i
                className={`${social.icon} text-lg lg:text-xl bg-green-600 rounded-full aspect-square p-2 text-white cursor-pointer`}
              ></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
