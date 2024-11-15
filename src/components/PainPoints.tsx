import React from 'react';
import { Clock, ChefHat, Utensils, ThumbsDown, Globe, HelpCircle } from 'lucide-react';

const painPoints = [
  {
    title: "I don't have time to cook",
    description: "Learn time-saving techniques and quick recipes that don't compromise on taste. Perfect for busy professionals and parents.",
    icon: Clock
  },
  {
    title: "I'm intimidated by cooking",
    description: "Start with basics and build confidence through structured learning. No judgment, just support and guidance.",
    icon: ChefHat
  },
  {
    title: "I can't recreate authentic flavors",
    description: "Master traditional techniques and learn the secrets behind authentic dishes from an experienced chef.",
    icon: Utensils
  },
  {
    title: "My food never tastes good",
    description: "Discover the fundamental principles of flavor building and seasoning that will transform your cooking instantly.",
    icon: ThumbsDown
  },
  {
    title: "I can't cook many cuisines",
    description: "Explore diverse culinary traditions and master techniques from various world cuisines with confidence.",
    icon: Globe
  },
  {
    title: "I don't know where to start",
    description: "Get a structured, step-by-step approach that takes you from complete beginner to confident cook.",
    icon: HelpCircle
  }
];

export default function PainPoints() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          Transform Your Kitchen Struggles Into Culinary Triumphs
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <point.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">
                  "{point.title}"
                </h3>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <p className="text-blue-700">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}