import React, { useRef, useEffect } from 'react';
import MemberCard from '../components/MemberCard';
import PageHeader from '../components/PageHeader';
import { committees } from '../components/data/committees';
import ParticleBackground from '../components/Societies/particle-background';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import Footer from './Home/Footer';

gsap.registerPlugin(ScrollTrigger);

const CommitteePage = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    // Setup scroll animations for committee sections
    const committeeSections = gsap.utils.toArray<HTMLElement>('.committee-section');
    
    committeeSections.forEach((section, i) => {
      const delay = i * 0.2;
      
      // Reset initial state
      gsap.set(section, { y: 50, opacity: 0 });
      
      // Create scroll trigger for each section
      gsap.to(section, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse'
        },
        delay: delay
      });
      
      // Animate member cards within each section
      const cards = section.querySelectorAll('.member-card');
      cards.forEach((card, j) => {
        gsap.fromTo(card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: delay + (j * 0.1),
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            ease: 'back.out(1.4)'
          }
        );
      });
    });

    return () => {
      // Clean up GSAP animations
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      // No need to clean up ParticleBackground as it handles its own cleanup
    };
  }, []);

  return (
    <div 
      ref={bgRef}
      className="relative min-h-screen flex flex-col bg-black text-gray-200"
    >
      <ParticleBackground />
      <div className="flex-1 py-6 sm:py-8 px-3 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <PageHeader title="Committees"/>
          
          {committees.map((committee) => (
            <div key={committee.name} className="mb-12 committee-section">
              <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center z-10 mb-8">
                <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                  <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[rgb(52,4,91)] via-[rgb(52,4,91)] to-black opacity-75 blur-xl"></div>
                  <h2 className="relative text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">{committee.name}</h2>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-5">
                {committee.members.map((member) => (
                  <MemberCard 
                    key={member.name}
                    image={member.image}
                    name={member.name}
                    designation={member.designation}
                    linkedin={member.linkedin}
                    portfolio={member.portfolio}
                    email={member.email}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default CommitteePage;