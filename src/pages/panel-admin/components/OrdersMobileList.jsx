export default function OrdersMobileList({ orders }) {
  return (
    <div className="md:hidden space-y-4 px-2">
      {orders.map((order, index) => (
        <div key={index} className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white flex gap-4">
          {/* Product Image */}
          <img
            src={`${process.env.REACT_APP_BASE_URL_IMG}/${order?.image}`}
            alt={order?.title || "محصول"}
            className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
          />

          {/* Details Column */}
          <div className="flex flex-col justify-between flex-grow overflow-hidden">
            <h2 className="font-bold text-gray-800 truncate">{order.title}</h2>
            
            <div className="text-sm text-gray-500 space-y-0.5">
              <p>قیمت واحد: {Number(order.newPrice).toLocaleString()} تومان</p>
              <p>تعداد: {order.numberOfProduct}</p>
            </div>

            <div className="mt-2 pt-2 border-t border-gray-100 font-bold text-green-700">
              جمع: {(order.newPrice * order.numberOfProduct).toLocaleString()} تومان
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
