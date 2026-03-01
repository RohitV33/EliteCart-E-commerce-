import { Link } from "react-router-dom";

export default function Breadcrumb({ product }) {
  return (
    <div className="flex flex-wrap items-center gap-2 px-4 md:px-20 py-6 text-gray-500 text-sm font-medium capitalize">

      <Link to="/" className="hover:text-black transition">
        HOME
      </Link>

      <span>&gt;</span>

      <Link to="/products" className="hover:text-black transition">
        SHOP
      </Link>

      <span>&gt;</span>

      <Link
        to={
          product.category === "men's clothing"
            ? "/mens"
            : product.category === "women's clothing"
            ? "/womens"
            : "/jewelry"
        }
        className="hover:text-black transition"
      >
        {product.category}
      </Link>

      <span>&gt;</span>

      <span className="text-black truncate max-w-[200px]">
        {product.title}
      </span>
    </div>
  );
}