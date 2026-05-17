import { useState, useEffect } from "react";

import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import Pagination from "../../components/common/Pagination";
import PopularItems from "../../components/common/PopularItems";
import MainProductCard from "../../components/common/MainProductCard";
import FollowUs from "../../components/common/FollowUs";
import { fetchBlogs } from "../../api/blogs.api";
import ProductLoading from "../../components/common/ProductLoading";
const options = [
  { title: "خانه", link: "/" },
  { title: "وبلاگ", link: "" },
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const currentItems = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <BreadCrumbsBanner options={options} caption="وبلاگ" />
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

              {!loading && !error && blogs.length > 0 && (
                <div>
                  <div className="space-y-7">
                    {currentItems.map((blog, index) => (
                      <MainProductCard
                        product={blog}
                        showHeading={true}
                        key={index}
                      />
                    ))}
                  </div>
                  <div className="my-10">
                    <Pagination
                      totalItems={blogs.length}
                      itemsPerPage={itemsPerPage}
                      onPageChange={handlePageChange}
                      currentPage={currentPage} // Pass currentPage as a prop
                    />
                  </div>
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
