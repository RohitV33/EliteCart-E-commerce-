import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function AdminOrderDetails() {
  const { orderId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {
    return (
      <div className="p-10 text-lg font-semibold">
        Loading order details...
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Order #{orderId} Items
        </h1>

        <Link
          to="/admin/orders"
          className="text-blue-600 underline"
        >
          ← Back to Orders
        </Link>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500">No items found for this order.</p>
      ) : (
        <table className="w-full border rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Qty</th>
              <th className="p-3 text-left">Total</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">
                  {item.title || "Product"}
                </td>
                <td className="p-3">
                  ₹{Number(item.price).toFixed(2)}
                </td>
                <td className="p-3">
                  {item.quantity}
                </td>
                <td className="p-3 font-semibold">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}