export default function BlogCard({ blog }) {
  return (
    <div className="shadow-sm p-4 border border-gray-400/20">
     <div className="h-72 overflow-hidden flex justify-center items-center pb-2">
       <img src={blog.img} alt="" className="w-full h-auto " />
     </div>
      <div className="space-y-3 mt-3">
        <div className="flex gap-2">
          <p className="text-gray-500 text-sm">
            <i className="icon-user-o text-green-800"></i>ادمین
          </p>
          <p className="text-gray-500 text-sm">
            <i className=" icon-calendar text-green-800"></i>10 بهمن 1404
          </p>
        </div>
        <h3 className="text-lg line-clamp-2 font-bold">{blog.title}</h3>
        <p className="text-base line-clamp-3 text-gray-500">{blog.desc}</p>
        <p className="text-green-800 font-semibold">
          بیشتر بخوانید <i className=" icon-left-big"></i>
        </p>
      </div>
    </div>
  );
}
