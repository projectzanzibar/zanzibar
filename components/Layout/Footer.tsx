'use client';
import React from 'react';
import { Car, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-sky-600 p-1.5 rounded">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Go<span className="text-sky-500">Zanzibar</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Your trusted partner for airport transfers, taxi services, and tours across the beautiful island of Zanzibar. Safe, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sky-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-sky-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Airport Transfers</li>
              <li>Stone Town Tours</li>
              <li>Blue Safari</li>
              <li>Spice Farm Tours</li>
              <li>Jozani Forest Trip</li>
              <li>Hotel Transfers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-500 shrink-0" />
                <span>Malindi Street, Stone Town<br/>Zanzibar, Tanzania</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-500 shrink-0" />
                <a href="tel:+255777123456" className="hover:text-white">+255 777 123 456</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-500 shrink-0" />
                <a href="mailto:info@gozanzibartransfers.com" className="hover:text-white">info@gozanzibartransfers.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Go Zanzibar Transfers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};