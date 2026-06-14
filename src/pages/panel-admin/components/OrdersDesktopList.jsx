const heading = [
  { preview: "پیش نمایش" },
  { title: "نام محصول" },
  { oldPrice: "قیمت" },
  { newPrice: "قیمت با تخفیف" },
  { numberOfProduct: "تعداد" },
  { sum: "جمع" },
];

export default function OrdersDesktopList({ orders }) {
  return (
    // Removed 'overflow-x-auto' to prevent scrolling
    <div className="hidden md:block shadow-sm rounded-lg border border-gray-200">
      <table className="w-full text-right border-collapse table-fixed">
        <thead>
          <tr className="bg-green-600 text-white">
            {heading.map((item, index) => {
              const key = Object.keys(item)[0];
              return (
                // Added break-words and adjusted padding
                <th key={index} className="p-3 font-semibold text-sm break-words">
                  {item[key]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {orders.map((order, index) => (
            <tr key={index} className="hover:bg-green-50/30 transition-colors odd:bg-white even:bg-gray-50">
              {heading.map((head, i) => {
                const key = Object.keys(head)[0];

                if (key === "preview") {
                  return (
                    <td key={i} className="p-2">
                      <img
                        src={`${process.env.REACT_APP_BASE_URL_IMG}${order?.img}`}
                        alt={order?.title}
                        className="w-12 h-12 object-cover rounded-lg mx-auto"
                      />
                    </td>
                  );
                }

                if (key === "sum") {
                  return (
                    <td key={i} className="p-2 font-bold text-green-700 break-words text-sm">
                      {(order.newPrice * order.numberOfProduct).toLocaleString()}
                    </td>
                  );
                }

                return (
                  <td key={i} className="p-2 text-gray-700 break-words text-sm">
                    {typeof order[key] === "number" 
                      ? order[key].toLocaleString() 
                      : order[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
