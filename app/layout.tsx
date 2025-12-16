import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Header } from '../components/Layout/Header';
import { Footer } from '../components/Layout/Footer';

export const metadata: Metadata = {
  title: 'Go Zanzibar Transfers - Airport Taxi & Tours',
  description: 'Reliable airport transfers, taxi services and tours in Zanzibar. Book online for best prices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans flex min-h-screen flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
