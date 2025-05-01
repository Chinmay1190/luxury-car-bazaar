
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = `LCB${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
  
  // Redirect to home if this page is accessed directly
  useEffect(() => {
    const hasCheckedOut = localStorage.getItem('luxuryCarCheckout');
    
    if (!hasCheckedOut) {
      navigate('/');
    } else {
      localStorage.removeItem('luxuryCarCheckout');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <div className="h-24 w-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <Check className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your purchase. Your order has been received and is being processed.
            </p>
            
            <div className="bg-muted p-4 rounded-md mb-8">
              <h3 className="font-medium mb-2">Order Information</h3>
              <p className="text-muted-foreground mb-1">Order Number: <span className="font-medium text-foreground">{orderNumber}</span></p>
              <p className="text-muted-foreground">A confirmation email has been sent to your email address.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link to="/">
                <Button className="bg-gold hover:bg-gold-dark text-white">
                  Back to Home
                </Button>
              </Link>
              <Link to="/shop">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Success;
