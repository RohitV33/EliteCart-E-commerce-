import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginSignUp() {
  const [mode, setMode] = useState("Login"); // Login | Sign Up
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (mode === "Sign Up" && !name)) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      // 🔹 LOGIN
      if (mode === "Login") {
        const res = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password }
        );

        login(res.data); // save token + user
        navigate("/");
      }

      // 🔹 SIGNUP
      else {
        await axios.post(
          "http://localhost:5000/api/auth/signup",
          { name, email, password }
        );

        // reset & switch to login
        setName("");
        setPassword("");
        setMode("Login");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl px-8 py-10"
      >
        {/* Heading */}
        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-sm text-gray-500">
            Welcome to EliteCart
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            {mode === "Login"
              ? "Sign in to your account"
              : "Create your account"}
          </h1>
        </div>

        {/* Inputs */}
        <div className="mt-10 flex flex-col gap-5">
          {mode === "Sign Up" && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 px-5 rounded-xl border border-gray-300"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 px-5 rounded-xl border border-gray-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-14 px-5 rounded-xl border border-gray-300"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="mt-4 text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-14 mt-8 rounded-xl bg-gray-900 text-white text-lg font-semibold hover:bg-gray-800 disabled:opacity-60"
        >
          {loading
            ? "Please wait..."
            : mode === "Login"
            ? "Sign In"
            : "Create Account"}
        </button>

        {/* Toggle */}
        <p className="mt-8 text-center text-gray-600 text-sm">
          {mode === "Login" ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("Sign Up")}
                className="font-semibold cursor-pointer"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode("Login")}
                className="font-semibold cursor-pointer"
              >
                Login
              </span>
            </>
          )}
        </p>
      </form>
    </section>
  );
}