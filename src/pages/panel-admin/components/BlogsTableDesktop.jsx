import moment from "moment-jalaali";

export default function ProductsTableDesktop({ blogs, openDialog }) {
  const headers = [
    "#",
    "پیش نمایش",
    "عنوان",
    "کد وبلاگ",
    "آیدی",
    "تاریخ",
    "عملیات",
  ];

  return (
    <div className="hidden lg:block shadow-sm rounded-lg border border-gray-200 overflow-x-auto">
      <table className="w-full text-right border-collapse table-auto min-w-max">
        <thead className="bg-green-600 text-white">
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 font-semibold text-sm whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {blogs.map((blogItem, inx) => (
            <tr
              key={inx}
              className="hover:bg-green-50/50 transition-colors bg-white text-sm text-gray-700"
            >
              <td className="px-4 py-3 font-medium text-center">{inx + 1}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <img
                  src={`${process.env.REACT_APP_BASE_URL_IMG}/${blogItem?.image}`}
                  className="w-16 h-16 object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{blogItem.title}</td>
              <td className="px-4 py-3">{blogItem.numBlog}</td>

              <td className="px-4 py-3 font-mono text-xs">{blogItem._id}</td>

              <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                {moment(blogItem.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => openDialog(blogItem)}
                  className="bg-green-600 text-white px-6 py-1.5 rounded text-sm hover:bg-white hover:text-green-800 border-2 border-green-600 transition-all font-medium whitespace-nowrap"
                >
                  بیشتر
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
