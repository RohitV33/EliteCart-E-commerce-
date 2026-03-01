import { useContext } from "react";
import { ShopContext } from "../../Context/Context";
import Item from "../Item/Item";

export default function RelatedProducts({ category }) {
  const { allProducts } = useContext(ShopContext);

  const related = allProducts
    .filter((item) => item.category === category)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="mt-24 mb-32 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
            Related Products
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            You might also like these
          </p>
          <div className="mt-4 h-1 w-24 rounded-full bg-gray-900" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {related.map((item) => (
            <div
              key={item.id}
              className="transform transition duration-300 hover:-translate-y-2"
            >
              <Item product={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}