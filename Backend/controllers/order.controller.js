import pool from "../db.js";

export const createOrder = async (req, res) => {
  const { cartItems, totalAmount } = req.body;

  try {
    // 1. Order insert
    const [orderResult] = await pool.query(
      "INSERT INTO orders (total_amount, status) VALUES (?, 'pending')",
      [totalAmount]
    );

    const orderId = orderResult.insertId;

    // 2. Order items insert
    for (let item of cartItems) {
      await pool.query(
        `INSERT INTO order_items 
         (order_id, product_id, title, price, quantity)
         VALUES (?, ?, ?, ?, ?)`,
        [
          orderId,
          item.id,
          item.title || item.name,
          item.price,
          item.quantity
        ]
      );
    }

    res.status(201).json({ message: "Order placed", orderId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Order failed" });
  }
};