import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // ✅ filter
  const filteredBlogs = blogs.filter((blog) =>
    blog.title?.toLowerCase().includes(searchQuery.toLowerCase().trim()),
  );

  // ✅ paginate filtered results (this is the main fix)
  const currentItems = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchBlogs();
        if (isMounted) setBlogs(data);
      } catch (e) {
        console.error("Error fetching blogs! ", e.message);
        if (isMounted) setError(e.message);
      } finally {
        if (isMounted) setLoading(false);
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
              {/* ✅ search box */}
              <input
                type="text"
                placeholder="جستجو بر اساس نام محصول..."
                className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {loading && !error && [...Array(3)].map((_, inx) => (
                <div key={inx}>
                  <ProductLoading />
                </div>
              ))}

              {!loading && !error && blogs.length > 0 && (
                <div>
                  <div className="space-y-7">
                    {currentItems.length > 0 ? (
                      currentItems.map((blog, index) => (
                        <MainProductCard
                          key={index}
                          product={blog}
                          showHeading={true}
                        >
                          <div className="flex">
                            <Link to={`/blog/${blog.numBlog}`} className="mr-auto">
                              <p className="text-green-800 font-semibold hover:bg-green-800 hover:text-white transition-colors duration-100 delay-75 p-3  rounded-md">
                                بیشتر بخوانید <i className=" icon-left-big"></i>
                              </p>
                            </Link>
                          </div>
                        </MainProductCard>
                      ))
                    ) : (
                      <p className="text-sm text-gray-600 py-6">
                        نتیجه‌ای برای "{searchQuery}" پیدا نشد.
                      </p>
                    )}
                  </div>

                  <div className="my-10">
                    <Pagination
                      totalItems={filteredBlogs.length}
                      itemsPerPage={itemsPerPage}
                      onPageChange={handlePageChange}
                      currentPage={currentPage}
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