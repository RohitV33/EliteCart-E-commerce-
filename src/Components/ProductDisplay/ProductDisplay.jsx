import { useContext, useState } from "react";
import { ShopContext } from "../../Context/Context";

export default function ProductDisplay({ product }) {
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* LEFT : IMAGES */}
        <div className="flex flex-col md:flex-row gap-4">
          
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 order-2 md:order-1 overflow-x-auto md:overflow-visible">
            {[1,2,3].map((_, i) => (
              <img
                key={i}
                src={product.image}
                alt=""
                className="w-20 h-20 object-contain bg-white p-2 border rounded-lg cursor-pointer hover:border-gray-900 transition"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-50 rounded-2xl p-6 flex items-center justify-center order-1 md:order-2">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-[420px] w-full object-contain hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* RIGHT : INFO */}
        <div className="flex flex-col gap-6">

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {product.title}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-[#ff4141]">
            ★★★★☆
            <span className="text-gray-500 text-sm">(122 Reviews)</span>
          </div>

          {/* Price */}
          <div className="text-3xl font-extrabold text-gray-900">
            ${product.price.toFixed(2)}
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {product.description}
          </p>

          {/* Sizes */}
          <div>
            <p className="font-semibold text-gray-700 mb-3">Select Size</p>
            <div className="flex flex-wrap gap-3">
              {["S","M","L","XL"].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 rounded-lg border transition font-medium
                    ${selectedSize === size
                      ? "bg-gray-900 text-white"
                      : "bg-white hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => addToCart(product)}
            className="mt-4 w-full md:w-2/3 h-14 bg-[#ff4141] text-white rounded-xl font-semibold text-lg
                       hover:bg-red-500 transition shadow-lg hover:shadow-xl"
          >
            ADD TO CART
          </button>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
            <span>🚚 Free Shipping</span>
            <span>🔁 7 Days Return</span>
            <span>🔒 Secure Payment</span>
          </div>

        </div>
      </div>
    </div>
  );
}