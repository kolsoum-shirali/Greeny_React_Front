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

  // NEW: search by order name
  const [searchByName, setSearchByName] = useState("");

  const openDialog = (order) => {
    setSelectedOrder(order);
    setIsDialogOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
  }, []);

  // Filter orders by name
  const filteredOrders = orders.filter((order) => {
    if (!searchByName.trim()) return true;

    const orderName = String(order.name ?? "").toLowerCase();
    return orderName.includes(searchByName.trim().toLowerCase());
  });

  // Reset to page 1 when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchByName]);

  const currentItems = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={searchByName}
          onChange={(e) => setSearchByName(e.target.value)}
          placeholder="جستجو بر اساس نام کاربر..."
          className="w-full lg:w-1/2  h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
        />
      </div>

      <OrdersTableDesktop orders={currentItems} openDialog={openDialog} />
      <OrdersTableMobile orders={currentItems} openDialog={openDialog} />

      <div className="my-10">
        <Pagination
          totalItems={filteredOrders.length}
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
