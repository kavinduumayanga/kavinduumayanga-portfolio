import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, TrendingUp, Users } from 'lucide-react';

const JOURNEY_ITEMS = [
  {
    year: '2024',
    title: 'Started BSc (Hons) Information Technology at SLIIT',
    icon: GraduationCap,
    accent: 'from-sky-500/20 via-sky-400/10 to-transparent',
    dot: 'bg-sky-400',
    glow: 'shadow-[0_0_24px_rgba(56,189,248,0.22)]'
  },
  {
    year: '2025',
    title: 'Joined Microsoft Learn Student Ambassador Program',
    icon: Award,
    accent: 'from-violet-500/20 via-fuchsia-400/10 to-transparent',
    dot: 'bg-violet-400',
    glow: 'shadow-[0_0_24px_rgba(167,139,250,0.22)]'
  },
  {
    year: '2025',
    title: 'Became Event Coordinator at Microsoft IT Pro Community',
    icon: Users,
    accent: 'from-amber-500/20 via-orange-400/10 to-transparent',
    dot: 'bg-amber-400',
    glow: 'shadow-[0_0_24px_rgba(251,191,36,0.22)]'
  },
  {
    year: '2026',
    title: 'Promoted to Community Lead',
    icon: TrendingUp,
    accent: 'from-emerald-500/20 via-green-400/10 to-transparent',
    dot: 'bg-emerald-400',
    glow: 'shadow-[0_0_24px_rgba(52,211,153,0.22)]'
  }
];

export function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-28 overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-12 mx-auto h-72 w-[30rem] rounded-full bg-white/[0.03] blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-widest text-gray-400">
            <span className="h-2 w-2 rounded-full bg-white" />
            Timeline
          </div>
          <h2 className="text-4xl font-heading font-bold text-white md:text-5xl">
            Journey
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Key milestones across academics, community work, and leadership.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-white/5 via-white/25 to-white/5 md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10 md:space-y-12">
            {JOURNEY_ITEMS.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative grid gap-4 pl-14 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-8 md:pl-0"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className={isLeft ? 'md:col-start-1' : 'md:col-start-3'}
                  >
                    <div className="glass-panel glass-panel-hover relative overflow-hidden rounded-3xl p-6 md:p-7">
                      <div
                        aria-hidden="true"
                        className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${item.accent}`}
                      />
                      <div className="relative z-10 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="space-y-3">
                          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                            {item.year}
                          </span>
                          <h3 className="max-w-lg text-xl font-heading font-bold leading-snug text-white">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                    className="absolute left-5 top-7 -translate-x-1/2 md:static md:col-start-2 md:row-start-1 md:self-start md:translate-x-0"
                  >
                    <div className={`relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#050505] ${item.glow}`}>
                      <span className={`h-3 w-3 rounded-full ${item.dot}`} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
