export default function PaymentDetail({ setTab }) {
  return (
    <div>
      <div>
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
