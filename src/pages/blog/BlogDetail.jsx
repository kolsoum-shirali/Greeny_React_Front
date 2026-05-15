import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import ContactForm from "../../components/common/ContactForm";
import PopularBlogs from "./components/PopularBlogs";
import FollowUs from "./components/FollowUs";
import BlogComments from "./components/BlogComments";
import { fetchSingleBlog } from "../../api/blogs.api";
import styles from "../../styles/css/blog.module.css";
import BlogDetailLoading from "./components/BlogDetailLoading";
import CommentLoading from "../../components/common/CommentLoading";
export default function BlogDetail() {
  const { id: blogId } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const options = [
    { title: "خانه", link: "/" },
    { title: "وبلاگ", link: "/blog" },
    { title: blog.title || "", link: "" },
  ];

  useEffect(() => {
    let isMounted = true;

    const loadBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSingleBlog(blogId);

        if (isMounted) {
          setBlog(data);
        }
      } catch (e) {
        console.error("Error fetching blogs:", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadBlog();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <BreadCrumbsBanner options={options} caption={blog.title} />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-8 space-y-5 md:space-y-10">
            {loading && !error && (
              <div class="rounded-md border p-4">
                <div class="animate-pulse space-y-6">
                  <BlogDetailLoading />
                  <div className="space-y-8">
                    {[...Array(3)].map((_, index) => (
                      <div key={index}>
                        <CommentLoading />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {!loading && !error && blog && (
              <div className="space-y-10">
                <div className="space-y-5 md:space-y-12">
                  <div className="h-72 md:h-[500px] overflow-hidden flex justify-center rounded-md">
                    <img
                      src={`${process.env.REACT_APP_BASE_URL_IMG}${blog.img}`}
                      alt={blog.img}
                      className="w-full h-auto object-cover rounded-md 
"
                    />
                  </div>
                  <h1 className="font-semibold text-2xl text-center">
                    {blog.title}
                  </h1>

                  <div
                    className={`${styles["blog-wrap"]} text-gray-500 leading-7 text-justify`}
                    dangerouslySetInnerHTML={{ __html: blog.desc }}
                  />
                </div>
                {blog.commentList && (
                  <div>
                    <BlogComments comments={blog.commentList} />
                  </div>
                )}

                <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
                  <h3 className="text-lg font-semibold mb-5">کامنت بگذارید</h3>
                  <ContactForm />
                </div>
              </div>
            )}
          </div>
          <div className="col-span-12 lg:col-span-4 relative">
            <div className="sticky inset-0 space-y-7 ">
              <PopularBlogs />
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
