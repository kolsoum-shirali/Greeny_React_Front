import { Route, Routes, Outlet } from "react-router-dom";
import { HomePage, Login, Register, Footer, Header, NotFound } from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App bg-Slate-100">
      <Routes>
        {/* Layout Route for Header and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function MainLayout() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;