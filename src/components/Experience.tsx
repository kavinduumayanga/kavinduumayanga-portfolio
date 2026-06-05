import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE = [
  {
    role: 'Microsoft Learn Student Ambassador',
    org: 'Microsoft',
    level: 'Beta',
    desc: 'Empowering students through Microsoft technologies — organising workshops, mentoring peers, and driving cloud and AI adoption across communities.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    role: 'Community Lead',
    org: 'Microsoft IT Pro Community Sri Lanka',
    desc: 'Leading community strategy, coordinating events, and building partnerships to grow the local technology ecosystem.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    role: 'Event Coordinator',
    org: 'Microsoft IT Pro Community Sri Lanka',
    desc: 'Planning and executing technical events, managing speakers, and ensuring seamless delivery for the community.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    role: 'Marketing Sub Lead',
    org: 'MS Club of SLIIT',
    desc: 'Driving social media strategy, creating promotional content, and increasing engagement for club initiatives.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
  {
    role: 'Freelance Graphic Designer & Illustrator',
    org: 'Independent',
    desc: 'Creating visual identities, event branding, social media designs, and digital illustrations for clients.',
    color: 'text-pink-400',
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative scroll-mt-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <div className="flex items-center justify-start gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-white" />
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Where I&apos;ve Contributed
          </h2>
        </motion.div>

        {/* LinkedIn-Style Timeline */}
        <div className="flex flex-col gap-2">
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 md:gap-8 group"
            >
              {/* Vertical Line */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="absolute left-[7px] md:left-[11px] top-8 bottom-[-1rem] w-px bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
              )}

              {/* Timeline Dot */}
              <div className="relative z-10 flex flex-col items-center shrink-0 mt-2">
                <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${item.bg} ${item.border} border-2 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300`}>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/40 group-hover:bg-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content Area */}
              <div className="pb-10 md:pb-12 pt-1 flex-grow">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight transition-colors duration-300">
                    {item.role}
                  </h3>
                  {item.level && (
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] md:text-xs font-bold uppercase tracking-widest ${item.bg} ${item.border} border ${item.color}`}>
                      {item.level}
                    </span>
                  )}
                </div>
                
                <h4 className={`text-sm md:text-base font-medium mb-4 uppercase tracking-wide ${item.color}`}>
                  {item.org}
                </h4>
                
                <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
