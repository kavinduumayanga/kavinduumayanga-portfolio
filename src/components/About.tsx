import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Cloud, Target, Rocket } from 'lucide-react';
export function About() {
  const stats = [
  {
    icon: <Code className="w-6 h-6 text-blue-400" />,
    title: 'Experience',
    value: '2+ Years',
    desc: 'in DevOps & Cloud',
    glow: 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]'
  },
  {
    icon: <Cloud className="w-6 h-6 text-purple-400" />,
    title: 'Projects',
    value: '15+',
    desc: 'Completed',
    glow: 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]'
  },
  {
    icon: <Rocket className="w-6 h-6 text-orange-400" />,
    title: 'Focus',
    value: 'Automation',
    desc: 'Scalability & Reliability',
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,146,60,0.15)]'
  },
  {
    icon: <Target className="w-6 h-6 text-green-400" />,
    title: 'Goal',
    value: 'Deliver',
    desc: 'Impactful Solutions',
    glow: 'group-hover:shadow-[0_0_30px_rgba(74,222,128,0.15)]'
  }];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
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
                I'm a DevOps Engineer and Cloud enthusiast with a strong
                background in automating infrastructure, building CI/CD
                pipelines and deploying scalable applications on the cloud.
              </p>
              <p>
                I love solving real-world problems, optimizing systems and
                making deployments reliable, faster and smarter.
              </p>
            </div>
            <button className="mt-4 flex items-center gap-2 px-6 py-3 glass-panel glass-panel-hover rounded-full font-medium text-white group">
              More About Me
              <User className="w-4 h-4 group-hover:text-gray-300" />
            </button>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((stat, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
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
              className={`glass-panel p-8 rounded-3xl glass-panel-hover group transition-all duration-500 ${stat.glow}`}>
              
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h3 className="text-gray-400 text-sm font-medium mb-2">
                  {stat.title}
                </h3>
                <div className="text-2xl font-heading font-bold text-white mb-1">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}