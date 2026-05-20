import Logo from "../../assets/img/logo.png";
import Divider from "@mui/material/Divider";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react"; // Import hooks

const actions = [
  { title: "عضویت", link: "/register" },
  { title: "ورود", link: "/login" },
];
export default function TopHeader({ toggleMobileMenu }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const { cart } = useCart();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    navigate("/");
    alert("با موفقیت از حساب کاربری خود خارج شدید");
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  return (
    <div className="flex justify-between items-center p-5 max-lg:fixed top-0 left-0 right-0 z-10 bg-white">
      <i
        className="icon-menu text-2xl text-green-800 lg:hidden cursor-pointer"
        onClick={toggleMobileMenu}
      ></i>
      <img src={Logo} alt={Logo} className="w-44" />
      <div className="gap-2 hidden lg:flex">
        <div className="flex items-center gap-2 shadow-md rounded-sm p-3">
          {!token ? (
            actions.map((act, inx) => {
              return (
                <>
                  <Link key={inx} to={act.link} className="p-2">
                    <i className="icon-user-circle-o"></i>
                    {act.title}
                  </Link>
                  {inx === 0 && <Divider orientation="vertical" flexItem />}
                </>
              );
            })
          ) : (
            <button onClick={logout}>خروج از حساب کاربری</button>
          )}
        </div>
        <Link
          to="/cart"
          className="shadow-md rounded-sm p-3 relative flex justify-center items-center"
        >
          <i className="icon-shopping-bag"></i>
          <span className="bg-green-600 aspect-square rounded-full absolute right-0 -top-2 min-w-7  min-h-7 text-white flex justify-center items-center">
            {cart.length}
          </span>
        </Link>
      </div>
    </div>
  );
}
