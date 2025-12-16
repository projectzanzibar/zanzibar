import React from 'react';
import { ShieldCheck, Clock, BadgeDollarSign, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-sky-600" />,
    title: 'Safe & Reliable',
    desc: 'Licensed professional drivers and well-maintained vehicles for your safety.'
  },
  {
    icon: <Clock className="w-10 h-10 text-sky-600" />,
    title: 'Punctual Service',
    desc: 'We track your flight to ensure we are there when you land. No waiting.'
  },
  {
    icon: <BadgeDollarSign className="w-10 h-10 text-sky-600" />,
    title: 'Best Price Guarantee',
    desc: 'Fixed prices with no hidden fees or surge pricing. What you see is what you pay.'
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-sky-600" />,
    title: '24/7 Support',
    desc: 'Our customer support team is available via WhatsApp and phone around the clock.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/zanzibarroad/600/600" 
                alt="Driver with car" 
                className="rounded-2xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-10 -right-10 bg-sky-50 rounded-2xl p-8 z-0 w-full h-full transform translate-x-4 translate-y-4 hidden md:block" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center">
                 <div className="text-4xl font-bold text-sky-600 mb-1">10k+</div>
                 <div className="text-gray-600 font-medium">Happy Travelers</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-sky-600">Go Zanzibar</span>?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We understand that arriving in a new country can be stressful. That's why we've dedicated ourselves to providing the smoothest transfer experience on the island.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="bg-sky-50 w-16 h-16 rounded-xl flex items-center justify-center mb-2">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};