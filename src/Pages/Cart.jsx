import { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(ShopContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="pt-28 pb-24 px-6 md:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">

            {/* Cart Items */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 object-contain"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-9 h-9 rounded-full border text-lg
                            hover:bg-gray-100 transition"
                        >
                            −
                        </button>

                        <span className="min-w-[24px] text-center font-semibold">
                            {item.quantity}
                        </span>

                        <button
                            onClick={() => increaseQty(item.id)}
                            className="w-9 h-9 rounded-full border text-lg
                            hover:bg-gray-100 transition"
                        >
                            +
                        </button>
                        </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-medium text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="font-semibold text-gray-900">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between py-3 border-b text-gray-600">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-3 border-b text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between py-4 text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <button className="mt-6 w-full h-14 rounded-full bg-gray-900 text-white">
                    Proceed to Checkout
                </button>
                </Link>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}