import express from "express";
import pool from "../db.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

/* ================= USER: PLACE ORDER ================= */
router.post("/", protect, async (req, res) => {
  const { cartItems, totalAmount } = req.body;
  const userId = req.user.id;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 🔹 order with user_id
    const [orderResult] = await connection.query(
      "INSERT INTO orders (user_id, total_amount) VALUES (?, ?)",
      [userId, totalAmount]
    );

    const orderId = orderResult.insertId;

    // 🔹 order items
    for (const item of cartItems) {
      await connection.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES (?, ?, ?, ?)`,
        [orderId, item.id, item.quantity, item.price]
      );
    }

    await connection.commit();

    res.status(201).json({
      message: "Order placed successfully",
      orderId,
    });
  } catch (error) {
    await connection.rollback();
    console.error(error);
    res.status(500).json({ message: "Order failed" });
  } finally {
    connection.release();
  }
});

/* ================= USER: MY ORDERS ================= */
router.get("/my", protect, async (req, res) => {
  const userId = req.user.id;

  const [orders] = await pool.query(
    "SELECT * FROM orders WHERE user_id=? ORDER BY created_at DESC",
    [userId]
  );

  res.json(orders);
});

/* ================= USER: ORDER ITEMS ================= */
router.get("/:id", protect, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  // 🔒 ensure user owns the order
  const [order] = await pool.query(
    "SELECT id FROM orders WHERE id=? AND user_id=?",
    [id, userId]
  );

  if (order.length === 0) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  const [items] = await pool.query(
    `
    SELECT 
      oi.id,
      oi.quantity,
      oi.price,
      p.name AS title
    FROM order_items oi
    JOIN products p ON oi.product_id = p.id
    WHERE oi.order_id = ?
    `,
    [id]
  );

  res.json(items);
});

/* ================= ADMIN: GET ALL ORDERS ================= */
router.get("/", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const [orders] = await pool.query(
    "SELECT * FROM orders ORDER BY created_at DESC"
  );

  res.json(orders);
});

/* ================= ADMIN: UPDATE ORDER STATUS ================= */
router.put("/:id/status", protect, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }

  const { id } = req.params;
  const { status } = req.body;

  await pool.query(
    "UPDATE orders SET status=? WHERE id=?",
    [status, id]
  );

  res.json({ message: "Order status updated" });
});

export default router;