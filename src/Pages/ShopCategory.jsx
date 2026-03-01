import { useContext } from 'react';
import { ShopContext } from '../Context/Context';
import Item from '../Components/Item/Item';

export default function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="flex mx-auto w-4/5 justify-between items-center my-4 text-gray-600 text-sm md:text-base">
        <p><span className="font-semibold text-black">Showing Category:</span> {props.category}</p>
        <div className="px-4 py-2 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 bg-white">
          Sort by <span className="ml-2 text-xs">▼</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto w-4/5 my-12">
        {allProducts.map((item, index) => {
          if (props.category === item.category || props.category === "all") {
            return <Item key={index} product={item} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}