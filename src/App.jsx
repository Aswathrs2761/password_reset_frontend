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
      {/* Layout wrapper */}
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Main content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/reset-password/:userId/:token" element={<ResetPassword />} />
            <Route path="/Home" element={<Home/>} />
          </Routes>
        </main>

        <Footer />

        {/* Toast notifications */}
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
