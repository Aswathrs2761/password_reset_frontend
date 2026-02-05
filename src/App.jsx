import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ResetPassword from "./Pages/ResetPassword";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ✅ must match page url */}
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* ✅ must match email link */}
            <Route
              path="/reset-password/:userId/:token"
              element={<ResetPassword />}
            />

            <Route path="/home" element={<Home />} />

          </Routes>
        </main>

        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
