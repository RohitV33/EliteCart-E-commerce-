import express from "express";
import pool from "./db.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import orderRoutes from "./routes/order.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminAuthRoutes from "./routes/adminAuth.routes.js";



const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://elitecart.vercel.app"
}));
app.use("/api/auth", authRoutes);     
app.use("/api/orders", orderRoutes);   
app.use("/api/admin", adminAuthRoutes);

// delete api

app.delete("/api/products/:id", adminAuth,async (req, res) => {
  const { id } = req.params;

  const [result] = await pool.query(
    "DELETE FROM products WHERE id=?",
    [id]
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({ message: "Product deleted successfully" });
});

// update or put

app.put("/api/products/:id",adminAuth, async (req, res) => {
  const { id } = req.params;
  const { name, price, category, description } = req.body;

  const [result] = await pool.query(
    "UPDATE products SET name=?, price=?, category=?, description=? WHERE id=?",
    [name, price, category, description, id]
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({ message: "Product updated successfully" });
});

// GET all products
app.get("/api/products", async (req, res) => {
  const [products] = await pool.query("SELECT * FROM products");
  res.json(products);
});

// GET product by Id
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  const [rows] = await pool.query(
    "SELECT * FROM products WHERE id = ?",
    [id]
  );

  if (rows.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(rows[0]);
});

// POST product
app.post("/api/products",adminAuth, async (req, res) => {
  const { name, price, category, description, image } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price required" });
  }

    const [result] = await pool.query(
      "INSERT INTO products (name, price, category, description, image) VALUES (?, ?, ?, ?, ?)",
      [name, price, category, description, image]
    );

  res.status(201).json({
    message: "Product added successfully",
    productId: result.insertId,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});