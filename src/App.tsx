import React from 'react';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import Newsletter from './components/Newsletter';
import Background from './components/Background';
import PainPoints from './components/PainPoints';
import SuccessStories from './components/SuccessStories';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import ClosingSummary from './components/ClosingSummary';
import { packages } from './data/packages';
import { Check, Phone } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <VideoSection />
      <Newsletter />
      <Background />
      <PainPoints />
      <SuccessStories />
      
      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            Choose Your Culinary Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-xl relative overflow-hidden">
                {pkg.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    Save {Math.round(((pkg.originalPrice - parseInt(pkg.price.slice(1))) / pkg.originalPrice) * 100)}%
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{pkg.title}</h3>
                  <p className="text-blue-600">{pkg.duration}</p>
                  <div className="mt-4">
                    {pkg.originalPrice && (
                      <span className="text-lg line-through text-gray-500 mr-2">£{pkg.originalPrice}</span>
                    )}
                    <span className="text-3xl font-bold text-blue-900">{pkg.price}</span>
                  </div>
                </div>
                <p className="text-blue-700 mb-6">{pkg.description}</p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span className="text-blue-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof />
      <FAQ />
      <ClosingSummary />

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Cooking Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free discovery call to discuss your goals and find the perfect program for you
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2 mx-auto">
            <Phone className="w-5 h-5" />
            Schedule Your Free Call
          </button>
        </div>
      </section>
    </div>
  );
}