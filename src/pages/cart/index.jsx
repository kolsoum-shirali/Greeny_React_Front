import { useState } from "react";
import OrdersList from "./components/OrdersList";
import PaymentDetail from "./components/PaymentDetail";
import OrderComplete from "./components/OrderComplete";

const tabs = [
  { id: 0, title: "لیست محصولات", desc: "فهرست اقلام خود را مدیریت کنید" },
  { id: 1, title: "جزئیات پرداخت", desc: "صورتحساب خود را پرداخت کنید" },
  { id: 2, title: "تکمیل سفارش", desc: "سفارش خود را مرور و ثبت کنید" },
];

export default function CartPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [receiptInfo, setReceiptInfo] = useState({});
  const receiptOrders = (value) => {
    setReceiptInfo(value);
    setActiveTab(2);
  };
  return (
    <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10">
      <div
        className="flex justify-center flex-col md:flex-row  md:gap-3  border-b"
        disable
      >
        {tabs.map((tab, inx) => (
          <div
            key={inx}
            className={`p-2 ${
              activeTab === tab.id
                ? "border-b-2 border-green-600 text-green-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`text-xl bg-green-600 text-white rounded-full w-12 h-12 flex justify-center items-center ${activeTab === tab.id && "border border-green-900"}`}
              >
                {inx + 1}
              </span>
              <div>
                <div className="text-base md:text-lg">{tab.title}</div>
                <div className="text-sm hidden md:block">{tab.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === 0 && <OrdersList setTab={setActiveTab} />}
        {activeTab === 1 && (
          <PaymentDetail setTab={setActiveTab} receiptOrders={receiptOrders} />
        )}
        {activeTab === 2 && (
          <OrderComplete setTab={setActiveTab} receiptInfo={receiptInfo} />
        )}
      </div>
    </div>
  );
}
