import { useState, useContext } from "react";
import { ShopContext } from "../../Context/Context";

const AddProduct = () => {
  const { setAllProducts } = useContext(ShopContext);

  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.title,
        price: Number(form.price),
        image: form.image,
        category: form.category,
      }),
    });

    const data = await res.json();

    // UI update (no reload)
    setAllProducts((prev) => [
      ...prev,
      { id: data.productId, ...form },
    ]);

    setForm({ title: "", price: "", image: "", category: "" });
  };

  return (
    <div className="p-10 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Add Product (Admin)</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Product name"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;