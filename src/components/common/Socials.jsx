const socials = [
  { icon: "icon-whatsapp" },
  { icon: "icon-telegram" },
  { icon: "icon-instagram" },
  { icon: "icon-linkedin" },
];

export default function Socials() {
  return (
    <ul className="flex gap-2">
      {socials.map((social, index) => {
        return (
          <li key={index}>
            <i
              className={`${social.icon} text-lg lg:text-xl bg-green-600  text-white cursor-pointer p-1`}
            ></i>
          </li>
        );
      })}
    </ul>
  );
}
