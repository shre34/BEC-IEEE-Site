import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import { AcademicCapIcon, UserGroupIcon as UsersIcon, EyeIcon, GlobeAltIcon as GlobeIcon, CodeBracketIcon as CodeIcon, SparklesIcon, BriefcaseIcon, LightBulbIcon } from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    const main = mainRef.current;
    
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        // Desktop animations (horizontal scroll)
        "(min-width: 1024px)": function() {
          const horizontalSections = gsap.utils.toArray('.panel');
          gsap.to(horizontalSections, {
            xPercent: -100 * (horizontalSections.length - 1),
            ease: 'none',
            scrollTrigger: {
              trigger: '.horizontal-scroll-section',
              pin: true,
              scrub: 1,
              snap: 1 / (horizontalSections.length - 1),
              end: () => '+=' + main.querySelector('.horizontal-scroll-section').offsetWidth,
            },
          });

          // Vertical animations for the sections that follow
          gsap.from('.advancing-tech-section', { scrollTrigger: { trigger: '.advancing-tech-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
          gsap.from('.professional-growth-section', { scrollTrigger: { trigger: '.professional-growth-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
        },

        // Mobile animations (simple vertical scroll)
        "(max-width: 1023px)": function() {
          // No pinning, just simple scroll-in animations for all sections
          gsap.from('.welcome-panel', { scrollTrigger: { trigger: '.welcome-panel', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
          gsap.from('.vision-mission-panel', { scrollTrigger: { trigger: '.vision-mission-panel', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
          gsap.from('.advancing-tech-section', { scrollTrigger: { trigger: '.advancing-tech-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
          gsap.from('.professional-growth-section', { scrollTrigger: { trigger: '.professional-growth-section', start: 'top 80%', toggleActions: 'play none none reverse' }, opacity: 0, y: 50 });
        },
      });
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page" ref={mainRef}>
      <section className="hero-video-section">
        <div className="video-container">
          <video src="/video/VIT University - 1Min Ad Film.mp4" autoPlay loop muted playsInline className="background-video" />
          <div className="overlay-content">
            <h1 className="main-title">IEEE-BEC</h1>
            <p className="subtitle">Advancing Technology for Humanity</p>
          </div>
        </div>
      </section>

      <section className="horizontal-scroll-section">
        <div className="scroll-track">
          <div className="panel welcome-panel">
            <div className="panel-content">
              <h2 className="panel-title">Welcome to IEEE-BEC</h2>
              <p className="panel-text">A dynamic community dedicated to advancing technology for humanity. We provide a platform for students to develop their technical and professional skills.</p>
            </div>
          </div>

          <div className="panel vision-mission-panel">
            <div className="panel-content">
              <h2 className="panel-title">Our Vision & Mission</h2>
              <div className="cards-container">
                <div className="card">
                  <EyeIcon className="card-icon" />
                  <h3 className="card-title">Our Vision</h3>
                  <p className="card-text">To be a leading student branch, fostering innovation and excellence in technology and engineering for the benefit of society.</p>
                </div>
                <div className="card">
                  <GlobeIcon className="card-icon" />
                  <h3 className="card-title">Our Mission</h3>
                  <p className="card-text">To provide our members with opportunities for skill development, networking, and collaboration, and to promote the values of IEEE.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="vertical-content-wrapper">
        <section className="content-section advancing-tech-section">
          <div className="split-content">
            <div className="text-content">
              <h2 className="section-title">Advancing Technology for All</h2>
              <p className="section-text">IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Our members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities.</p>
            </div>
            <div className="image-content">
              <img src="/images/tech-abstract.jpg" alt="Abstract Technology" className="panel-image" />
            </div>
          </div>
        </section>

        <section className="content-section professional-growth-section">
          <h2 className="section-title">Fostering Professional Growth</h2>
          <div className="cards-container">
            <div className="card">
              <UsersIcon className="card-icon" />
              <h3 className="card-title">Networking Opportunities</h3>
              <p className="card-text">Connect with peers, faculty, and industry professionals through our extensive network of events, seminars, and workshops.</p>
            </div>
            <div className="card">
              <AcademicCapIcon className="card-icon" />
              <h3 className="card-title">Skill Development</h3>
              <p className="card-text">Participate in hands-on workshops, coding competitions, and project development to enhance your technical and soft skills.</p>
            </div>
            <div className="card">
              <BriefcaseIcon className="card-icon" />
              <h3 className="card-title">Leadership Experience</h3>
              <p className="card-text">Take on leadership roles in projects and committees. Develop essential management and organizational skills valued in the industry.</p>
            </div>
            <div className="card">
              <LightBulbIcon className="card-icon" />
              <h3 className="card-title">Career Guidance</h3>
              <p className="card-text">Receive mentorship from faculty and professionals. Get access to workshops, resume-building sessions, and career fairs.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
