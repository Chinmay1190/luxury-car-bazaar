
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Luxury Car Bazaar</h1>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              India's premier destination for luxury and performance vehicles.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1549037173-e3b717902c57?q=80&w=2070&auto=format&fit=crop" 
                alt="Our Showroom" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-muted-foreground mb-4">
                Founded in 2008, Luxury Car Bazaar began as a vision to bring the world's most exclusive automobiles to the Indian market. What started as a small showroom in Mumbai has now grown into India's largest luxury car retailer with locations in Delhi, Mumbai, Bangalore, and Hyderabad.
              </p>
              <p className="text-muted-foreground">
                Our founder, Raj Mehta, combined his passion for automotive excellence with his business acumen to create a unique experience for discerning car enthusiasts. Today, we are proud to represent the finest marques in automotive history and continue to deliver exceptional service to our customers.
              </p>
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="bg-muted py-16 px-8 rounded-lg mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
              <p className="text-xl font-light italic">
                "To provide the most exclusive automotive experience in India, combining exceptional vehicles with unparalleled service, and to make the journey of luxury car ownership as extraordinary as the cars themselves."
              </p>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Luxury Car Bazaar</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-10"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Expert Knowledge</h3>
                <p className="text-muted-foreground">
                  Our team consists of automotive enthusiasts with extensive knowledge of luxury and performance vehicles.
                </p>
              </div>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Exclusive Selection</h3>
                <p className="text-muted-foreground">
                  We curate only the finest automobiles, many of which are rare or limited editions.
                </p>
              </div>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Premium Service</h3>
                <p className="text-muted-foreground">
                  From the first test drive to ongoing maintenance, we provide exceptional service at every stage.
                </p>
              </div>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Transparent Process</h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency throughout the purchasing process, with no hidden fees or surprises.
                </p>
              </div>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">After-Sales Support</h3>
                <p className="text-muted-foreground">
                  Our relationship doesn't end with the sale. We provide comprehensive after-sales support.
                </p>
              </div>
              
              <div className="bg-card border border-border p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Nationwide Delivery</h3>
                <p className="text-muted-foreground">
                  We offer delivery services throughout India to ensure your vehicle arrives in perfect condition.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Team */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Our Leadership Team</h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-10"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069&auto=format&fit=crop" 
                  alt="Raj Mehta" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Raj Mehta</h3>
                <p className="text-gold mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  With over 20 years in the luxury automobile industry, Raj's vision drives our company's success.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop" 
                  alt="Priya Sharma" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Priya Sharma</h3>
                <p className="text-gold mb-2">Chief Operating Officer</p>
                <p className="text-muted-foreground text-sm">
                  Priya ensures our operations run smoothly across all locations and leads our customer service initiatives.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2187&auto=format&fit=crop" 
                  alt="Vikram Patel" 
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">Vikram Patel</h3>
                <p className="text-gold mb-2">Head of Acquisitions</p>
                <p className="text-muted-foreground text-sm">
                  Vikram travels the world to source the most exclusive vehicles for our collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
