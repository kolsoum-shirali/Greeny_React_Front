import { fetchOrders } from "../../../api/order.api";
import { useState, useEffect } from "react";
import OrdersDialog from "./OrdersDialog";
import OrdersTableDesktop from "./OrdersTableDesktop";
import OrdersTableMobile from "./OrdersTableMobile";

export default function OrdersList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchOrders();

        if (isMounted) {
          setOrders(data);
        }
      } catch (e) {
        console.error("Error fetching orders:", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadOrders();

    return () => {
      isMounted = false;
    };
  }, []);

  const openDialog = (order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  return (
    <div>
      <OrdersTableDesktop orders={orders} openDialog={openDialog} />
      <OrdersTableMobile orders={orders} openDialog={openDialog} />
      {selectedOrder && (
        <OrdersDialog
          products={selectedOrder.products}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
}
