import PriceCard from "./PriceCard";
import DesktopOrdersList from "./DesktopOrdersList";
import MobileOrdersList from "./MobileOrdersList";
import moment from "moment-jalaali";

export default function OrderComplete({ receiptInfo }) {
  const userInfo = [
    {
      title: "نام و نام خانوادگی",
      value: `${receiptInfo.name} ${receiptInfo.lastName}`,
    },
    { title: "شماره تلفن", value: receiptInfo.mobile },
    { title: "ایمیل", value: receiptInfo.email },
    {
      title: "آدرس",
      value: receiptInfo.address,
    },
    { title: "کد سفارش شما", value: receiptInfo._id },
    {
      title: "تاریخ ثبت سفارش",
      value: moment(receiptInfo.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss"),
    },
  ];
  let sumNewPrice = 0;
  let sumOldPrice = 0;
  receiptInfo?.products?.forEach((order) => {
    sumNewPrice += order.newPrice * order.numberOfProduct;
    sumOldPrice += order.oldPrice * order.numberOfProduct;
  });

  const priceListItems = [
    { title: "مجموع با قیمت اصلی :", value: sumOldPrice },
    { title: "مجموع با قیمت تخفیف خورده :", value: sumNewPrice },
    { title: "تخفیف شما از این خرید :", value: sumOldPrice - sumNewPrice },
    { title: "مبلغ قابل پرداخت :", value: sumNewPrice },
  ];
  return (
    <div>
      <div className="space-y-4">
        <p className="bg-green-200 rounded-md p-3 text-center">
          مشتری گرامی از خرید شما سپاس گذاریم. به امید دیدار مجدد شما در خرید
          های آتی
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-md text-right">
            <tbody>
              {userInfo.map((user, inx) => (
                <tr key={inx} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">
                    {user.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <DesktopOrdersList cart={receiptInfo.products} selectedTab={2} />
        <MobileOrdersList cart={receiptInfo.products} selectedTab={2} />
        <PriceCard priceListItems={priceListItems} />
      </div>
    </div>
  );
}
