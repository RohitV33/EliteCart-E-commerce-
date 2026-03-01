import { useContext } from "react";
import { ShopContext } from "../../Context/Context";
import Item from "../Item/Item";

export default function NewCollections() {
  const { allProducts } = useContext(ShopContext);
  const newCollection = allProducts.slice(8, 16);

  return (
    <section className="bg-gray-50/60 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center group">
          <span className="uppercase text-sm tracking-[0.3em] text-gray-500">
            Fresh Arrivals
          </span>

          <h1 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">
            New Collections
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gray-900 transition-all duration-300 group-hover:w-28"></div>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Explore our latest styles designed to elevate your everyday look.
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {newCollection.map((item) => (
            <div
              key={item.id}
              className="transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Item product={item} />
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-16 flex justify-center">
          <button className="px-10 h-14 rounded-full border border-gray-900 text-gray-900 text-lg font-medium
            transition-all duration-300 hover:bg-gray-900 hover:text-white hover:shadow-xl">
            View All Collections
          </button>
        </div>

      </div>
    </section>
  );
}