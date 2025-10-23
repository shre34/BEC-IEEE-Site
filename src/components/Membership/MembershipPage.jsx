"use client"

import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Briefcase, Tag, ExternalLink, Calendar, Star, Award } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/Button.jsx';
import './MembershipPage.css';
import ParticleBackground from '@/components/Societies/particle-background.jsx';

const membershipData = [
    { month: "Jan", members: 100, growth: 100 },
    { month: "Feb", members: 120, growth: 20 },
    { month: "Mar", members: 180, growth: 60 },
    { month: "Apr", members: 150, growth: -30 },
    { month: "May", members: 120, growth: -30 },
    { month: "Jun", members: 220, growth: 100 },
    { month: "Jul", members: 150, growth: 30 },
    { month: "Aug", members: 250, growth: 100 },
    { month: "Sep", members: 180, growth: 30 },
    { month: "Oct", members: 425, growth: 223 },
  ];

// 2D Pulsating Graph Component
const MemberStatsAndGraph = () => {
  const stats = [
    { title: "BEC-IEEE Members", value: "450+", icon: <Users className="w-8 h-8" /> },
    { title: "Societies", value: "10", icon: <BookOpen className="w-8 h-8" /> },
    { title: "Annual Events", value: "25+", icon: <Calendar className="w-8 h-8" /> },
  ];

  return (
    <section id="statistics" className="py-20 px-4">
      {/* Common Heading */}
      <div className="flex items-center gap-3 mb-12 justify-center">
        <div className="h-10 w-1 bg-gradient-to-b from-purple-500 to-[rgb(52,4,91)] rounded-full"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Our Community: Growth & Numbers</h2>
      </div>

      {/* Pulsating Graph First */}
      <PulsatingGraph />

      {/* Stats Cards Second */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-24">
        {stats.map((stat, index) => (
          <div key={index} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-[rgb(52,4,91)]/50 shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_25px_rgba(52,4,91,0.5)] transition-all duration-300 flex flex-col items-center text-center h-full">
              <div className="p-4 bg-gradient-to-br from-[rgb(52,4,91)] to-purple-950 rounded-full shadow-[0_0_10px_rgba(52,4,91,0.3)] mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-purple-300">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// The graph is now a separate component if needed, but the main request was stats
const PulsatingGraph = () => {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const graphRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (graphRef.current) {
      observer.observe(graphRef.current);
    }

    return () => {
      if (graphRef.current) {
        observer.unobserve(graphRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let animationFrameId;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const duration = 4000; // 4 seconds for the animation
      const newProgress = Math.min(elapsedTime / duration, 1);
      
      setProgress(newProgress);

      if (newProgress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasAnimated]);

  const maxMembers = Math.max(...membershipData.map(d => d.members), 1); // Ensure not zero

  // SVG viewBox dimensions
  const viewBox = { width: 800, height: 300 };
  const padding = { top: 20, right: 50, bottom: 40, left: 50 };
  const chartWidth = viewBox.width - padding.left - padding.right;
  const chartHeight = viewBox.height - padding.top - padding.bottom;

  const getPosition = (index, memberValue) => {
    if (index < 0 || index >= membershipData.length) return { x: padding.left, y: chartHeight + padding.top };
    const x = padding.left + (chartWidth / (membershipData.length - 1)) * index;
    const y = padding.top + chartHeight - (chartHeight * (memberValue / maxMembers));
    return { x, y };
  };

  let pathD, members, growth, x, y;
  const totalSegments = membershipData.length - 1;
  const progressInSegments = progress * totalSegments;
  const currentSegmentIndex = Math.floor(progressInSegments);
  const fractionOfNextSegment = progressInSegments - currentSegmentIndex;

  // Guard against out-of-bounds errors during animation
  if (currentSegmentIndex < 0 || currentSegmentIndex >= totalSegments) {
    // If animation is done, show the final state
    if (progress >= 1) {
      const lastData = membershipData[totalSegments];
      const lastPos = getPosition(totalSegments, lastData.members);
      pathD = `M ${getPosition(0, membershipData[0].members).x} ${getPosition(0, membershipData[0].members).y}`;
      for (let i = 1; i <= totalSegments; i++) {
        pathD += ` L ${getPosition(i, membershipData[i].members).x} ${getPosition(i, membershipData[i].members).y}`;
      }
      members = lastData.members;
      growth = lastData.growth;
      x = lastPos.x;
      y = lastPos.y;
    } else {
      // If it's out of bounds but not finished, render nothing to prevent crash
      return null;
    }
  } else {
    // Animation is in progress
    const startData = membershipData[currentSegmentIndex];
    const endData = membershipData[currentSegmentIndex + 1];

    members = Math.round(startData.members + (endData.members - startData.members) * fractionOfNextSegment);
    growth = Math.round(startData.growth + (endData.growth - startData.growth) * fractionOfNextSegment);

    pathD = `M ${getPosition(0, membershipData[0].members).x} ${getPosition(0, membershipData[0].members).y}`;
    for (let i = 1; i <= currentSegmentIndex; i++) {
      pathD += ` L ${getPosition(i, membershipData[i].members).x} ${getPosition(i, membershipData[i].members).y}`;
    }

    const startPos = getPosition(currentSegmentIndex, startData.members);
    const endPos = getPosition(currentSegmentIndex + 1, endData.members);
    x = startPos.x + (endPos.x - startPos.x) * fractionOfNextSegment;
    y = startPos.y + (endPos.y - startPos.y) * fractionOfNextSegment;
    pathD += ` L ${x} ${y}`;
  }

  return (
    <div ref={graphRef} className="w-full max-w-6xl mx-auto p-4 md:p-8 bg-gray-950/50 rounded-2xl border border-purple-500/20 shadow-2xl shadow-black/50">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white">Membership Growth</h3>
          <p className="text-sm text-gray-400">Live data from Jan to Dec 2025</p>
        </div>
        <div className="text-right p-4 rounded-lg bg-black/30 border border-gray-700/50">
          <div className="text-3xl font-bold text-purple-300">{members}</div>
          <div className="text-sm text-gray-400">Active Members</div>
          {/* <div className="text-lg font-semibold text-purple-400 mt-1">+{growth} This Month</div> */}
        </div>
      </div>
      <div className="relative w-full" style={{ paddingTop: `${(viewBox.height / viewBox.width) * 100}%` }}>
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}>
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <filter id="line-glow"><feGaussianBlur stdDeviation="4" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          </defs>

          {/* Y-axis labels and grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map(tick => {
            const yVal = padding.top + chartHeight - (chartHeight * tick);
            return (
              <g key={tick} className="text-gray-600">
                <text x={padding.left - 15} y={yVal} dy=".3em" textAnchor="end" className="text-xs fill-current">{Math.round(maxMembers * tick)}</text>
                <line x1={padding.left} x2={viewBox.width - padding.right} y1={yVal} y2={yVal} className="stroke-current" strokeWidth="1" strokeDasharray="1,3" />
              </g>
            );
          })}

          

          <path d={pathD} stroke="url(#line-gradient)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" filter="url(#line-glow)" />
          <circle cx={x} cy={y} r="5" fill="#a855f7" filter="url(#line-glow)" />
          <circle cx={x} cy={y} r="2" fill="white" />
        </svg>
      </div>
    </div>
  );
};

const benefits = [
  {
    title: "Exclusive Content",
    description: "Access to IEEE Spectrum, The Institute, and a vast library of resources.",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    title: "Networking Events",
    description: "Connect with professionals and pioneers at conferences and local meetings.",
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Career Development",
    description: "Utilize the IEEE Job Site, career resources, and standards development.",
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    title: "Discounts",
    description: "Save on conferences, publications, and products with member-exclusive pricing.",
    icon: <Tag className="w-8 h-8" />
  }
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-black text-gray-200"> 
      <ParticleBackground /> 
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(52,4,91,0.3)] to-black"></div>
        <div className="absolute inset-0 bg-[url('/images/background/members.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[rgb(52,4,91)] via-[rgb(52,4,91)] to-black opacity-75 blur-xl"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-100">
              Shape the Future of Technology
            </h1>
            <p className="relative text-xl md:text-2xl max-w-3xl mx-auto text-purple-100">
              Connect with a global network of professionals, access cutting-edge resources, and accelerate your career growth.
            </p>
        </div>
      </section>

            <MemberStatsAndGraph />

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Unlock Your Potential</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Membership offers a vast array of benefits designed to support your professional and personal growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
                <div key={index} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgb(52,4,91)] to-purple-900 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-[rgb(52,4,91)]/50 shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_25px_rgba(52,4,91,0.5)] transition-all duration-300 flex flex-col items-center text-center h-full">
                        <div className="p-4 bg-gradient-to-br from-[rgb(52,4,91)] to-purple-950 rounded-full shadow-[0_0_10px_rgba(52,4,91,0.3)] mb-4">
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-purple-300 text-sm">{benefit.description}</p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>



      {/* Final Call to Action Section */}
      <section className="py-20 px-4 text-center bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Shape the Future?</h2>
        <p className="text-purple-300 text-lg max-w-3xl mx-auto mb-8">Become a member today and join a network of pioneers, leaders, and innovators who are building the world of tomorrow.</p>
        <Button size="lg" className="bg-gradient-to-r from-[rgb(52,4,91)] to-purple-700 text-white font-medium hover:from-[rgb(72,14,111)] hover:to-purple-600 transition-all duration-300 shadow-[0_0_15px_rgba(52,4,91,0.5)] hover:shadow-[0_0_25px_rgba(52,4,91,0.7)] px-8 py-4 rounded-full mb-6">
            Join IEEE Now <ExternalLink className="w-5 h-5 ml-2" />
        </Button>
        <p className="text-gray-500">Or, contact us at <a href="mailto:contact@bec-ieee.org" className="text-purple-400 hover:underline">contact@bec-ieee.org</a></p>
      </section>
    </div>
  );
}
