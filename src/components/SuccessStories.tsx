import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Busy Professional",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Yemi's course transformed my relationship with cooking. I went from burning toast to confidently hosting dinner parties!"
  },
  {
    name: "Michael Chen",
    role: "Dad of Three",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The Dad's Kitchen Mastery program helped me surprise my family with amazing meals. My kids actually look forward to my cooking now!"
  },
  {
    name: "Lisa Okonjo",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    role: "Home Cook",
    quote: "Learning authentic African cuisine from Yemi was incredible. She brings such depth of knowledge and passion to every lesson."
  },
  {
    name: "James Wilson",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Yemi's techniques have elevated our entire menu. Our customer satisfaction has soared!"
  },
  {
    name: "Emma Rodriguez",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The depth of knowledge in these courses is incredible. My blog content has improved tremendously!"
  },
  {
    name: "David Park",
    role: "Home Chef",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Finally mastered the art of seasoning thanks to Yemi's expert guidance."
  },
  // Additional testimonials...
];

const socialProof = [
  {
    type: "facebook",
    content: "Just completed my 8th week of Yemi's course and I'm amazed at how far I've come! #CookingTransformation",
    author: "Maria S.",
    date: "2 days ago"
  },
  {
    type: "instagram",
    content: "From microwave meals to making fresh pasta from scratch! Thank you @MadeByYemi for changing my life!",
    author: "@foodie_convert",
    date: "1 week ago"
  },
  // More social proof...
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          Success Stories from Our Community
        </h2>
        
        {/* Featured Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <Quote className="w-12 h-12 text-blue-600 mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                  <p className="text-blue-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Proof */}
        <div className="grid md:grid-cols-4 gap-6">
          {socialProof.map((proof, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 mb-4">{proof.content}</p>
              <div className="text-sm text-blue-600">
                <p className="font-semibold">{proof.author}</p>
                <p>{proof.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}