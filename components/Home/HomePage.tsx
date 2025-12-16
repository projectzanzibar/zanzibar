'use client';
import React from 'react';
import { Hero } from './Hero';
import { BookingForm } from './BookingForm';
import { ServicesGrid } from './ServicesGrid';
import { WhyChooseUs } from './WhyChooseUs';
import { ChatWidget } from '../AIChat/ChatWidget';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <div className="container mx-auto px-4">
        <BookingForm />
      </div>
      <WhyChooseUs />
      <ServicesGrid />
      
      {/* Testimonials Simulation */}
      <section className="py-20 bg-sky-900 text-white text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
                        <div className="flex justify-center mb-4 text-amber-400">★★★★★</div>
                        <p className="italic mb-4 text-gray-300">"Absolutely the best transfer service in Zanzibar. The driver was polite, punctual and the car was very clean."</p>
                        <h4 className="font-bold">- Happy Traveler {i}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <ChatWidget />
    </main>
  );
};
