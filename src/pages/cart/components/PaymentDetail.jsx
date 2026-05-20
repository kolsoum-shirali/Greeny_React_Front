import OrderForm from "./OrderForm";
export default function PaymentDetail({ setTab }) {
  return (
    <div>
      <div className="space-y-4">
        <OrderForm  />
        <div className="bg-gray-100/50 p-5 rounded-md space-y-4">
          <h3 className="font-bold">پرداخت نقدی پس از تحویل محصول</h3>
          <p>
            اطلاعات شخصی شما برای پردازش سفارش شماو پشتیبانی از تجربه شما در این
            وب سایت استفاده می شود
          </p>
        </div>
        <button
          className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600"
          onClick={() => setTab(0)}
        >
          برگشت به لیست محصولات
        </button>
      </div>
    </div>
  );
}
