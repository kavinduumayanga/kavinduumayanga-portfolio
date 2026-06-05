import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  LayoutGrid } from
'lucide-react';
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen" />

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
          
          {/* Portrait Image */}
          <div className="relative z-10 w-80 h-96 md:w-[380px] md:h-[460px]">
            <img
              src="/assets/me-bg-removed.png"
              alt="Kavindu Umayanga"
              className="w-full h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </section>);

}