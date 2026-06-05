import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, CalendarCheck, Megaphone, Palette } from 'lucide-react';

const EXPERIENCE = [
  {
    icon: <Award className="w-5 h-5 text-blue-400" />,
    role: 'Microsoft Learn Student Ambassador',
    org: 'Microsoft',
    level: 'Beta',
    desc: 'Empowering students through Microsoft technologies — organising workshops, mentoring peers, and driving cloud and AI adoption across communities.',
    color: 'bg-blue-400',
    shadow: 'shadow-[0_0_12px_rgba(96,165,250,0.4)]',
  },
  {
    icon: <Users className="w-5 h-5 text-purple-400" />,
    role: 'Community Lead',
    org: 'Microsoft IT Pro Community Sri Lanka',
    desc: 'Leading community strategy, coordinating events, and building partnerships to grow the local Microsoft technology ecosystem.',
    color: 'bg-purple-400',
    shadow: 'shadow-[0_0_12px_rgba(192,132,252,0.4)]',
  },
  {
    icon: <CalendarCheck className="w-5 h-5 text-orange-400" />,
    role: 'Event Coordinator',
    org: 'Microsoft IT Pro Community Sri Lanka',
    desc: 'Planning and executing technical events, managing speakers, and ensuring seamless event delivery for the community.',
    color: 'bg-orange-400',
    shadow: 'shadow-[0_0_12px_rgba(251,146,60,0.4)]',
  },
  {
    icon: <Megaphone className="w-5 h-5 text-cyan-400" />,
    role: 'Marketing Sub Lead',
    org: 'MS Club of SLIIT',
    desc: 'Driving social media strategy, creating promotional content, and increasing engagement for club events and initiatives.',
    color: 'bg-cyan-400',
    shadow: 'shadow-[0_0_12px_rgba(34,211,238,0.4)]',
  },
  {
    icon: <Palette className="w-5 h-5 text-pink-400" />,
    role: 'Freelance Graphic Designer & Illustrator',
    desc: 'Creating visual identities, event branding, social media designs, and digital illustrations for clients and communities.',
    color: 'bg-pink-400',
    shadow: 'shadow-[0_0_12px_rgba(244,114,182,0.4)]',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-white" />
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Where I&apos;ve Contributed
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.3125rem] top-0 bottom-0 w-px bg-white/10 md:left-8" />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* Dot */}
                <div className="relative z-10 flex items-center justify-center shrink-0 mt-8">
                  <span className={`block h-[0.6875rem] w-[0.6875rem] rounded-full ${item.color} ${item.shadow} ring-4 ring-[#050505]`} />
                </div>

                {/* Card */}
                <div className="glass-panel glass-panel-hover rounded-3xl p-6 md:p-8 group transition-all duration-500 flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-bold text-white leading-snug">
                          {item.role}
                        </h3>
                        {item.org && (
                          <p className="text-sm text-gray-500 mt-0.5">{item.org}</p>
                        )}
                      </div>
                    </div>
                    {item.level && (
                      <span className="shrink-0 self-start text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        {item.level}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed ml-0 sm:ml-[3.25rem]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
