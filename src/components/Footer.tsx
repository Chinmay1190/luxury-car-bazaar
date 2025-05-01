
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-gold-dark via-gold to-gold-light text-transparent bg-clip-text">
              Luxury Car Bazaar
            </h3>
            <p className="text-muted-foreground">
              India's premier luxury and sports car marketplace, bringing the world's finest automobiles to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-gold transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-gold transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-muted-foreground hover:text-gold transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-gold transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-gold transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic space-y-2 text-muted-foreground">
              <p>1234 Luxury Lane</p>
              <p>New Delhi, 110001</p>
              <p>India</p>
              <p className="mt-4">
                <a href="mailto:info@luxurycarbazaar.com" className="hover:text-gold transition-colors">
                  info@luxurycarbazaar.com
                </a>
              </p>
              <p>
                <a href="tel:+911234567890" className="hover:text-gold transition-colors">
                  +91 12345 67890
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Luxury Car Bazaar. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
