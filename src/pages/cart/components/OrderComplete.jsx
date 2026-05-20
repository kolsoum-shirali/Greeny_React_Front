import PriceCard from "./PriceCard";
import DesktopOrdersList from "./DesktopOrdersList";
import MobileOrdersList from "./MobileOrdersList";

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
    { title: "تاریخ ثبت سفارش", value: receiptInfo.createdAt },
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
        <PriceCard />
      </div>
    </div>
  );
}
