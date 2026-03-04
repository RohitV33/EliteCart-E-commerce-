import express from "express";
import pool from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import orderRoutes from "./routes/order.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminAuthRoutes from "./routes/adminAuth.routes.js";
import { adminAuth } from "./middleware/adminAuth.js";




const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    "https://elitecart.vercel.app"
  ],
  credentials: true
}));

app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1");
    res.json("Database connected ✅");
  } catch (err) {
    console.log(err);
    res.json("Database connection failed ❌");
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminAuthRoutes);


// GET all products
app.get("/api/products", async (req, res) => {
  try {
    const [products] = await pool.query("SELECT * FROM products");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET product by id
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  const [rows] = await pool.query(
    "SELECT * FROM products WHERE id=?",
    [id]
  );

  if (rows.length === 0)
    return res.status(404).json({ message: "Product not found" });

  res.json(rows[0]);
});

// ADD product
app.post("/api/products", adminAuth, async (req, res) => {
  const { name, price, category, description, image } = req.body;

  const [result] = await pool.query(
    "INSERT INTO products (name,price,category,description,image) VALUES (?,?,?,?,?)",
    [name, price, category, description, image]
  );

  res.json({ message: "Product added", id: result.insertId });
});

// UPDATE product
app.put("/api/products/:id", adminAuth, async (req, res) => {
  const { id } = req.params;
  const { name, price, category, description } = req.body;

  const [result] = await pool.query(
    "UPDATE products SET name=?,price=?,category=?,description=? WHERE id=?",
    [name, price, category, description, id]
  );

  res.json({ message: "Product updated" });
});

// DELETE product
app.delete("/api/products/:id", adminAuth, async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM products WHERE id=?", [id]);

  res.json({ message: "Product deleted" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});