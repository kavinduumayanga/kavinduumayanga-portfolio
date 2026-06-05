import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 30, suffix: '+', label: 'Certifications', accent: 'bg-blue-400' },
  { value: 10, suffix: '+', label: 'Sessions Delivered', accent: 'bg-purple-400' },
  { value: 10, suffix: '+', label: 'Projects', accent: 'bg-orange-400' },
  { value: 3000, suffix: '+', label: 'LinkedIn Followers', accent: 'bg-green-400' },
];

function AnimatedCounter({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start gap-6"
          >
            <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-white" />
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Who I Am
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                I&apos;m Kavindu Umayanga — an IT undergraduate at SLIIT,
                Microsoft Learn Student Ambassador, and a community-driven
                technologist focused on Cloud, DevOps, and AI.
              </p>
              <p>
                I lead sessions, mentor students, and build scalable solutions
                that make real-world impact.
              </p>
            </div>
          </motion.div>

          {/* Right — Stats Grid */}
          <div className="grid grid-cols-2 gap-5 md:gap-6 max-w-[26rem] md:max-w-md mx-auto lg:ml-auto lg:mr-0 w-full">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative glass-panel py-8 px-5 md:py-10 md:px-6 rounded-3xl overflow-hidden group text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.04)] flex flex-col justify-center"
              >
                <span className="block text-2xl md:text-3xl font-heading font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <p className="text-xs md:text-sm text-gray-500 mt-3 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
