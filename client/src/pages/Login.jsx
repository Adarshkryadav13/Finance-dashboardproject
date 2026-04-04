import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        form
      );

      // ✅ Save token
      localStorage.setItem("token", res.data.access);

      alert("Login Success");

      // ✅ Redirect
      navigate("/dashboard");

    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
   
    <div className="min-h-screen flex items-center justify-center">

    <div className="bg-white p-8 rounded-2xl shadow-lg w-80">

      <h2 className="text-2xl font-bold text-center mb-6">
        Welcome Back 👋
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-3">{error}</p>
      )}

      <input
        type="text"
        placeholder="Username"
        className="w-full p-2 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Login
      </button>

    </div>
  </div>
  );
}