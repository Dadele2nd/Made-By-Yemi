import React from 'react';

const faqs = [
  {
    question: "How much time do I need to commit each week?",
    answer: "Our programs are flexible and designed to fit your schedule. Most students spend 2-4 hours per week, including video lessons and practical cooking time."
  },
  {
    question: "I'm a complete beginner. Is this suitable for me?",
    answer: "Absolutely! We have programs specifically designed for complete beginners, starting with the very basics and building your confidence step by step."
  },
  {
    question: "Do I need special equipment?",
    answer: "No, you don't need professional equipment. We'll work with what you have in your kitchen, and suggest affordable upgrades only if necessary."
  },
  {
    question: "Can I switch between programs?",
    answer: "Yes, you can switch between programs within the first 30 days if you feel another option would better suit your needs."
  },
  {
    question: "How is the coaching delivered?",
    answer: "Through a combination of live online sessions, pre-recorded videos, written materials, and direct messaging support."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}