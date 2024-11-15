import React from 'react';

export default function Background() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
            From Corporate Life to MasterChef Finalist
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800"
              alt="Chef teaching"
              className="rounded-xl shadow-lg"
            />
            <div>
              <p className="text-gray-700 mb-4">
                Yemi's journey began in the corporate world, where her passion for cooking remained a constant companion. What started as a love for creating memorable meals for family and friends transformed into a culinary adventure that would change her life.
              </p>
              <p className="text-gray-700">
                Taking the bold step to enter MasterChef UK 2024, Yemi faced off against culinary juggernauts, refining her skills and learning from world-leading chefs along the way.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <p className="text-gray-700 mb-4">
                Her culinary journey expanded beyond the competition, leading her to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Host cooking demonstrations at the prestigious Yorkshire Show</li>
                <li>Curate exclusive dining experiences for art galleries</li>
                <li>Write culinary reviews for the Harrogate Advertiser</li>
                <li>Lead numerous charity cooking events</li>
                <li>Build a following of thousands on social media</li>
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&q=80&w=800"
              alt="Teaching moment"
              className="rounded-xl shadow-lg"
            />
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-gray-700 mb-6">
              The constant stream of requests for cooking advice and personal chef services inspired Yemi to create something bigger: a comprehensive cooking program that would allow her to share her expertise with anyone eager to learn or enhance their culinary skills.
            </p>
            <p className="text-blue-900 font-semibold">
              "My mission is to make exceptional cooking accessible to everyone, regardless of their starting point."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}