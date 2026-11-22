import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

export type Product = { id: number; name: string; price: number; image: string; };
type CartItem = Product & { qty: number };
type CartContextType = {
  cart: CartItem[];
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('java-cup-cart');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => { localStorage.setItem('java-cup-cart', JSON.stringify(cart)); }, [cart]);
  const addToCart = (p: Product) => {
    setCart(prev => {
      const found = prev.find(i => i.id === p.id);
      if (found) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
  };
  const removeFromCart = (id: number) => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) return removeFromCart(id);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };
  const clearCart = () => setCart([]);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, total }}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext)!;