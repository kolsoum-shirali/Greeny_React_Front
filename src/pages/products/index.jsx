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
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const { addToCart, cart } = useCart();

  // فیلتر کردن محصولات بر اساس جستجو
  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // محاسبه آیتم‌های صفحه جاری
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // بازگشت به صفحه اول هنگام تغییر جستجو
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        if (isMounted) setProducts(data);
      } catch (e) {
        if (isMounted) setError(e.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <BreadCrumbsBanner options={options} caption="فروشگاه" />

      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        {/* بخش جستجو */}

        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-5">
              <input
                type="text"
                placeholder="جستجو بر اساس نام محصول..."
                className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {loading ? (
                [...Array(3)].map((_, inx) => <ProductLoading key={inx} />)
              ) : error ? (
                <div className="text-center text-red-500 p-5">
                  خطا در بارگیری محصولات: {error}
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="text-center text-gray-500 p-10">
                  محصولی با این نام یافت نشد.
                </div>
              ) : (
                <div>
                  <div className="space-y-7">
                    {currentItems.map((product) => {
                      const cartItem = cart.find(
                        (item) => item.id === product.id,
                      );
                      const count = cartItem?.numberOfProduct ?? 0;
                      return (
                        <MainProductCard
                          product={product}
                          showHeading={false}
                          key={product.id}
                        >
                          <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 md:col-span-1">
                              {count <= 0 ? (
                                <button
                                  className="bg-gray-400 p-4 text-sm text-white w-full rounded-sm hover:bg-green-600 transition-colors"
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
                              <button className="bg-green-600 text-white p-3 md:px-8 rounded-sm text-sm lg:text-base hover:bg-white hover:text-green-800 border-2 border-green-600 w-full transition-all">
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
                      totalItems={filteredProducts.length}
                      itemsPerPage={itemsPerPage}
                      onPageChange={handlePageChange}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="space-y-7">
              <PopularItems />
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
