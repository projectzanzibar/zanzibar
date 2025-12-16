import React from 'react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/seed/zanzibarbeach/1920/1080")', 
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/50 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left md:flex md:items-center md:justify-between pt-20">
        <div className="max-w-3xl mx-auto md:mx-0">
          <span className="inline-block px-4 py-1 bg-amber-500 text-white font-bold rounded-full mb-6 animate-bounce">
            #1 Rated Transfer Service
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Reliable Airport <br/>
            <span className="text-sky-400">Transfers in Zanzibar</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl drop-shadow-md">
            Start your holiday stress-free. Private taxis, group shuttles, and custom tours at the best local rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" variant="secondary">Book Transfer</Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sky-900">
              View Tours
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};