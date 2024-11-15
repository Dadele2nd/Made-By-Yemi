import React from 'react';
import { Book } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-12 bg-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="text-center md:text-left">
            <Book className="w-16 h-16 text-blue-300 mx-auto md:mx-0 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Your Free Recipe Guide
            </h2>
            <p className="text-blue-100 mb-8">
              Sign up to receive our exclusive e-book featuring signature recipes and cooking tips from Yemi herself
            </p>
            <form className="flex gap-4 max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Free Guide
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800"
              alt="Recipe eBook Preview"
              className="rounded-xl shadow-2xl transform rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}