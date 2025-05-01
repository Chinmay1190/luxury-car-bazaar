
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCars from '@/components/FeaturedCars';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { cars, categories } from '@/data/cars';

const categoryImages: Record<string, string> = {
  sports: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=2071&auto=format&fit=crop',
  luxury: 'https://images.unsplash.com/photo-1604705528621-83f1f9540be2?q=80&w=2071&auto=format&fit=crop',
  supercar: 'https://images.unsplash.com/photo-1632441730372-d8607ef679f2?q=80&w=2071&auto=format&fit=crop',
  hypercar: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=2070&auto=format&fit=crop',
  classic: 'https://images.unsplash.com/photo-1638618164682-12b986972402?q=80&w=2070&auto=format&fit=crop'
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedCars />
        
        {/* Categories Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse By Category</h2>
              <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our extensive collection of vehicles organized by category to find your perfect match.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.filter(cat => cat.id !== 'all').map((category) => (
                <Link 
                  key={category.id} 
                  to={`/shop?category=${category.id}`}
                  className="group relative h-64 overflow-hidden rounded-lg"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${categoryImages[category.id]})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-gray-300 text-sm">
                      {cars.filter(car => car.category === category.id).length} vehicles
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link to="/categories">
                <button className="bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-md hover:bg-gold hover:text-white transition-colors">
                  View All Categories
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1549037173-e3b717902c57?q=80&w=2070&auto=format&fit=crop" 
                  alt="Luxury Car Showroom" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">India's Premier Luxury Car Marketplace</h2>
                <div className="w-24 h-1 bg-gold mb-6"></div>
                <p className="text-muted-foreground mb-6">
                  At Luxury Car Bazaar, we curate only the finest automobiles from around the world and bring them to the Indian market. Our extensive collection represents the pinnacle of automotive engineering and design.
                </p>
                <p className="text-muted-foreground mb-6">
                  With decades of experience in the luxury automobile sector, our team provides unparalleled expertise and service. From rare limited-edition hypercars to elegant luxury sedans, we offer the most exclusive vehicles for the most discerning clients.
                </p>
                <Link to="/about">
                  <button className="bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-md transition-colors">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
