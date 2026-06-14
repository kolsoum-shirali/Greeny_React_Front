export default function OrdersMobileList({ orders }) {
  return (
    <div className="md:hidden space-y-4">
      {orders.map((order, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-sm space-y-5">
          <div className="flex gap-4">
            <img
              src={`${process.env.REACT_APP_BASE_URL_IMG}${order?.img}`}
              alt={order?.title}
              className="w-24 h-24 object-cover rounded-md"
            />

            <div className="flex flex-col justify-between">
              <h2 className="font-semibold">{order.title}</h2>
              <p className="text-sm text-gray-500">قیمت: {order.newPrice}</p>
              <p className="text-sm text-gray-500">
                تعداد: {order.numberOfProduct}
              </p>
              <p className="font-medium">
                جمع: {order.newPrice * order.numberOfProduct}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
