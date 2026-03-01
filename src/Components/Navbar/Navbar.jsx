import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/Context";

export default function Navbar() {
  const { cart } = useContext(ShopContext);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">

        {/* TEXT LOGO */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900"
        >
          Elite<span className="text-gray-500">Cart</span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-10 text-base font-medium text-gray-600">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Men", path: "/mens" },
            { name: "Women", path: "/womens" },
            { name: "Jewelry", path: "/jewelry" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-gray-900 font-semibold"
                      : "hover:text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <Link to="/login">
            <button className="hidden md:block px-6 py-2 rounded-full border border-gray-900 text-gray-900 font-medium
              transition-all duration-300 hover:bg-gray-900 hover:text-white">
              Login
            </button>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative">
            <div className="px-5 py-2 rounded-full bg-gray-900 text-white font-medium
              transition-all duration-300 hover:bg-gray-800">
              Cart
            </div>

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center
                rounded-full bg-red-500 text-white text-xs font-bold">
                {cart.length}
              </span>
            )}
          </Link>

        </div>
      </nav>
    </header>
  );
}