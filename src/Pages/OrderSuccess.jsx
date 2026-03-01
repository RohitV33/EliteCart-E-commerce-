import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg border text-center max-w-md">

      
        <div className="mx-auto mb-6 h-20 w-20 flex items-center justify-center
          rounded-full bg-green-100 text-green-600 text-4xl">
          ✓
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900">
          Order Placed!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with <span className="font-semibold">EliteCart</span>.
          Your order has been successfully placed.
        </p>

        <Link to="/">
          <button className="mt-8 w-full h-14 rounded-full bg-gray-900 text-white
            font-semibold text-lg hover:bg-gray-800 transition">
            Continue Shopping
          </button>
        </Link>
      </div>
    </section>
  );
}