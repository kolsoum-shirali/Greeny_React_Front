import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import NavigationSlider from "../../../../components/common/NavigationSlider";
import ProductLoadingSlider from "../../../../components/common/ProductLoadingSlider";

import {
  Navigation,
  Autoplay,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";

import SingleComment from "./SingleComment";
import { fetchComments } from "../../../../api/comments.api";

const loadedSwiperProps = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  navigation: {
    nextEl: "#next-btn-customer",
    prevEl: "#prev-btn-customer",
  },
  pagination: {
    type: "bullets",
    clickable: true,
  },
  modules: [Navigation, Autoplay, EffectCoverflow, Pagination],
  className: "mt-5 lg:mt-10",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
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
  },
};

export default function CommentSlider() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadComments = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchComments();

        if (isMounted) {
          setComments(data);
        }
      } catch (e) {
        console.error("Error fetching comments! ", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadComments();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl lg:text-4xl">نظرات مشتری ها</h1>
      <div className="relative">
        {loading && !error && <ProductLoadingSlider />}

        {!loading && !error && comments.length > 0 && (
          <div className="relative">
            <Swiper {...loadedSwiperProps}>
              {comments.map((comment, index) => (
                <SwiperSlide key={index}>
                  <SingleComment comment={comment} />
                </SwiperSlide>
              ))}
            </Swiper>
            <NavigationSlider navigationId="customer" />
          </div>
        )}
      </div>
    </div>
  );
}
