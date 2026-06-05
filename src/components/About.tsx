import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Cloud } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
    title: 'SLIIT Undergraduate',
    desc: 'Pursuing a degree in Information Technology at the Sri Lanka Institute of Information Technology.',
    glow: 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]'
  },
  {
    icon: <Award className="w-6 h-6 text-purple-400" />,
    title: 'Microsoft Learn Student Ambassador',
    desc: 'Beta-level ambassador empowering peers through Microsoft technologies, workshops, and events.',
    glow: 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]'
  },
  {
    icon: <Users className="w-6 h-6 text-orange-400" />,
    title: 'Community Lead',
    desc: 'Leading the Microsoft IT Pro Community — organising sessions, mentoring students, and building networks.',
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]'
  },
  {
    icon: <Cloud className="w-6 h-6 text-green-400" />,
    title: 'Cloud & DevOps Enthusiast',
    desc: 'Passionate about CI/CD, infrastructure automation, and deploying scalable cloud-native solutions.',
    glow: 'group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={false}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="flex flex-col items-start gap-6">
            
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

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, index) =>
            <motion.div
              key={index}
              initial={false}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className={`glass-panel p-8 rounded-3xl glass-panel-hover group transition-all duration-500 ${item.glow}`}>
              
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

