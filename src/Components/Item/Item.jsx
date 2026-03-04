import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/Context";
import { AdminContext } from "../../Context/AdminContext";

export default function Item({ product }) {
  const { addToCart, deleteProduct } = useContext(ShopContext);
  const { isAdmin } = useContext(AdminContext); 

  return (
    <div className="w-full group hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-2xl p-4 bg-white rounded-2xl flex flex-col justify-between border border-gray-50">
      
      <Link to={`/product/${product.id}`} className="overflow-hidden rounded-xl bg-gray-50">
        <img
          src={product.image}
          alt={product.title || product.name}
          className="h-56 w-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
        />
      </Link>

      <div className="mt-5">
        <p className="truncate text-gray-800 font-semibold">
          {product.title || product.name}
        </p>

        <div className="flex justify-between items-center mt-3">
          <p className="font-bold text-xl">
            ₹{Number(product.price).toFixed(2)}
          </p>

          {/* USER */}
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-5 py-2.5 rounded-xl text-sm hover:bg-gray-800 hover:shadow-lg active:scale-95 transition-all"
          >
            Add
          </button>
        </div>

        {/* ADMIN */}
        {isAdmin && (
          <button
            onClick={() => deleteProduct(product.id)}
            className="mt-3 w-full bg-red-600 text-white px-5 py-2 rounded-xl text-sm hover:bg-red-700 active:scale-95 transition-all"
          >
            Delete Product
          </button>
        )}
      </div>
    </div>
  );
}