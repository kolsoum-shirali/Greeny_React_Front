import { fetchAllUsers } from "../../../api/user.api";
import { useState, useEffect } from "react";
import UsersTableDesktop from "./UsersTableDesktop";
import UsersTableMobile from "./UsersTableMobile";
import Pagination from "../../../components/common/Pagination";
export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const currentItems = users.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let isMounted = true;

    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchAllUsers();

        if (isMounted) {
          setUsers(data);
        }
      } catch (e) {
        console.error("Error fetching users:", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    loadUsers();
    return () => {
      isMounted = false;
    };
  }, [currentPage]);

  return (
    <div>
      <UsersTableDesktop users={currentItems} />
      <UsersTableMobile users={currentItems} />
      <div className="my-10">
        <Pagination
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
