import { useState, useCallback, useEffect } from 'react';
import { Product, CartItem, Cart } from '../types';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>(() => {
    const savedCart = localStorage.getItem('elecdigi-cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    return { items: [], total: 0 };
  });

  useEffect(() => {
    localStorage.setItem('elecdigi-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(
        item => item.product.id === product.id
      );

      let newItems: CartItem[];
      if (existingItemIndex >= 0) {
        newItems = [...prevCart.items];
        newItems[existingItemIndex].quantity += quantity;
      } else {
        newItems = [...prevCart.items, { product, quantity }];
      }

      const total = newItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );

      return { items: newItems, total };
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prevCart => {
      const newItems = prevCart.items.filter(
        item => item.product.id !== productId
      );
      const total = newItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      return { items: newItems, total };
    });
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const newItems = prevCart.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      const total = newItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      return { items: newItems, total };
    });
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart({ items: [], total: 0 });
  }, []);

  const getItemCount = useCallback(() => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart.items]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount
  };
};
