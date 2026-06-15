import { fetchOrders } from "../../../api/order.api";
import { useState, useEffect } from "react";
import OrdersDialog from "./OrdersDialog";
import OrdersTableDesktop from "./OrdersTableDesktop";
import OrdersTableMobile from "./OrdersTableMobile";
import Pagination from "../../../components/common/Pagination";

export default function OrdersList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const currentItems = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const openDialog = (order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

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
  }, [currentPage]);

  return (
    <div>
      <OrdersTableDesktop orders={currentItems} openDialog={openDialog} />
      <OrdersTableMobile orders={currentItems} openDialog={openDialog} />
      <div className="my-10">
        <Pagination
          totalItems={orders.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
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
