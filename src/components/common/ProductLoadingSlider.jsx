import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import ProductLoading from "./ProductLoading";

const loadingSwiperProps = {
  modules: [Autoplay],
  className: "mt-5 lg:mt-10",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
};

export default function ProductLoadingSlider() {
  return (
    <Swiper {...loadingSwiperProps}>
      {[...Array(6)].map((_, index) => (
        <SwiperSlide key={index}>
          <ProductLoading />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
