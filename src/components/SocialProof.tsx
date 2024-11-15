import React from 'react';
import { Star } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Third Party Ratings */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-gray-800 mb-1">4.9 out of 5</p>
              <p className="text-gray-600">on Trustpilot</p>
              <p className="text-sm text-gray-500 mt-2">Based on 200+ reviews</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-gray-800 mb-1">4.8 out of 5</p>
              <p className="text-gray-600">on Google Reviews</p>
              <p className="text-sm text-gray-500 mt-2">Based on 150+ reviews</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-bold text-gray-800 mb-1">4.9 out of 5</p>
              <p className="text-gray-600">on Facebook</p>
              <p className="text-sm text-gray-500 mt-2">Based on 180+ reviews</p>
            </div>
          </div>

          <p className="text-center text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            If your cooking capabilities aren't where you want them to be, now is the time to change. Together, we'll transform your culinary skills in a fun and accessible way that fits your lifestyle.
          </p>

          {/* Client Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-12">
            <img src="https://placehold.co/200x80/e2e8f0/475569?text=MasterChef+UK" alt="MasterChef UK" className="h-12 object-contain mx-auto" />
            <img src="https://placehold.co/200x80/e2e8f0/475569?text=Yorkshire+Show" alt="Yorkshire Show" className="h-12 object-contain mx-auto" />
            <img src="https://placehold.co/200x80/e2e8f0/475569?text=National+Gallery" alt="National Gallery" className="h-12 object-contain mx-auto" />
            <img src="https://placehold.co/200x80/e2e8f0/475569?text=Harrogate+Advertiser" alt="Harrogate Advertiser" className="h-12 object-contain mx-auto" />
          </div>

          {/* Guarantee */}
          <div className="bg-white p-8 rounded-xl shadow-md text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Success Guarantee</h3>
            <p className="text-gray-700">
              If we can't improve your cooking abilities over the programme, you're entitled to a full refund AND an additional month of coaching at no cost to help you reach your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}