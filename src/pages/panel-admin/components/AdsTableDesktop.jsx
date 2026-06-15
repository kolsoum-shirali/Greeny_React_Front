import moment from "moment-jalaali";

export default function AdsTableDesktop({ ads, openDialog }) {
  const headers = [
    "#",
    "پیش نمایش",
    "عنوان",
    "کمترین قیمت",
    "بیشترین قیمت",
    "آیدی",
    "نوع",
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
          {ads.map((adsItem, inx) => (
            <tr
              key={inx}
              className="hover:bg-green-50/50 transition-colors bg-white text-sm text-gray-700"
            >
              <td className="px-4 py-3 font-medium text-center">{inx + 1}</td>
              <td className="px-4 py-3 whitespace-nowrap">
                <img
                  src={`${process.env.REACT_APP_BASE_URL_IMG}/${adsItem?.image}`}
                  className="w-16 h-16 object-cover rounded-lg mx-auto"
                />
              </td>
              <td className="px-4 py-3 whitespace-nowrap">{adsItem.caption}</td>
              <td className="px-4 py-3 whitespace-nowrap" dir="ltr">
                {adsItem.minPrice}
              </td>
              <td className="px-4 py-3">{adsItem.maxPrice}</td>
              <td className="px-4 py-3 font-mono text-xs">{adsItem._id}</td>
              <td className="px-4 py-3 min-w-[200px]">
                {adsItem.type == 2 ? "خریدار" : "فروشنده"}
              </td>

              <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                {moment(adsItem.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => openDialog(adsItem)}
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
