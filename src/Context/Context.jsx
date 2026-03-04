import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("elitecart_cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });


  useEffect(() => {
    localStorage.setItem("elitecart_cart", JSON.stringify(cart));
  }, [cart]);

 
  useEffect(() => {
    fetch("https://elitecar.onrender.com/api/products")
      .then(res => res.json())
      .then(data => setAllProducts(data))
      .catch(err => console.error(err));
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(item => item.id === product.id);
      if (found) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("elitecart_cart");
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      setAllProducts(prev =>
        prev.filter(product => product.id !== id)
      );
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  const contextValue = {
    allProducts,
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
    deleteProduct,
    isAdmin,
    setIsAdmin,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}