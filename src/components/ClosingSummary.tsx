import React from 'react';

export default function ClosingSummary() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-8">
            Your Culinary Journey Starts Here
          </h2>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              With Made by Yemi, you're not just learning recipes – you're transforming your relationship with cooking. From complete beginners to experienced home cooks, our programs cater to every skill level and goal.
            </p>
            <p className="mb-6">
              Through personalized coaching, practical techniques, and expert guidance from MasterChef finalist Yemi, you'll develop the skills and confidence to create amazing meals for any occasion.
            </p>
            <p className="text-blue-900 font-semibold">
              Don't miss out on our limited-time pricing – secure your spot today and begin your transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}