'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Car } from 'lucide-react';
import { Button } from '../ui/Button';
import { NAV_LINKS } from '../../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-sky-600 p-2 rounded-lg">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Go<span className="text-sky-500">Zanzibar</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`font-medium hover:text-sky-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:+255777123456" 
            className={`flex items-center gap-2 font-medium ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>+255 777 123 456</span>
          </a>
          <Button variant="secondary" size="sm">Book Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`w-8 h-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
          <div className="flex flex-col p-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-800 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="tel:+255777123456" className="flex items-center gap-2 text-sky-600 font-bold py-2">
              <Phone className="w-4 h-4" /> +255 777 123 456
            </a>
            <Button variant="secondary" className="w-full">Book Your Ride</Button>
          </div>
        </div>
      )}
    </header>
  );
};