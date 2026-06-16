import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.pCode === product.pCode);

      if (exist) {
        return prev.map((item) =>
          item.pCode === product.pCode
            ? { ...item, numberOfProduct: item.numberOfProduct + 1 }
            : item,
        );
      }

      return [
        ...prev,
        {
          pCode: product.pCode,
          title: product.title,
          newPrice: product.newPrice,
          oldPrice: product.oldPrice,
          numberOfProduct: 1,
          img: product.img,
        },
      ];
    });
  };

  const removeFromCart = (pCode) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.pCode === pCode);

      if (!exist) return prev;

      if (exist.numberOfProduct > 1) {
        return prev.map((item) =>
          item.pCode === pCode
            ? { ...item, numberOfProduct: item.numberOfProduct - 1 }
            : item,
        );
      }

      return prev.filter((item) => item.pCode !== pCode);
    });
  };
  const deleteCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
