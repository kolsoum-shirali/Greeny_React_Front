import moment from "moment-jalaali";

export default function OrdersTableDesktop({ orders, openDialog }) {
  const headers = ["#", "نام", "موبایل", "ایمیل", "آیدی", "آدرس", "تاریخ", "عملیات"];

  return (
    <div className="hidden lg:block shadow-sm rounded-lg border border-gray-200 overflow-x-auto">
      <table className="w-full text-right border-collapse table-auto min-w-max">
        <thead className="bg-green-600 text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold text-sm whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((ord, inx) => (
            <tr key={inx} className="hover:bg-green-50/50 transition-colors bg-white text-sm text-gray-700">
              <td className="px-4 py-3 font-medium text-center">{inx + 1}</td>
              <td className="px-4 py-3 whitespace-nowrap">{ord.name} {ord.lastName}</td>
              <td className="px-4 py-3 whitespace-nowrap" dir="ltr">{ord.mobile}</td>
              <td className="px-4 py-3">{ord.email}</td>
              <td className="px-4 py-3 font-mono text-xs">{ord._id}</td>
              <td className="px-4 py-3 min-w-[200px]">{ord.address}</td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                {moment(ord.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => openDialog(ord)}
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
