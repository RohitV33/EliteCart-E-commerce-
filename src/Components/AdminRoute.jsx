import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "../Context/AdminContext";

export default function AdminRoute() {
  const { isAdmin } = useContext(AdminContext);

  return isAdmin ? <Outlet /> : <Navigate to="/admin/login" />;
}