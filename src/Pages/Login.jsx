import { useState } from "react";
import { toast } from "react-toastify";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });
      toast.success(res.data.message);
      setEmail("");
      setPassword("");
      navigate("/Home")

      localStorage.setItem("token", res.data.token);
    } catch (error) {
      toast.error(error.response?.data?.message || "Register failed")

    }
  };

  return (
    <div className="flex justify-center items-center mt-40 bg-gray-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          value={email}
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
