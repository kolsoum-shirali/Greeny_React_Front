import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../api/products.api";
export default function PopularItems() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        if (isMounted) {
          setBlogs(data);
        }
      } catch (e) {
        console.error("Error fetching Blogs:", e.message);
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
    <div className="shadow-md rounded-md border border-gray-400/20 p-5">
      <h3 className="text-xl font-semibold relative before:absolute before:-bottom-[2px] before:right-0 before:w-32 before:h-[3px] before:bg-green-800 border-b border-gray-400/20 pb-2">
        مطالب محبوب
      </h3>
      <div className="mt-5">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="border-b border-gray-400/20  last:border-0"
          >
            <Link
              to={`/blog/${blog.id}`}
              className="grid grid-cols-12 gap-3 p-3 rounded-md hover:text-green-800 hover:bg-slate-100 group"
            >
              <div className="col-span-4 h-24 rounded-sm flex justify-center overflow-hidden">
                <img
                  src={`${process.env.REACT_APP_BASE_URL_IMG}/${blog.image}`}
                  alt={blog.img}
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
              <div className="col-span-8 text-sm flex flex-col justify-between">
                <p className="line-clamp-2">{blog.shortDesc}</p>
                <p className="text-gray-500 group-hover:text-green-800">
                  5 دی 1405
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
