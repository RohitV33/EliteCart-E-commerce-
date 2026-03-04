import { createContext, useState } from "react";

export const AdminContext = createContext(null);

export default function AdminContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(
    !!localStorage.getItem("adminToken")
  );

  const loginAdmin = async (password) => {
    const res = await fetch(
      "http://localhost:5000/api/admin/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      }
    );

    if (!res.ok) {
      throw new Error("Invalid admin password");
    }

    const data = await res.json();
    localStorage.setItem("adminToken", data.token);
    setIsAdmin(true);
  };

  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
  };

  return (
    <AdminContext.Provider
      value={{ isAdmin, loginAdmin, logoutAdmin }}
    >
      {children}
    </AdminContext.Provider>
  );
}