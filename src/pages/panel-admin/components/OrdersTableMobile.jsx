import moment from "moment-jalaali";

export default function OrdersTableMobile({ orders, openDialog }) {
  return (
    <div className="lg:hidden space-y-6">
      {orders.map((order, inx) => {
        return (
          <div key={inx} className="shadow-md border border-gray-100 p-5 rounded-lg space-y-3">
            {/* Number Badge */}
            <div className="h-10 w-10 rounded-full bg-green-600 flex justify-center items-center text-white mx-auto font-bold">
              {inx + 1}
            </div>

            {/* Information Rows */}
            <div className="text-gray-800 font-bold text-center text-lg">
              {order.name} {order.lastName}
            </div>

            <div className="space-y-1 text-sm border-t pt-3">
              <p className="break-all"><span className="font-semibold text-gray-500">موبایل:</span> {order.mobile}</p>
              <p className="break-all"><span className="font-semibold text-gray-500">ایمیل:</span> {order.email}</p>
              <p className="break-all"><span className="font-semibold text-gray-500">آیدی:</span> {order._id}</p>
              <p className="break-words"><span className="font-semibold text-gray-500">آدرس:</span> {order.address}</p>
              <p className="text-gray-500">
                {moment(order.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
              </p>
            </div>

            {/* Action Button */}
            <button
              onClick={() => openDialog(order)}
              className="w-full bg-green-600 text-white p-2 rounded-sm text-sm hover:bg-white hover:text-green-800 border-2 border-green-600 transition-all duration-300"
            >
              بیشتر
            </button>
          </div>
        );
      })}
    </div>
  );
}
