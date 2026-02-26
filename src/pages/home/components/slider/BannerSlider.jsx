import BannerCard from "./BannerCard";
import banner1 from "../../../../assets/img/Products/1.webp";
import banner2 from "../../../../assets/img/Products/2.jpg";
import banner3 from "../../../../assets/img/Products/3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const slidersInfo = [
  {
    title: "امروز سبزیجات سالم و ارگانیک خود را آنلاین دریافت کنید.",
    img: banner1,
    color: "bg-yellow-100",
  },
  {
    title: "ما تازه ترین محصولات را برای شما ارسال می کینم.",
    img: banner2,
    color: "bg-blue-100",
  },
  {
    title: "ما مسیر مزرعه تا خانه شمارا هموار کردیم.",
    img: banner3,
    color: "bg-emerald-100",
  },
];

export default function BannerSlider() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="w-full h-full col-span-12 md:col-span-8"
    >
      {slidersInfo.map((item, index) => {
        return (
          <SwiperSlide key={index} className="">
            <BannerCard bannerInfo={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
