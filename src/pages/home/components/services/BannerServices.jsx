import { Link } from "react-router-dom";
import Banner1 from "../../../../assets/img/04.jpg";
import Banner2 from "../../../../assets/img/05.jpg";

const serviceType = [
  {
    title: " فروش محصولات کشاورزی",
    desc: "تبریک! در صورتی که شما فروشنده هر نوعی از محصولات کشاورزی و غذایی هستید, می توانید اینجا محصولات خودتان را بدون واسطه و بدون هزنه بفروشید. این خدمت برای ما یک افتخار است",
    btnTitle: "همین الان محصولتو بزار برای فروش",
    class: "",
    img: Banner1,
    link: "/create-ads?type=1",
  },
  {
    title: "خرید محصولات کشاورزی",
    desc: "به محصولات کشاورزی عمده نیاز دارید؟ صدها کشاورز با محصولات مختلف آماده تامین نیازهای شما هستند. اگر شما خریدار محصولات کشاورزی هستید کافیست درخواست خود را ثبت کنید تا فروشندگان با شما تماس بگیرند.",
    btnTitle: "همین الان درخواست خرید ثبت کن",
    class: "lg:col-start-8",
    img: Banner2,
    link: "/create-ads?type=2",
  },
];

export default function BannerServices() {
  return (
    <div className="grid grid-cols-12 gap-5">
      {serviceType.map((service, index) => (
        <div
          className={`col-span-12 md:col-span-6 lg:col-span-5 relative ${service.class}`}
          key={index}
        >
          <img src={service.img} alt={service.img} className="md:rounded-md" />
          <div className="absolute inset-0 bg-gray-950/60 md:rounded-md flex justify-center">
            <div className="text-white flex flex-col justify-center items-center space-y-3 h-full lg:w-11/12 p-3">
              <h2 className="text-lg md:text-xl lg:text-2xl">
                {service.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-justify">
                {service.desc}
              </p>
              <Link to={service.link}>
                <button className="bg-green-600 px-5 py-2 rounded-full text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600">
                  {service.btnTitle}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
