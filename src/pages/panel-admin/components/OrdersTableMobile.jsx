import moment from "moment-jalaali";
export default function OrdersTableMobile({ orders, openDialog }) {
  return (
    <div className="lg:hidden space-y-8">
      {orders.map((order, inx) => {
        return (
          <div key={inx} className="shadow border p-5 space-y-2">
            <div className="h-10 rounded-full aspect-square bg-green-600 flex justify-center items-center text-white mx-auto">
              {inx + 1}
            </div>
            <p className="flex break-all">
              {order.name} {order.lastName}
            </p>
            <p className="flex break-all">{order.mobile}</p>
            <p className="flex break-all">{order.email}</p>
            <p className="flex break-all">{order._id}</p>
            <p>{order.address}</p>
            <p className="flex break-all">
              {moment(order.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
            </p>
            <p>
              <button
                onClick={() => openDialog(order)}
                className="bg-green-600 text-white p-2 md:px-8 rounded-sm text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 w-full"
              >
                بیشتر
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
}
