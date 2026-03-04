import { useContext } from "react";
import { ShopContext } from "../../Context/Context";

const AdminProducts = () => {
  const { allProducts, deleteProduct } = useContext(ShopContext);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Admin – Manage Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {allProducts.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 shadow-md bg-white"
          >
            <img
              src={p.image}
              alt={p.name || p.title}
              className="h-40 w-full object-contain"
            />

            <h3 className="mt-3 font-semibold">
              {p.name || p.title}
            </h3>

            <p className="font-bold mt-1">₹{p.price}</p>

            <button
              onClick={() => deleteProduct(p.id)}
              className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
            >
              Delete Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProducts;