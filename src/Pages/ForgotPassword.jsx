import { useState } from "react";
import api from "../Services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/forgot-password",
        { email }
      );
      toast.success(res.data.message);      
    } catch(error) {
      toast.error (error.response?.data?.message || "Error sending email");
    }
  };

  return (
    <div className="flex justify-center items-center mt-40 bg-gray-50">
      <form
        onSubmit={handleForgot}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Forgot Password
        </h2>

        <input
          type="email"
          value={email  }
          placeholder="Enter email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
