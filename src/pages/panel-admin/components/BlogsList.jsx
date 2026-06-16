import { useState, useEffect } from "react";
import AddBlogDialog from "./AddBlogDialog";
import { fetchBlogs } from "../../../api/blogs.api";
import DescriptionDialog from "./DescriptionDialog";
import Pagination from "../../../components/common/Pagination";
import BlogsTableDesktop from "./BlogsTableDesktop";
import BlogsTableMobile from "./BlogsTableMobile";

export default function BlogsList() {
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [searchByTitle, setSearchByTitle] = useState("");

  const openDialog = (productValue) => {
    setSelectedBlog(productValue);
    setIsDialogOpen(true);
  };

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

    loadBlogs();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredBlogs = blogs.filter((blogItem) => {
    if (!searchByTitle.trim()) return true;

    const blogTitle = String(blogItem.title ?? "").toLowerCase();
    return blogTitle.includes(searchByTitle.trim().toLowerCase());
  });

  // Reset to page 1 when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchByTitle]);

  const currentItems = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="space-y-4">
      <button
        onClick={() => setAddDialogOpen(true)}
        className="bg-green-600 text-white px-6 py-1.5 rounded text-sm hover:bg-white hover:text-green-800 border-2 border-green-600 transition-all font-medium whitespace-nowrap"
      >
        افزودن وبلاگ
      </button>
      <div>
        <input
          type="text"
          value={searchByTitle}
          onChange={(e) => setSearchByTitle(e.target.value)}
          placeholder="جستجو بر اساس عنوان وبلاگ..."
          className="w-full lg:w-1/2  h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
        />
      </div>

      <BlogsTableDesktop blogs={currentItems} openDialog={openDialog} />
      {/* <BlogsTableMobile blogs={currentItems} openDialog={openDialog} /> */}

      <div className="my-10">
        <Pagination
          totalItems={filteredBlogs.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
      {setSelectedBlog && (
        <DescriptionDialog
          desc={selectedBlog?.desc}
          dangerouslySetInnerHTML={{ __html: selectedBlog?.desc }}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
      <AddBlogDialog
        isOpen={isAddDialogOpen}
        onClose={() => setAddDialogOpen(false)}
      />
    </div>
  );
}
