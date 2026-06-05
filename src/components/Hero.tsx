import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  LayoutGrid
} from 'lucide-react';
export function Hero() {
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

          <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Hi, I&apos;m
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            KAVINDU <br />
            <span className="text-gradient">UMAYANGA</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light text-gray-300 border-l-2 border-white/20 pl-4">
            DevOps Engineer <span className="text-white/20 mx-2">|</span> Cloud
            Enthusiast <span className="text-white/20 mx-2">|</span> Developer
          </h2>

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

          <div className="flex items-center gap-6 mt-8">
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
          className="relative h-[600px] flex justify-center items-end lg:items-center mt-12 lg:mt-0">

          {/* Ambient accent glow behind portrait */}
          <div
            aria-hidden="true"
            className="absolute z-0 h-[28rem] w-[28rem] rounded-full blur-3xl md:h-[34rem] md:w-[34rem]"
            style={{
              background:
                'radial-gradient(circle at 50% 38%, rgba(59,130,246,0.14) 0%, rgba(15,23,42,0.22) 34%, rgba(5,5,5,0.82) 68%, rgba(5,5,5,0) 100%)'
            }} />

          {/* Portrait Image */}
          <motion.div
            className="relative z-10 flex h-[24rem] w-[21rem] items-end justify-end md:h-[30rem] md:w-[27rem] lg:h-[34rem] lg:w-[30rem]">
            <img
              src="/assets/me-bg-removed.png"
              alt="Kavindu Umayanga"
              className="absolute inset-0 h-full w-full object-contain object-bottom" />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />
            <div
              aria-hidden="true"
              className="absolute left-0 top-[10%] h-[76%] w-20 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent pointer-events-none md:w-24" />
            <div
              aria-hidden="true"
              className="absolute right-0 top-[12%] h-[74%] w-16 bg-gradient-to-l from-[#050505]/85 via-[#050505]/45 to-transparent pointer-events-none md:w-20" />
          </motion.div>
        </motion.div>
      </div>
    </section>);

}
