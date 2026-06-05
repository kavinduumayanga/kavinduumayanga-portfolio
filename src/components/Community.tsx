'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, ChevronLeft, ChevronRight, Users2 } from 'lucide-react';

const EVENTS = [
  {
    title: 'GitHub Dev Day – University of Vavuniya',
    desc: 'Learn the basics of GitHub and version control. Get hands-on experience with GitHub repositories, branching, and collaboration features.',
    date: '11 July 2026',
    time: '10:00 AM – 01:00 PM (UTC+05:30)',
    venue: 'University of Vavuniya (Offline)',
    role: 'Host, Speaker',
    image: '/assets/events/github-dev-day.jpg',
    collaborators: [
      { name: 'GitHub Campus Experts', logo: '/assets/logos/github-campus-experts.png' },
      { name: 'Microsoft Learn Student Ambassadors', logo: '/assets/logos/mlsa.png' },
    ],
  },
  {
    title: 'Azure 101 – IEEE UVT',
    desc: 'An introductory session covering Azure fundamentals, cloud services, and getting started with the Azure portal for beginners.',
    date: '20 June 2026',
    time: '02:00 PM – 04:30 PM (UTC+05:30)',
    venue: 'IEEE UVT Student Branch (Online)',
    role: 'Speaker',
    image: '/assets/events/azure-101.jpg',
    collaborators: [
      { name: 'IEEE UVT', logo: '/assets/logos/ieee-uvt.png' },
      { name: 'Microsoft Learn Student Ambassadors', logo: '/assets/logos/mlsa.png' },
    ],
  },
  {
    title: 'Getting Started with Power Automate',
    desc: 'Hands-on workshop demonstrating how to build automated workflows using Microsoft Power Automate to boost productivity.',
    date: '05 May 2026',
    time: '10:00 AM – 12:00 PM (UTC+05:30)',
    venue: 'Microsoft Teams (Online)',
    role: 'Speaker',
    image: '/assets/events/power-automate.jpg',
    collaborators: [
      { name: 'Microsoft Learn Student Ambassadors', logo: '/assets/logos/mlsa.png' },
    ],
  },
  {
    title: 'Azure Static Web Apps Workshop',
    desc: 'A practical session on deploying modern web apps with Azure Static Web Apps, GitHub Actions, and seamless CI/CD integration.',
    date: '18 April 2026',
    time: '03:00 PM – 05:00 PM (UTC+05:30)',
    venue: 'SLIIT Malabe Campus (Offline)',
    role: 'Organizer, Speaker',
    image: '/assets/events/static-web-apps.jpg',
    collaborators: [
      { name: 'Microsoft Learn Student Ambassadors', logo: '/assets/logos/mlsa.png' },
      { name: 'SLIIT FOSS Community', logo: '/assets/logos/sliit-foss.png' },
    ],
  },
  {
    title: 'AI Chatbots with Azure AI Foundry',
    desc: 'Building intelligent chatbots using Azure AI Foundry — exploring conversational AI capabilities and real-world use cases.',
    date: '02 March 2026',
    time: '01:00 PM – 03:30 PM (UTC+05:30)',
    venue: 'Microsoft Teams (Online)',
    role: 'Speaker',
    image: '/assets/events/ai-chatbots.jpg',
    collaborators: [
      { name: 'Microsoft Learn Student Ambassadors', logo: '/assets/logos/mlsa.png' },
    ],
  },
  {
    title: 'Global Azure Bootcamp Sri Lanka',
    desc: 'A community-driven full-day bootcamp bringing together Azure enthusiasts, MVPs, and students for deep-dive sessions on Azure services.',
    date: '15 February 2026',
    time: '09:00 AM – 05:00 PM (UTC+05:30)',
    venue: 'Colombo Innovation Tower (Offline)',
    role: 'Co-Organizer, Speaker',
    image: '/assets/events/global-azure.jpg',
    collaborators: [
      { name: 'Microsoft Learn Student Ambassadors', logo: '/assets/logos/mlsa.png' },
      { name: 'Azure Sri Lanka Community', logo: '/assets/logos/azure-sl.png' },
      { name: 'GitHub Campus Experts', logo: '/assets/logos/github-campus-experts.png' },
    ],
  },
];

export function Community() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section id="community" className="py-24 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-white" />
              Community & Speaking
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Community Impact
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
              Sharing knowledge, building communities, and helping students grow through technology.
            </p>
          </motion.div>

          {/* Scroll Controls */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="flex items-center justify-center w-11 h-11 rounded-full glass-panel glass-panel-hover text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="flex items-center justify-center w-11 h-11 rounded-full glass-panel glass-panel-hover text-white"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-6 px-6 md:px-12 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Left spacer for centering with max-w-7xl */}
        <div className="shrink-0 w-[max(0px,calc((100vw-80rem)/2))]" />

        {EVENTS.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="shrink-0 w-[85vw] sm:w-[420px] md:w-[480px] snap-start"
          >
            <div className="glass-panel rounded-3xl overflow-hidden group transition-all duration-500 hover:shadow-[0_0_40px_rgba(96,165,250,0.08)] hover:border-blue-500/20 flex flex-col h-full">
              {/* Banner Image */}
              <div className="relative h-48 md:h-52 overflow-hidden bg-white/[0.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Fallback gradient if no image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent" />
                <div className="absolute top-4 right-4 z-20 glass-panel px-3 py-1.5 rounded-full text-xs font-bold tracking-wide text-white uppercase">
                  {event.role}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-heading font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {event.desc}
                </p>

                {/* Meta */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                    {event.venue}
                  </div>
                </div>

                {/* Collaborators */}
                <div className="mt-auto pt-5 border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-gray-500 mb-3">
                    <Users2 className="w-3.5 h-3.5" />
                    In Collaboration With
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {event.collaborators.map((collab) => (
                      <div
                        key={collab.name}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
                      >
                        <img
                          src={collab.logo}
                          alt={collab.name}
                          className="w-4 h-4 rounded-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <span className="truncate max-w-[10rem]">{collab.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Right spacer */}
        <div className="shrink-0 w-6 md:w-[max(1.5rem,calc((100vw-80rem)/2))]" />
      </div>

      {/* Custom scrollbar hide */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
