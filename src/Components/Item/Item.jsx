import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Context';

export default function Item({ product }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="w-full group hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-2xl p-4 bg-white rounded-2xl flex flex-col justify-between border border-gray-50">
      <Link to={`/product/${product.id}`} className="overflow-hidden rounded-xl bg-gray-50">
        <img src={product.image} alt={product.title} className="h-56 w-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
      </Link>
      <div className="mt-5">
        <p className="truncate text-gray-800 font-semibold">{product.title}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="font-bold text-xl">${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product)} className="bg-black text-white px-5 py-2.5 rounded-xl text-sm hover:bg-gray-800 hover:shadow-lg active:scale-95 transition-all">Add</button>
        </div>
      </div>
    </div>
  );
}