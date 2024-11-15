import React from 'react';
import { PlayCircle } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Watch How We're Transforming Lives Through Cooking
          </h2>
          <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-blue-600 cursor-pointer hover:text-blue-700 transition" />
            </div>
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070&h=1380"
              alt="Cooking class in action"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}