
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cars } from '@/data/cars';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Check, BadgeIndianRupee } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const car = cars.find(car => car.id === id);
  
  if (!car) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-6">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The product you are looking for does not exist or has been removed.
            </p>
            <Button onClick={() => navigate('/shop')}>
              Back to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Format price in Indian Rupees
  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(car.price);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="overflow-hidden rounded-lg border border-border">
              <img 
                src={car.image}
                alt={`${car.brand} ${car.name}`}
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <div className="mb-6">
                <Badge className="bg-gold text-white mb-2">{car.category.toUpperCase()}</Badge>
                <h1 className="text-3xl font-bold mb-1">{car.brand} {car.name}</h1>
                <div className="flex items-center mb-4">
                  <BadgeIndianRupee className="h-6 w-6 mr-2 text-gold" />
                  <span className="text-2xl font-bold text-gold">{formattedPrice}</span>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {car.description}
                </p>
                
                {/* Key Specifications */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-muted rounded-md p-3">
                    <span className="text-sm text-muted-foreground block">Engine</span>
                    <span className="font-medium">{car.specs.engine}</span>
                  </div>
                  <div className="bg-muted rounded-md p-3">
                    <span className="text-sm text-muted-foreground block">Power</span>
                    <span className="font-medium">{car.specs.power}</span>
                  </div>
                  <div className="bg-muted rounded-md p-3">
                    <span className="text-sm text-muted-foreground block">0-100 km/h</span>
                    <span className="font-medium">{car.specs.acceleration}</span>
                  </div>
                  <div className="bg-muted rounded-md p-3">
                    <span className="text-sm text-muted-foreground block">Top Speed</span>
                    <span className="font-medium">{car.specs.topSpeed}</span>
                  </div>
                </div>
                
                {/* Stock Status */}
                <div className="flex items-center mb-6">
                  {car.stock > 0 ? (
                    <>
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      <span>In Stock ({car.stock} available)</span>
                    </>
                  ) : (
                    <span className="text-destructive">Out of Stock</span>
                  )}
                </div>
                
                {/* Add to Cart Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => addToCart(car)}
                    disabled={car.stock === 0}
                    className="bg-gold hover:bg-gold-dark text-white flex-1"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={() => {
                      addToCart(car);
                      navigate('/cart');
                    }}
                    disabled={car.stock === 0}
                    variant="outline"
                    className="flex-1"
                    size="lg"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Information Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="specifications">
              <TabsList className="w-full grid grid-cols-3 mb-8">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="delivery">Delivery & Returns</TabsTrigger>
              </TabsList>
              <TabsContent value="specifications" className="p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Engine</span>
                    <span>{car.specs.engine}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Power</span>
                    <span>{car.specs.power}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Acceleration</span>
                    <span>{car.specs.acceleration}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Top Speed</span>
                    <span>{car.specs.topSpeed}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Transmission</span>
                    <span>{car.specs.transmission}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Drive Type</span>
                    <span>All Wheel Drive</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Seating Capacity</span>
                    <span>2</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Body Type</span>
                    <span>{car.category === 'luxury' ? 'Sedan' : 'Coupe'}</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="features" className="p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-5">
                  <li>Advanced Driver Assistance Systems</li>
                  <li>Premium Leather Interior</li>
                  <li>Carbon Fiber Components</li>
                  <li>Active Aerodynamics</li>
                  <li>High-Performance Braking System</li>
                  <li>Premium Sound System</li>
                  <li>Advanced Navigation System</li>
                  <li>Smartphone Integration</li>
                  <li>Personalized Driver Modes</li>
                  <li>Configurable Ambient Lighting</li>
                  <li>Climate-Controlled Seats</li>
                  <li>Rear Camera System</li>
                </ul>
              </TabsContent>
              <TabsContent value="delivery" className="p-6 bg-muted rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Delivery Information</h3>
                <p className="mb-4">
                  All vehicles are delivered personally to ensure they arrive in pristine condition.
                  Delivery is included in the purchase price for all locations within mainland India.
                </p>
                <p className="mb-4">
                  Estimated delivery time: 2-4 weeks depending on customization options and current inventory.
                </p>
                
                <h3 className="text-xl font-semibold mb-4 mt-8">Returns Policy</h3>
                <p>
                  We offer a 7-day return policy on all vehicles, subject to inspection and verification
                  that the vehicle has not been driven more than 100 kilometers and remains in the same
                  condition as delivered.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
