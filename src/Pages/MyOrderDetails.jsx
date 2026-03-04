
import { useEffect, useState, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function MyOrderDetails() {

  const { id } = useParams();
  const { token, user } = useContext(AuthContext);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // redirect if not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {

    const fetchItems = async () => {
      try {

        const res = await fetch(`http://localhost:5000/api/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setItems(data);
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();

  }, [id, token]);

  if (loading) {
    return (
      <div className="pt-28 text-center text-gray-500">
        Loading order details...
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-28 text-center text-gray-500">
        No items found for this order
      </div>
    );
  }

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="pt-28 px-6 md:px-20 pb-16">

      <h1 className="text-3xl font-bold mb-8">
        Order #{id} Details
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border rounded-lg overflow-hidden">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>

          <tbody>

            {items.map((item) => (

              <tr key={item.id} className="border-t text-center">

                <td className="p-3 text-left">
                  {item.title}
                </td>

                <td className="p-3">
                  ₹{item.price}
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

          <tfoot>
            <tr className="border-t bg-gray-50 font-bold">
              <td className="p-3 text-left">Total</td>
              <td></td>
              <td></td>
              <td className="p-3">₹{total.toFixed(2)}</td>
            </tr>
          </tfoot>

        </table>

      </div>

    </div>
  );
}

