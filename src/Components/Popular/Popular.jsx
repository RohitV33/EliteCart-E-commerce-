import { useContext } from "react";
import { ShopContext } from "../../Context/Context";
import Item from "../Item/Item";

export default function Popular() {
  const { allProducts } = useContext(ShopContext);
  const popularWomen = allProducts
    .filter((item) => item.category === "women's clothing")
    .slice(0, 4);

  return (
    <section className="flex flex-col items-center gap-6 my-28 px-4">
      
      {/* Heading */}
      <div className="text-center group">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-wide transition-transform duration-300 group-hover:-translate-y-1">
          Popular in Women
        </h1>
        <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gray-900 transition-all duration-300 group-hover:w-32"></div>
        <p className="mt-4 text-gray-600 max-w-xl">
          Most loved styles picked just for you
        </p>
      </div>

      {/* Products Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-7xl">
        {popularWomen.map((item) => (
          <div
            key={item.id}
            className="transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <Item product={item} />
          </div>
        ))}
      </div>
    </section>
  );
}