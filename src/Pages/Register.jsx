import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../Services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("api/auth/register",
        { name, email, password }
      );

      // ✅ success toast
      toast.success(res.data.message);

      // ✅ clear inputs
      setName("");
      setEmail("");
      setPassword("");

      navigate("/")

    } catch (error) {
      // ✅ proper error toast
      toast.error(error.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="flex justify-center items-center mt-40 bg-gray-50">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input
          value={name}
          placeholder="Name"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={email}
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          value={password}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
