import { useContext, useEffect } from "react";
import { ShopContext } from "../Context/Context";
import Item from "../Components/Item/Item";

export default function ShopCategory({ category }) {
  const { allProducts } = useContext(ShopContext);

  useEffect(() => {
    console.log("ALL PRODUCTS:", allProducts);
    console.log("CURRENT CATEGORY:", category);
  }, [allProducts, category]);

  const filteredProducts = allProducts.filter(
    (item) =>
      item.category &&
      item.category.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="flex mx-auto w-4/5 justify-between items-center my-4 text-gray-600 text-sm md:text-base">
        <p>
          <span className="font-semibold text-black">Showing Category:</span>{" "}
          {category}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto w-4/5 my-12">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center">
            No products found.
          </p>
        ) : (
          filteredProducts.map((item) => (
            <Item key={item.id} product={item} />
          ))
        )}
      </div>
    </div>
  );
}