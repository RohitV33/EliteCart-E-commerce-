import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function MyOrders() {

  const { token } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const fetchOrders = async () => {
      try {

        const res = await fetch("http://localhost:5000/api/orders/my", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok) {
          setOrders(data);
        }

      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();

  }, [token]);

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      <table className="w-full border">

        <thead className="bg-gray-100">
          <tr>
            <th className="p-3">Order ID</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Date</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (

            <tr key={order.id} className="border-t text-center">

              <td className="p-3">{order.id}</td>

              <td className="p-3">₹{order.total_amount}</td>

              <td className="p-3 capitalize">{order.status}</td>

              <td className="p-3">
                {new Date(order.created_at).toLocaleString()}
              </td>

              <td className="p-3">
                <Link
                  to={`/my-orders/${order.id}`}
                  className="text-blue-600 underline"
                >
                  View
                </Link>
              </td>

            </tr>

          ))}
        </tbody>

      </table>

    </div>
  );
}

