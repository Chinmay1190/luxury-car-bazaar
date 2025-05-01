
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/data/cars';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface CartItemProps {
  item: Car & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };
  
  // Format price in Indian Rupees
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(item.price);
  
  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(item.price * item.quantity);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-6 border-b border-border last:border-0">
      {/* Image */}
      <div className="w-full sm:w-1/5 mb-4 sm:mb-0">
        <Link to={`/product/${item.id}`}>
          <img
            src={item.image}
            alt={`${item.brand} ${item.name}`}
            className="w-full h-24 object-cover rounded-md"
          />
        </Link>
      </div>
      
      {/* Details */}
      <div className="w-full sm:w-2/5 px-0 sm:px-4">
        <Link to={`/product/${item.id}`} className="block mb-1">
          <h3 className="font-medium text-lg hover:text-gold transition-colors">
            {item.brand} {item.name}
          </h3>
        </Link>
        <p className="text-muted-foreground text-sm mb-2">
          {item.specs.engine} | {item.specs.power}
        </p>
        <p className="text-sm font-medium text-gold">{formattedPrice}</p>
      </div>
      
      {/* Quantity */}
      <div className="w-full sm:w-1/5 mt-4 sm:mt-0 flex items-center">
        <Input
          type="number"
          min="1"
          max={item.stock}
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-20"
        />
      </div>
      
      {/* Subtotal */}
      <div className="w-full sm:w-1/5 mt-4 sm:mt-0 text-right sm:px-4">
        <span className="font-semibold">{formattedTotal}</span>
      </div>
      
      {/* Remove Button */}
      <div className="w-full sm:w-auto mt-4 sm:mt-0">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => removeFromCart(item.id)}
          className="text-muted-foreground hover:text-destructive"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
