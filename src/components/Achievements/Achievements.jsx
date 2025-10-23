import React from 'react';
import PageHeader from '../PageHeader';
import Newsletter from './Newsletter';
import { awards, flagshipEvents } from './data';

const Achievements = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[rgb(32,4,51)] min-h-screen text-white">
      <PageHeader title="Achievements" />
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-800/50 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-300">Awards</h2>
            <ul className="list-disc list-inside text-gray-400">
              {awards.map((award) => (
                <li key={award.id} className="mb-2">
                  <span className="text-white font-medium">{award.title}</span> - {award.awardedBy} ({award.year})
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-purple-800/50 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-300">Flagship Events</h2>
            <ul className="list-disc list-inside text-gray-400">
              {flagshipEvents.map((event) => (
                <li key={event.id} className="mb-2">
                  <span className="text-white font-medium">{event.title}:</span> {event.description}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-purple-300">Newsletter</h2>
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
