import moment from "moment-jalaali";

export default function OrdersTableDesktop({ orders, openDialog }) {
  return (
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-md text-right">
        <tbody>
          {orders.map((ord, inx) => (
            <tr key={inx} className="hover:bg-gray-50 text-sm">
              <td className="border border-gray-300 px-4 py-2">{inx + 1}</td>

              <td className="border border-gray-300 px-4 py-2">
                {ord.name} {ord.lastName}
              </td>
              <td className="border border-gray-300 px-4 py-2">{ord.mobile}</td>
              <td className="border border-gray-300 px-4 py-2">{ord.email}</td>
              <td className="border border-gray-300 px-4 py-2">{ord._id}</td>
              <td className="border border-gray-300 px-4 py-2">
                {ord.address}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {moment(ord.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => openDialog(ord)}
                  className="bg-green-600 text-white p-2 md:px-8 rounded-sm text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 w-full"
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
