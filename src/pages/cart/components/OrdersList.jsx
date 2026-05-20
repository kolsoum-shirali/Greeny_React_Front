import { useMemo } from "react";
import { useCart } from "../../../context/CartContext";
import MobileOrdersList from "./MobileOrdersList";
import PriceCard from "./PriceCard";
import DesktopOrdersList from "./DesktopOrdersList";
export default function OrdersList({ setTab }) {
  const { cart } = useCart();
  const priceSummary = useMemo(() => {
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

  const priceListItems = [
    { title: "مجموع با قیمت اصلی :", value: priceSummary.sumOldPrice },
    { title: "مجموع با قیمت تخفیف خورده :", value: priceSummary.sumNewPrice },
    { title: "تخفیف شما از این خرید :", value: priceSummary.discount },
    { title: "مبلغ قابل پرداخت :", value: priceSummary.payableAmount },
  ];
  return (
    <div className="space-y-5">
      <DesktopOrdersList cart={cart} selectedTab={0} />
      <MobileOrdersList cart={cart} selectedTab={0} />
      <PriceCard priceListItems={priceListItems} />
      <button
        className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600"
        onClick={() => setTab(1)}
      >
        ادامه جهت تسویه حساب
      </button>
    </div>
  );
}
