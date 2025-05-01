
import React from 'react';
import { Link } from 'react-router-dom';
import { cars } from '@/data/cars';
import CarCard from './CarCard';

const FeaturedCars = () => {
  // Get featured cars or first 4 if none are marked as featured
  const featuredCars = cars.filter(car => car.featured).length > 0 
    ? cars.filter(car => car.featured) 
    : cars.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Vehicles</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the pinnacle of automotive engineering with our carefully selected featured vehicles.
          </p>
        </div>
        
        <div className="car-grid">
          {featuredCars.map((car, index) => (
            <CarCard key={car.id} car={car} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/shop">
            <button className="bg-gradient-to-r from-gold-dark to-gold text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity">
              View All Vehicles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
