import PriceCard from "./PriceCard";

const userInfo = [
  { title: "نام و نام خانوادگی", value: "سارا بهرامی" },
  { title: "شماره تلفن", value: "09055211233" },
  { title: "ایمیل", value: "sara@gmail.com" },
  {
    title: "آدرس",
    value:
      "اصفهان - میدان امام حسین - نبش کتابخانه مرکزی - مجتمع اریا - پلاک 510",
  },
  { title: "کد سفارش شما", value: 850 },
];

export default function OrderComplete() {
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

        <PriceCard />
      </div>
    </div>
  );
}
