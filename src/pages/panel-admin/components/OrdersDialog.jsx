import OrdersMobileList from "./OrdersMobileList";
import OrdersDesktopList from "./OrdersDesktopList";

export default function OrdersDialog({ products, isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg max-w-lg w-full">
        <OrdersMobileList orders={products} />
        <OrdersDesktopList orders={products} />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
