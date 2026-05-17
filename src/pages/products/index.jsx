import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import Pagination from "../../components/common/Pagination";
import PopularItems from "../../components/common/PopularItems";
import FollowUs from "../../components/common/FollowUs";
import AddToCardBtn from "../../components/common/AddToCardBtn";
import MainProductCard from "../../components/common/MainProductCard";
import { fetchProducts } from "../../api/products.api";
import { Link } from "react-router-dom";
import ProductLoading from "../../components/common/ProductLoading";

const options = [
  { title: "خانه", link: "/" },
  { title: "فروشگاه", link: "" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const { addToCart, cart } = useCart();

  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        console.error("Error fetching products! ", e.message);
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
    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  return (
    <div>
      <BreadCrumbsBanner options={options} caption="فروشگاه" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-5">
              {loading &&
                !error &&
                [...Array(3)].map((_, inx) => (
                  <div key={inx}>
                    <ProductLoading />
                  </div>
                ))}

              {!loading && !error && products.length > 0 && (
                <div>
                  <div className="space-y-7">
                    {currentItems.map((product, index) => {
                      const cartItem = cart.find(
                        (item) => item.id === product.id,
                      );
                      const count = cartItem?.numberOfProduct ?? 0;
                      return (
                        <MainProductCard
                          product={product}
                          showHeading={false}
                          key={index}
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                              {count <= 0 ? (
                                <button
                                  className="bg-gray-400 p-4 text-sm text-white w-full rounded-sm hover:bg-green-600 transition-colors delay-75"
                                  onClick={() => addToCart(product)}
                                >
                                  افزودن <i className="icon-shopping-bag"></i>
                                </button>
                              ) : (
                                <div className="pt-1">
                                  <AddToCardBtn product={product} />
                                </div>
                              )}
                            </div>
                            <Link
                              to={`/products/${product.id}`}
                              className="col-span-2 md:col-span-1"
                            >
                              <button className="bg-green-600 text-white p-3 md:px-8 rounded-sm text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 w-full">
                                مشاهده <i className="icon-eye"></i>
                              </button>
                            </Link>
                          </div>
                        </MainProductCard>
                      );
                    })}
                  </div>

                  <div className="my-10">
                    <Pagination
                      totalItems={products.length}
                      itemsPerPage={itemsPerPage}
                      onPageChange={handlePageChange}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              )}
              {error && (
                <div className="text-center text-red-500 p-5">
                  خطا در بارگیری محصولات: {error}
                </div>
              )}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 relative">
            <div className="sticky inset-0 space-y-7 ">
              <PopularItems />
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
