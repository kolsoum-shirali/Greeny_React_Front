import AddToCardBtn from "../../../components/common/AddToCardBtn";
const heading = [
  { delete: "ویرایش محصول" },
  { preview: "پیش نمایش" },
  { title: "نام محصول" },
  { oldPrice: "قیمت" },
  { newPrice: "قیمت با تخفیف" },
  { numberOfProduct: "تعداد" },
  { sum: "جمع" },
];

export default function DesktopOrdersList({ cart, selectedTab }) {
  const headTable =
    selectedTab === 0
      ? heading
      : heading.filter((item) => Object.keys(item)[0] !== "delete");
  return (
    <div className="hidden md:block overflow-x-auto">
      <table className="w-full border border-gray-300 text-center">
        <thead>
          <tr>
            {headTable.map((item, index) => {
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
          {cart.map((order, index) => (
            <tr key={index} className="border">
              {headTable.map((head, i) => {
                const key = Object.keys(head)[0];

                if (key === "sum") {
                  return (
                    <td key={i} className="border p-2">
                      {order.newPrice * order.numberOfProduct}
                    </td>
                  );
                }

                if (key === "delete") {
                  return (
                    <td key={i} className="border p-2">
                      <AddToCardBtn product={order} />
                    </td>
                  );
                }

                if (key === "preview") {
                  return (
                    <td key={i} className="p-2 flex justify-center">
                      <div className="h-24 w-24 overflow-hidden">
                        <img
                          src={`${process.env.REACT_APP_BASE_URL_IMG}/${order?.image}`}
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
