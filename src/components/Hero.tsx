
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop)', 
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Luxury & Performance
          </h1>
          <h2 className="text-xl md:text-3xl mb-6 bg-gradient-to-r from-gold-dark via-gold to-gold-light text-transparent bg-clip-text font-bold">
            India's Premier Car Collection
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-md">
            Experience the thrill of driving the world's most exclusive automobiles.
            Our curated collection features the finest luxury and performance vehicles.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/shop">
              <button className="bg-gradient-to-r from-gold-dark to-gold text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
                Explore Collection
              </button>
            </Link>
            <Link to="/categories">
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors">
                View Categories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
