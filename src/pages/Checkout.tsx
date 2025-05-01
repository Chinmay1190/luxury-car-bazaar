
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CheckoutForm from '@/components/CheckoutForm';
import { useCart } from '@/context/CartContext';
import { useNavigate } from 'react-router-dom';
import EmptyState from '@/components/EmptyState';
import { ShoppingCart } from 'lucide-react';

const Checkout = () => {
  const { items } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <EmptyState
              title="Your cart is empty"
              description="You need to add items to your cart before proceeding to checkout."
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          </div>
          
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
