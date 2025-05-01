
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarCard from '@/components/CarCard';
import FilterBar from '@/components/FilterBar';
import { cars } from '@/data/cars';
import { Loader2 } from 'lucide-react';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  
  // State for filterable and sortable display of products
  const [displayCars, setDisplayCars] = useState(cars);
  const [loading, setLoading] = useState(true);
  const [maxPrice, setMaxPrice] = useState(0);
  
  // Find the maximum price for the price range slider
  useEffect(() => {
    const highestPrice = Math.max(...cars.map(car => car.price));
    setMaxPrice(highestPrice);
    setLoading(false);
  }, []);
  
  // Apply initial category filter from URL params
  useEffect(() => {
    if (categoryParam !== 'all') {
      const filtered = cars.filter(car => car.category === categoryParam);
      setDisplayCars(filtered);
    } else {
      setDisplayCars(cars);
    }
  }, [categoryParam]);
  
  // Filter handlers
  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setDisplayCars(cars);
    } else {
      const filtered = cars.filter(car => car.category === category);
      setDisplayCars(filtered);
    }
  };
  
  const handleBrandChange = (brand: string) => {
    if (brand === 'All Brands') {
      // If already filtered by category, maintain that filter
      if (categoryParam !== 'all') {
        const filtered = cars.filter(car => car.category === categoryParam);
        setDisplayCars(filtered);
      } else {
        setDisplayCars(cars);
      }
    } else {
      let filtered = cars.filter(car => car.brand === brand);
      
      // If also filtered by category, apply both filters
      if (categoryParam !== 'all') {
        filtered = filtered.filter(car => car.category === categoryParam);
      }
      
      setDisplayCars(filtered);
    }
  };
  
  const handlePriceChange = (priceRange: [number, number]) => {
    let filtered = cars.filter(
      car => car.price >= priceRange[0] && car.price <= priceRange[1]
    );
    
    // Maintain category filter if active
    if (categoryParam !== 'all') {
      filtered = filtered.filter(car => car.category === categoryParam);
    }
    
    setDisplayCars(filtered);
  };
  
  const handleSortChange = (sort: string) => {
    const sorted = [...displayCars];
    
    switch (sort) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name-az':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-za':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Featured order (default)
        sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setDisplayCars(sorted);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Collection</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive selection of the world's finest automobiles.
            </p>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-gold" />
            </div>
          ) : (
            <>
              <FilterBar
                onCategoryChange={handleCategoryChange}
                onBrandChange={handleBrandChange}
                onPriceChange={handlePriceChange}
                onSortChange={handleSortChange}
                maxPrice={maxPrice}
              />
              
              {displayCars.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-lg font-medium mb-2">No cars found</h3>
                  <p className="text-muted-foreground">
                    Try changing your filters to find more options.
                  </p>
                </div>
              ) : (
                <div className="car-grid">
                  {displayCars.map((car, index) => (
                    <CarCard key={car.id} car={car} index={index} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
