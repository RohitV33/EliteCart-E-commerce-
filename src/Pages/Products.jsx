import { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const { allProducts, deleteProduct } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Explore Products
        </h1>
        <p className="text-gray-500 hidden md:block">
          Premium styles curated for you
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {allProducts.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            className="group cursor-pointer rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Image */}
            <div className="h-60 flex items-center justify-center bg-gray-50">
              <img
                src={p.image}
                alt={p.title || p.name}
                className="h-full w-full object-contain p-4 group-hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">
              <h3 className="font-semibold text-base line-clamp-2">
                {p.title || p.name}
              </h3>

              <p className="text-lg font-bold text-gray-900">
                ₹{p.price}
              </p>

              <button className="mt-3 w-full py-2 rounded-xl bg-gray-900 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}