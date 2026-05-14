import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <div className="shadow-sm p-5 border border-gray-400/20 rounded-md">
      <div className="h-72 md:h-96 overflow-hidden flex justify-center pb-2 rounded-md">
        <img
          src={`${process.env.REACT_APP_BASE_URL_IMG}${blog.img}`}
          alt=""
          className="w-full h-auto object-cover rounded-md hover:scale-110 transition-scale duration-500
"
        />
      </div>
      <div className="space-y-3 mt-3">
        <div className="flex gap-2">
          <p className="text-gray-500 text-sm">
            <i className="icon-user-o text-green-800"></i>ادمین
          </p>
          <p className="text-gray-500 text-sm">
            <i className=" icon-calendar text-green-800"></i>
            {blog.date}
          </p>
          <p className="text-gray-500 text-sm">
            <i className=" icon-user-o text-green-800"></i>
            {blog.comment} کامنت
          </p>
        </div>
        <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
        <p className="text-base line-clamp-3 text-gray-500 text-justify">
          {blog.shortDesc}
        </p>
        <div className="flex">
          <Link to="/" className="mr-auto">
            <p className="text-green-800 font-semibold hover:bg-green-800 hover:text-white transition-colors duration-100 delay-75 p-3  rounded-md">
              بیشتر بخوانید <i className=" icon-left-big"></i>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
