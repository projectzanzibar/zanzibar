import React from 'react';
import { SERVICES } from '../../constants';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Popular Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From seamless airport pickups to exciting excursions around the island, we have everything you need for a perfect vacation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-sky-600 text-white font-bold py-1 px-3 rounded-lg shadow-md">
                  From {service.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {service.description}
                </p>
                <Button variant="outline" className="w-full justify-between group-hover:bg-sky-50">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg">View All Destinations</Button>
        </div>
      </div>
    </section>
  );
};