import moment from "moment-jalaali";

export default function ProductsTableDesktop({ products, openDialog }) {
  const headers = [
    "#",
    "پیش نمایش",
    "عنوان",
    "قیمت قبلی",
    "قیمت جدید",
    "کد محصول",
    "نوع",
    "وزن",
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
          {products.map((productItem, inx) => (
            <tr
              key={inx}
              className="hover:bg-green-50/50 transition-colors bg-white text-sm text-gray-700"
            >
              <td className="px-4 py-3 font-medium text-center">{inx + 1}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <img
                  src={`${process.env.REACT_APP_BASE_URL_IMG}/${productItem?.image}`}
                  className="w-16 h-16 object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                {productItem.title}
              </td>
              <td className="px-4 py-3 whitespace-nowrap" dir="ltr">
                {productItem.oldPrice}
              </td>
              <td className="px-4 py-3">{productItem.newPrice}</td>
              <td className="px-4 py-3">{productItem.pCode}</td>
              <td className="px-4 py-3">{productItem.pType}</td>
              <td className="px-4 py-3">{productItem.weight}</td>

              <td className="px-4 py-3 font-mono text-xs">{productItem._id}</td>

              <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                {moment(productItem.createdAt).format(
                  "jYYYY/jMM/jDD - HH:mm:ss",
                )}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => openDialog(productItem)}
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
