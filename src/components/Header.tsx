import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-blue-50 min-h-screen flex items-center relative">
      <div className="absolute top-6 right-6">
        <h3 className="text-2xl font-bold text-blue-900">Made by Yemi</h3>
      </div>
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-blue-900 mb-6">
              Transform Your Cooking Journey with MasterChef Expertise
            </h1>
            <p className="text-xl text-blue-700 mb-8">
              From kitchen novice to confident chef - unlock your culinary potential with personalized coaching from Yemi, UK MasterChef 2024 Finalist
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              Book Your Free Discovery Call <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070&h=1380" 
              alt="Chef Yemi cooking" 
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold">MasterChef UK 2024 Finalist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}