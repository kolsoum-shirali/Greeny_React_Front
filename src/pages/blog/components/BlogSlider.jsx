import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import MainProductCard from "../../../components/common/MainProductCard";
import NotExistCard from "../../../components/common/NotExistCard";
import ProductLoadingSlider from "../../../components/common/ProductLoadingSlider";
import NavigationSlider from "../../../components/common/NavigationSlider";
import { fetchBlogs } from "../../../api/blogs.api";
const loadedSwiperProps = {
  navigation: {
    nextEl: "#next-btn-blog",
    prevEl: "#prev-btn-blog",
  },
  modules: [Navigation, Autoplay],
  className: "mt-5 lg:mt-10",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
};
export default function BlogSlider() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchBlogs();

        if (isMounted) {
          setBlogs(data);
        }
      } catch (e) {
        console.error("Error fetching blogs! ", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadBlogs();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <h1 className="text-center text-2xl lg:text-4xl">مقالات ما را بخوانید</h1>
      {error && (
        <div className="mt-10">
          <NotExistCard caption={error} bgColor={"bg-red-200"} />
        </div>
      )}

      {loading && !error && <ProductLoadingSlider />}
      {!loading && !error && blogs.length > 0 && (
        <div className="relative">
          <Swiper {...loadedSwiperProps}>
            {blogs.map((blog, index) => (
              <SwiperSlide key={blog.id || index}>
                <MainProductCard product={blog} showHeading={true}>
                  <div className="flex">
                    <Link to={`/blog/${blog.id}`} className="mr-auto">
                      <p className="text-green-800 font-semibold hover:bg-green-800 hover:text-white transition-colors duration-100 delay-75 p-3  rounded-md">
                        بیشتر بخوانید <i className=" icon-left-big"></i>
                      </p>
                    </Link>
                  </div>
                </MainProductCard>
              </SwiperSlide>
            ))}
          </Swiper>
          <NavigationSlider navigationId="blog" />
          <div className="flex justify-center">
            <Link
              to="/blog"
              className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 mt-5"
            >
              مشاهده تمام مطالب بلاگ <i className="icon-eye"></i>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
