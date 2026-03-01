import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export default function ShopContextProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState(() => {
  const storedCart = localStorage.getItem("elitecart_cart");
  return storedCart ? JSON.parse(storedCart) : [];
});

useEffect(() => {
  localStorage.setItem("elitecart_cart", JSON.stringify(cart));
}, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
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

  const clearCart = () => {
  setCart([]);
  localStorage.removeItem("elitecart_cart");
};

 
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setAllProducts(data));
  }, []);

  const contextValue = {
    allProducts,
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}