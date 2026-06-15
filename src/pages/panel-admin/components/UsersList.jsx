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

  // Search by name
  const [searchByName, setSearchByName] = useState("");

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
  }, []); // ✅ fetch once (not on page change)

  // Filter by name (change `user.name` if your field is different)
  const filteredUsers = users.filter((user) => {
    if (!searchByName.trim()) return true;

    const name = String(user.name ?? "").toLowerCase();
    return name.includes(searchByName.trim().toLowerCase());
  });

  // Reset page when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchByName]);

  const currentItems = filteredUsers.slice(
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

      <UsersTableDesktop users={currentItems} />
      <UsersTableMobile users={currentItems} />

      <div className="my-10">
        <Pagination
          totalItems={filteredUsers.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
