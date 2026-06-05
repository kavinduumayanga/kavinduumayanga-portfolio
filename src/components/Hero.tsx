'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  LayoutGrid
} from 'lucide-react';

const HERO_ROLES = [
  'Aspiring DevOps Engineer',
  'Senior Microsoft Student Ambassador',
  'Undergraduate @SLIIT',
  'Community Lead - Microsoft IT Pro Community'
];

const STATS = [
  { value: 30, suffix: '+', label: 'Certifications' },
  { value: 10, suffix: '+', label: 'Sessions' },
  { value: 500, suffix: '+', label: 'Students Reached' },
  { value: 3000, suffix: '+', label: 'Followers' },
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

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={false}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="flex flex-col items-start gap-6 pt-12 lg:pt-0">

          <div className="flex items-center gap-3 text-base md:text-lg font-medium tracking-widest text-gray-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Hi, I&apos;m
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            KAVINDU <br />
            <span className="text-gradient">UMAYANGA</span>
          </h1>

          <div className="space-y-3">
            <h2 className="flex min-h-[3.5rem] max-w-xl items-center text-lg font-light leading-tight text-gray-300 sm:min-h-[3rem] sm:text-xl md:min-h-[2.75rem] md:text-2xl">
              <span className="mr-3 flex min-h-[3.5rem] items-center font-mono font-medium text-white sm:min-h-[3rem] md:min-h-[2.75rem]">
                &gt;
              </span>
              <span className="relative flex min-h-[3.5rem] items-center overflow-hidden sm:min-h-[3rem] md:min-h-[2.75rem]">
                <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="block"
                >
                  {HERO_ROLES[currentRoleIndex]}
                </motion.span>
                </AnimatePresence>
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            I build, automate and deploy scalable cloud-native solutions that
            drive impact. Passionate about DevOps, Cloud and modern development.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors group">
              Let&apos;s Connect
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-8 py-4 glass-panel glass-panel-hover rounded-full font-medium text-white group">
              View Projects
              <LayoutGrid className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 w-full">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-2xl md:text-3xl font-heading font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-4">
            {[Github, Linkedin, Mail].map((Icon, i) =>
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-white transition-colors p-2 glass-panel rounded-full glass-panel-hover">

                <Icon className="w-5 h-5" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Right Content - Portrait & Floating Elements */}
        <motion.div
          initial={false}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 0.4
          }}
          className="relative h-[500px] md:h-[600px] lg:h-[620px] flex justify-center items-end lg:items-center lg:justify-end mt-12 lg:mt-0 w-full">

          {/* Portrait Image */}
          <motion.div
            className="relative z-10 flex h-[24rem] w-[21rem] items-end justify-center md:h-[30rem] md:w-[27rem] lg:h-[34rem] lg:w-[30rem] lg:-translate-y-20">
            
            {/* Ambient subtle white glow behind head/shoulders */}
            <div
              aria-hidden="true"
              className="absolute top-[15%] z-0 h-[14rem] w-[14rem] rounded-full bg-white/5 blur-[70px] md:h-[18rem] md:w-[18rem]" />

            <img
              src="/assets/me-bg-removed.png"
              alt="Kavindu Umayanga"
              className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-[0_0_15px_rgba(5,5,5,0.8)]"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
              }} />
          </motion.div>
        </motion.div>
      </div>
    </section>);

}
