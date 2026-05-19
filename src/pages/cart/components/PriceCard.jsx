import React from "react"; // Good practice to import React
import { useCart } from "../../../context/CartContext";

export default function PriceCard() {
  const { cart } = useCart();

  // Use useMemo for expensive calculations like summing up prices
  // This ensures the calculation only runs when 'cart' changes.
  const priceSummary = React.useMemo(() => {
    let sumNewPrice = 0;
    let sumOldPrice = 0;

    cart.forEach((order) => {
      sumNewPrice += order.newPrice * order.numberOfProduct;
      sumOldPrice += order.oldPrice * order.numberOfProduct;
    });

    return {
      sumOldPrice,
      sumNewPrice,
      discount: sumOldPrice - sumNewPrice,
      payableAmount: sumNewPrice,
    };
  }, [cart]); // Dependency array: recalculate only if cart changes

  // Define the list structure outside the return statement
  // This avoids recreating the array on every render if the structure is static
  const priceListItems = [
    { title: "مجموع با قیمت قبلی :", value: priceSummary.sumOldPrice },
    { title: "مجموع با قیمت جدید :", value: priceSummary.sumNewPrice },
    { title: "تخفیف شما از این خرید :", value: priceSummary.discount },
    { title: "مبلغ قابل پرداخت :", value: priceSummary.payableAmount },
  ];

  return (
    <div className="bg-gray-100/50 p-5 rounded-md space-y-4">
      <h3 className="font-bold">جمع کل سبد خرید</h3>
      <div className="space-y-3">
        {priceListItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="grid grid-cols-2 gap-4">
              <p className="col-span-2 md:col-span-1">{item.title}</p>
              <p className="col-span-2 md:col-span-1">
                {item.value.toLocaleString("fa-IR")}
                <span className="text-green-600 font-semibold ms-1">تومان</span>
              </p>
            </div>
            {index < priceListItems.length - 1 && <hr className="my-2" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
