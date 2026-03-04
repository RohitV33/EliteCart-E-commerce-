import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ShopContext } from "../../Context/Context";
import { AdminContext } from "../../Context/AdminContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { isAdmin, logoutAdmin } = useContext(AdminContext);
  const { cart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Elite<span className="text-gray-500">Cart</span>
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink to="/" className="hover:text-black">Home</NavLink>
          <NavLink to="/products" className="hover:text-black">Products</NavLink>
          <NavLink to="/men" className="hover:text-black">Men</NavLink>
          <NavLink to="/women" className="hover:text-black">Women</NavLink>
          <NavLink to="/jewelry" className="hover:text-black">Jewelry</NavLink>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

          {/* USER LOGGED IN */}
          {user && (
            <NavLink
              to="/my-orders"
              className="px-4 py-2 rounded-full border text-sm font-medium hover:bg-gray-100"
            >
              My Orders
            </NavLink>
          )}

          {/* LOGIN / LOGOUT */}
          {!user ? (
            <NavLink
              to="/login"
              className="px-5 py-2 rounded-full border text-sm font-semibold hover:bg-gray-100"
            >
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full border text-sm font-semibold hover:bg-gray-100"
            >
              Logout
            </button>
          )}

          {/* CART */}
          <NavLink
            to="/cart"
            className="relative px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center rounded-full bg-red-500 text-white">
                {cart.length}
              </span>
            )}
          </NavLink>

        </div>
        <div>
      {isAdmin && (
        <button
          onClick={logoutAdmin}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Admin Logout
        </button>
      )}
    </div>
      </nav>
    </header>
    
  );
}