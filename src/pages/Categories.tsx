
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cars, categories } from '@/data/cars';
import CategoryCard from '@/components/CategoryCard';

const categoryImages: Record<string, string> = {
  sports: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=2071&auto=format&fit=crop',
  luxury: 'https://images.unsplash.com/photo-1604705528621-83f1f9540be2?q=80&w=2071&auto=format&fit=crop',
  supercar: 'https://images.unsplash.com/photo-1632441730372-d8607ef679f2?q=80&w=2071&auto=format&fit=crop',
  hypercar: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=2070&auto=format&fit=crop',
  classic: 'https://images.unsplash.com/photo-1638618164682-12b986972402?q=80&w=2070&auto=format&fit=crop'
};

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Browse By Category</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive collection of luxury and performance vehicles by category.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.filter(cat => cat.id !== 'all').map((category) => (
              <CategoryCard 
                key={category.id}
                name={category.name}
                id={category.id}
                image={categoryImages[category.id]}
                count={cars.filter(car => car.category === category.id).length}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
