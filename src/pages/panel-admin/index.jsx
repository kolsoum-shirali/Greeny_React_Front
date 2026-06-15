import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import OrdersList from "./components/OrdersList";
import UsersList from "./components/UsersList";
import AdsList from "./components/AdsList";
const options = [
  { title: "خانه", link: "/" },
  { title: "پنل ادمین", link: "" },
];

const sideBar = [
  { title: "لیست سفارشات", key: "orders" },
  { title: "لیست کاربران", key: "users" },
  { title: "لیست آگهی ها", key: "ads" },
];

export default function Panel() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : {};
  });

  const [activeTab, setActiveTab] = useState("orders");

  const navigate = useNavigate();
  useEffect(() => {
    if (user.email !== "kolsoumshirali2002@gmail.com") {
      navigate("/");
    }
  }, [navigate, user.email]);

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return <OrdersList />;
      case "users":
        return <UsersList />;
      case "ads":
        return <AdsList />;
      default:
        return <OrdersList />;
    }
  };

  return (
    <div>
      <BreadCrumbsBanner options={options} caption="پنل ادمین" />
      <div className="p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4 lg:col-span-2 border shadow rounded-md">
            <ul className="p-5">
              {sideBar.map((option, inx) => (
                <li
                  key={inx}
                  className={`cursor-pointer hover:bg-green-100/40  p-2 ${activeTab === option.key ? "font-bold text-green-600" : ""} ${inx !== 1 ? "border-b" : ""}`}
                  onClick={() => setActiveTab(option.key)}
                >
                  {option.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-8 lg:col-span-10 border shadow rounded-md">
            <div className="p-5">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
