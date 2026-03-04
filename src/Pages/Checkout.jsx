import { useContext } from "react";
import { ShopContext } from "../Context/Context";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";

export default function Checkout() {

  const { cart, clearCart } = useContext(ShopContext);
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  // user not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // cart empty
  if (cart.length === 0) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center">
        <p className="text-gray-500 text-lg">
          Your cart is empty. Please add items before checkout.
        </p>
      </section>
    );
  }

  // total price
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const placeOrder = async () => {
    try {

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          cartItems: cart.map((item) => ({
            id: item.id,
            price: Number(item.price),
            quantity: item.quantity,
          })),
          totalAmount: total,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Order failed. Please try again.");
        return;
      }

      clearCart();
      navigate("/success");

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <section className="pt-28 pb-24 px-6 md:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Shipping Details */}
        <div className="bg-white p-8 rounded-2xl shadow border">
          <h2 className="text-2xl font-bold mb-6">Shipping Details</h2>

          <div className="grid grid-cols-1 gap-4">
            <input className="h-12 px-4 border rounded-lg" placeholder="Full Name" />
            <input className="h-12 px-4 border rounded-lg" placeholder="Email" />
            <input className="h-12 px-4 border rounded-lg" placeholder="Phone" />
            <input className="h-12 px-4 border rounded-lg" placeholder="Address" />
            <input className="h-12 px-4 border rounded-lg" placeholder="City" />
            <input className="h-12 px-4 border rounded-lg" placeholder="Postal Code" />
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-2xl shadow border h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="flex flex-col gap-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span className="line-clamp-1">
                  {item.title} × {item.quantity}
                </span>
                <span>
                  ₹{(Number(item.price) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full h-14 rounded-full bg-gray-900 text-white
            font-semibold text-lg hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </div>

      </div>
    </section>
  );
}

