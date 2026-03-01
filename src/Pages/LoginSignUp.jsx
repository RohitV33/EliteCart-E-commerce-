import { useState } from "react";

export default function LoginSignUp() {
  const [state, setState] = useState("Login");

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-6">
      
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl px-8 py-10">

        {/* Heading */}
        <div className="text-center">
          <span className="uppercase tracking-[0.35em] text-sm text-gray-500">
            Welcome to EliteCart
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            {state === "Login" ? "Sign in to your account" : "Create your account"}
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            {state === "Login"
              ? "Enter your details to continue shopping"
              : "Join us and start your premium shopping experience"}
          </p>
        </div>

        {/* Inputs */}
        <div className="mt-10 flex flex-col gap-5">
          {state === "Sign Up" && (
            <input
              type="text"
              placeholder="Full Name"
              className="h-14 px-5 rounded-xl border border-gray-300 outline-none
              focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20
              transition text-gray-700"
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="h-14 px-5 rounded-xl border border-gray-300 outline-none
            focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20
            transition text-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="h-14 px-5 rounded-xl border border-gray-300 outline-none
            focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20
            transition text-gray-700"
          />
        </div>

        {/* Button */}
        <button
          className="w-full h-14 mt-8 rounded-xl bg-gray-900 text-white text-lg font-semibold
          transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:-translate-y-[1px]"
        >
          {state === "Login" ? "Sign In" : "Create Account"}
        </button>

        {/* Toggle */}
        <p className="mt-8 text-center text-gray-600 text-sm">
          {state === "Login" ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="font-semibold text-gray-900 cursor-pointer hover:underline"
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="font-semibold text-gray-900 cursor-pointer hover:underline"
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </section>
  );
}