import { fetchAllUsers } from "../../../api/user.api";
import { useState, useEffect } from "react";
import UsersTableDesktop from "./UsersTableDesktop";
import UsersTableMobile from "./UsersTableMobile"
export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, []);

  return (
    <div>
      <UsersTableDesktop users={users} />
      <UsersTableMobile users={users}/>
    </div>
  );
}
