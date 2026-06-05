import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  LayoutGrid,
  Cloud,
  Database,
  Terminal,
  Code2 } from
'lucide-react';
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
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
            Hi, I'm
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
              Let's Connect
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
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            delay: 0.4
          }}
          className="relative h-[600px] flex justify-center items-end lg:items-center mt-12 lg:mt-0">
          
          {/* Circular Background Grid */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-[500px] h-[500px] border border-white/20 rounded-full absolute" />
            <div className="w-[350px] h-[350px] border border-white/20 rounded-full absolute" />
            <div className="w-[200px] h-[200px] border border-white/20 rounded-full absolute" />
          </div>

          {/* Ambient accent glow behind portrait */}
          <div className="absolute z-0 w-80 h-80 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-[80px]" />

          {/* Portrait Image */}
          <motion.div
            animate={{
              y: [0, -12, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative z-10 w-72 h-72 md:w-[340px] md:h-[340px]">
            
            {/* Rotating accent halo ring */}
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute -inset-2 rounded-full border border-blue-400/30 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
            
            {/* Glass frame */}
            <div className="absolute inset-0 rounded-full p-[3px] glass-panel shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7),0_0_50px_-10px_rgba(59,130,246,0.25)]">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                <img
                  src="/assets/me-bg-removed.png"
                  alt="Kavindu Umayanga"
                  className="w-full h-full object-cover scale-105" />
                
                {/* Vignette to melt photo edges into the dark frame */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_25px_rgba(5,5,5,0.55)] pointer-events-none" />
                {/* Subtle bottom darkening for depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                {/* Top light reflection */}
                <div className="absolute inset-x-8 top-2 h-10 rounded-full bg-white/10 blur-md pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Floating Tech Badges */}
          <motion.div className="absolute top-1/4 right-10 z-20 glass-panel p-3 rounded-2xl animate-float">
            <Cloud className="w-8 h-8 text-blue-400" />
          </motion.div>
          <motion.div className="absolute top-1/2 -right-4 z-20 glass-panel p-3 rounded-2xl animate-float-delayed">
            <Database className="w-6 h-6 text-blue-500" />
          </motion.div>
          <motion.div className="absolute bottom-1/4 right-12 z-20 glass-panel p-4 rounded-2xl animate-float">
            <Code2 className="w-6 h-6 text-white" />
          </motion.div>
          <motion.div className="absolute top-1/3 left-4 z-20 glass-panel p-3 rounded-2xl animate-float-delayed">
            <Terminal className="w-8 h-8 text-orange-400" />
          </motion.div>

          {/* Status Badge */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 glass-panel px-6 py-3 rounded-full flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-white">
              Available for work
            </span>
          </div>
        </motion.div>
      </div>
    </section>);

}
