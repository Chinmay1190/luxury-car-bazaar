
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import EmptyState from '@/components/EmptyState';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { items, clearCart, getCartTotal } = useCart();
  
  // Format total in Indian Rupees
  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(getCartTotal());

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <EmptyState
              title="Your cart is empty"
              description="Looks like you haven't added anything to your cart yet."
              actionLabel="Browse Cars"
              actionHref="/shop"
              icon={<ShoppingCart className="h-16 w-16" />}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          
          {/* Cart Items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg">
                {/* Header row for medium and larger screens */}
                <div className="hidden sm:flex items-center px-6 py-4 border-b border-border font-medium">
                  <div className="w-1/5">Image</div>
                  <div className="w-2/5 px-4">Product</div>
                  <div className="w-1/5">Quantity</div>
                  <div className="w-1/5 text-right px-4">Subtotal</div>
                  <div className="w-auto"></div>
                </div>
                
                {/* Cart Items */}
                <div className="px-6">
                  {items.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                
                {/* Cart Actions */}
                <div className="p-6 border-t border-border">
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </Button>
                    <Link to="/shop">
                      <Button variant="ghost">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between border-b border-border pb-4">
                    <span>Subtotal</span>
                    <span>{formattedTotal}</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-4">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between border-b border-border pb-4">
                    <span>Tax</span>
                    <span>Included</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-gold">{formattedTotal}</span>
                  </div>
                </div>
                
                <Link to="/checkout">
                  <Button className="w-full bg-gold hover:bg-gold-dark text-white">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
