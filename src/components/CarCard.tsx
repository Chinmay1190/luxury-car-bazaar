
import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from '@/data/cars';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface CarCardProps {
  car: Car;
  index: number;
}

const CarCard: React.FC<CarCardProps> = ({ car, index }) => {
  const { addToCart } = useCart();
  
  // Format price in Indian Rupees with commas
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(car.price);
  
  // Calculate animation delay based on index
  const animationDelay = `${index * 100}ms`;

  return (
    <Card 
      className="car-card h-full overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-up"
      style={{ animationDelay }}
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${car.id}`}>
          <img 
            src={car.image} 
            alt={`${car.brand} ${car.name}`}
            className="car-image w-full h-48 object-cover transition-transform duration-500"
          />
        </Link>
        
        {car.stock <= 3 && car.stock > 0 && (
          <Badge className="absolute top-2 right-2 bg-amber-500">
            Only {car.stock} Left
          </Badge>
        )}
        
        {car.stock === 0 && (
          <Badge className="absolute top-2 right-2 bg-red-500">
            Sold Out
          </Badge>
        )}
      </div>
      
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-muted-foreground">{car.brand}</p>
            <CardTitle className="text-xl mt-1">
              <Link to={`/product/${car.id}`} className="hover:text-gold transition-colors">
                {car.name}
              </Link>
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="text-sm">
            <span className="text-muted-foreground">Engine: </span>
            <span>{car.specs.engine}</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Power: </span>
            <span>{car.specs.power}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-lg font-semibold text-gold">
          {formattedPrice}
        </div>
        
        <Button 
          onClick={() => addToCart(car)}
          disabled={car.stock === 0}
          variant="outline"
          className="rounded-full"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" /> 
          {car.stock === 0 ? 'Sold Out' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
