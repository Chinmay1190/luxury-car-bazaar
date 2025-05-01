
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Sun, Moon } from 'lucide-react';

const Header = () => {
  const { getCartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const cartItemCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light text-transparent bg-clip-text">
              Luxury Car Bazaar
            </h1>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-foreground hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="text-foreground hover:text-gold transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-foreground hover:text-gold transition-colors">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-foreground" />
              )}
            </Button>
            
            <Link to="/cart" className="relative inline-flex">
              <Button variant="outline" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              {cartItemCount > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 bg-gold text-white h-5 w-5 flex items-center justify-center rounded-full p-0"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center mt-4">
          <div className="flex space-x-6">
            <Link to="/" className="text-sm text-foreground hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sm text-foreground hover:text-gold transition-colors">
              Shop
            </Link>
            <Link to="/categories" className="text-sm text-foreground hover:text-gold transition-colors">
              Categories
            </Link>
            <Link to="/about" className="text-sm text-foreground hover:text-gold transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
