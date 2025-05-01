
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Car } from '../data/cars';
import { useToast } from '@/components/ui/use-toast';

interface CartItem extends Car {
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Car) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('luxuryCarCart');
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setItems(parsedCart);
      } catch (error) {
        console.error('Failed to parse cart data from localStorage', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('luxuryCarCart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Car) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If product is already in cart, increase quantity
        if (existingItem.quantity >= product.stock) {
          toast({
            title: "Stock limit reached",
            description: `Sorry, only ${product.stock} units available.`,
            variant: "destructive",
          });
          return prevItems;
        }
        
        toast({
          title: "Quantity updated",
          description: `${product.brand} ${product.name} quantity increased.`,
        });
        
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item with quantity 1
        toast({
          title: "Added to cart",
          description: `${product.brand} ${product.name} added to your cart.`,
        });
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prevItems) => {
      const itemToRemove = prevItems.find(item => item.id === productId);
      
      if (itemToRemove) {
        toast({
          title: "Removed from cart",
          description: `${itemToRemove.brand} ${itemToRemove.name} removed from your cart.`,
        });
      }
      
      return prevItems.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((prevItems) => {
      const product = prevItems.find(item => item.id === productId);
      
      if (product && quantity > product.stock) {
        toast({
          title: "Stock limit reached",
          description: `Sorry, only ${product.stock} units available.`,
          variant: "destructive",
        });
        quantity = product.stock;
      }
      
      return prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
