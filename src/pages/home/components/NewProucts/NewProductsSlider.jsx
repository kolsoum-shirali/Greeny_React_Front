import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import SingleProduct from "./SingleProduct";
import product1 from "../../../../assets/img/05.jpg";
import product2 from "../../../../assets/img/01.png";
import product3 from "../../../../assets/img/04.jpg";
import product4 from "../../../../assets/img/03.png";

const products = [
  { img: product1 },
  { img: product2 },
  { img: product3 },
  { img: product4 },
  { img: product1 },
  { img: product2 },
  { img: product3 },
  { img: product4 },
];

export default function NewProductsSlider() {
  return (
    <div>
      <h1 className="text-center text-4xl">محصولات تازه روز</h1>
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: "#next-btn",
            prevEl: "#prev-btn",
          }}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          modules={[Navigation, Autoplay, Pagination]} 
          className="mt-10"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <SingleProduct product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden xl:block">
          <i
            id="prev-btn"
            className="icon-right-open text-4xl absolute -right-16 top-1/2 z-1 text-green-600 cursor-pointer"
          ></i>
          <i
            id="next-btn"
            className="icon-left-open text-4xl absolute -left-16 top-1/2 z-1 text-green-600 cursor-pointer"
          ></i>
        </div>
      </div>
    </div>
  );
}
