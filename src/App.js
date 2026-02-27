import { Route, Routes, Outlet } from "react-router-dom";
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
} from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App bg-Slate-100">
      <Routes>
        {/* Layout Route for Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="*" element={<NotFound />} />
        </Route>
        {/* Routes without Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
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
