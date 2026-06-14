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
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border border-gray-300 text-center">
        <thead>
          <tr>
            {heading.map((item, index) => {
              const key = Object.keys(item)[0];
              return (
                <th key={index} className="border p-3 bg-green-100/50">
                  {item[key]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="border">
              {heading.map((head, i) => {
                const key = Object.keys(head)[0];

                if (key === "sum") {
                  return (
                    <td key={i} className="border p-2">
                      {order.newPrice * order.numberOfProduct}
                    </td>
                  );
                }

                if (key === "preview") {
                  return (
                    <td key={i} className="p-2 flex justify-center">
                      <div className="h-24 w-24 overflow-hidden">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL_IMG}${order?.img}`}
                          alt={order?.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    </td>
                  );
                }

                return (
                  <td key={i} className="border p-2">
                    {order[key]}
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
