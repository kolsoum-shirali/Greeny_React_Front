import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import SingleProduct from "./SingleProduct";
import NotExistCard from "../../../../components/common/NotExistCard";
import ProductLoadingSlider from "../../../../components/common/ProductLoadingSlider";
import NavigationSlider from "../../../../components/common/NavigationSlider";
import { fetchProducts } from "../../../../api/products.api";
const loadedSwiperProps = {
  navigation: {
    nextEl: "#next-btn-product",
    prevEl: "#prev-btn-product",
  },
  pagination: {
    type: "bullets",
    clickable: true,
  },
  modules: [Navigation, Autoplay, Pagination],
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
    1440: { slidesPerView: 5 },
  },
};

export default function NewProductsSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();

        if (isMounted) {
          setProducts(data);
        }
      } catch (e) {
        console.error("Error fetching products:", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl lg:text-4xl">محصولات تازه روز</h1>

      {error && (
        <div className="mt-10">
          <NotExistCard caption={error} bgColor={"bg-red-200"} />
        </div>
      )}

      {loading && !error && <ProductLoadingSlider />}

      {!loading && !error && products.length > 0 && (
        <div className="relative">
          <Swiper {...loadedSwiperProps}>
            {products.map((product, index) => (
              <SwiperSlide key={product.pCode || index}>
                <SingleProduct product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
          <NavigationSlider navigationId="product" />
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="mt-10">
          <NotExistCard
            caption={"هیچ محصولی موجود نیست!!! 🌱 🌿"}
            bgColor={"bg-yellow-100"}
          />
        </div>
      )}
    </div>
  );
}
