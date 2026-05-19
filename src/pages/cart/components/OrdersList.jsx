import { useCart } from "../../../context/CartContext";
import AddToCardBtn from "../../../components/common/AddToCardBtn";
import MobileOrdersList from "./MobileOrdersList";
import PriceCard from "./PriceCard";
const headTable = [
  { delete: "ویرایش محصول" },
  { preview: "پیش نمایش" },
  { title: "نام محصول" },
  { newPrice: "قیمت" },
  { numberOfProduct: "تعداد" },
  { sum: "جمع" },
];

export default function OrdersList({ setTab }) {
  const { cart } = useCart();

  return (
    <div className="space-y-5">
      {/* ✅ Desktop Table */}
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
      {/* ✅ Mobile Cards */}
      <MobileOrdersList cart={cart} />
      <PriceCard />
      <button
        className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600"
        onClick={() => setTab(1)}
      >
        ادامه جهت تسویه حساب
      </button>
    </div>
  );
}
