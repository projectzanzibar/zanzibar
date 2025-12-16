'use client';
import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { LOCATIONS } from '../../constants';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for rides from ${formData.pickup} to ${formData.dropoff}... (Simulation)`);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 -mt-10 relative z-20 mx-4 lg:mx-auto max-w-5xl border-t-4 border-sky-500">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center md:text-left">
        Book Your Transfer Online
      </h3>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* Pickup */}
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <MapPin className="w-5 h-5" />
          </div>
          <select 
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none appearance-none bg-white text-gray-700"
            value={formData.pickup}
            onChange={(e) => setFormData({...formData, pickup: e.target.value})}
            required
          >
            <option value="" disabled>Pick-up Location</option>
            {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        {/* Dropoff */}
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <MapPin className="w-5 h-5" />
          </div>
          <select 
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none appearance-none bg-white text-gray-700"
            value={formData.dropoff}
            onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
            required
          >
            <option value="" disabled>Drop-off Location</option>
            {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>

        {/* Date */}
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <Calendar className="w-5 h-5" />
          </div>
          <input 
            type="date"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none text-gray-700"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
            required
          />
        </div>

        {/* Passengers */}
        <div className="relative">
          <div className="absolute left-3 top-3 text-gray-400">
            <Users className="w-5 h-5" />
          </div>
          <select 
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none appearance-none bg-white text-gray-700"
            value={formData.passengers}
            onChange={(e) => setFormData({...formData, passengers: e.target.value})}
          >
            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Passengers</option>)}
            <option value="9+">9+ Group</option>
          </select>
        </div>

        {/* Submit */}
        <Button type="submit" variant="secondary" className="w-full py-3 h-full shadow-lg shadow-amber-500/30">
          Get Quote
        </Button>
      </form>
    </div>
  );
};