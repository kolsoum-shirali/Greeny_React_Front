import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  HomePage,
  Login,
  Register,
  Footer,
  Header,
  NotFound,
  AboutUs,
  ContactUs,
  BlogPage,
  BlogDetail,
  Profile,
  Panel,
  ProductsDetail,
  CreateAds,
  AdsPage,
  Products,
  CartPage,
} from "./pages/index";
import "./App.css";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <div className="App bg-Slate-100">
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/panel-admin" element={<Panel />} />

            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductsDetail />} />
            <Route path="/create-ads" element={<CreateAds />} />
            <Route path="/ads" element={<AdsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          rtl
        />
      </CartProvider>
    </div>
  );
}

function MainLayout() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
