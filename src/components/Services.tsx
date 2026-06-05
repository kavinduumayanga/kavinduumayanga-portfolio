import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Infinity, Code2, ArrowRight } from 'lucide-react';
export function Services() {
  const services = [
  {
    icon: <Cloud className="w-8 h-8 text-blue-400" />,
    title: 'Cloud Engineering',
    desc: 'Designing and managing scalable, secure and cost-efficient cloud infrastructures.',
    glow: 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]'
  },
  {
    icon: <Infinity className="w-8 h-8 text-purple-400" />,
    title: 'DevOps & Automation',
    desc: 'Building CI/CD pipelines, automating deployments and streamlining workflows.',
    glow: 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.1)]'
  },
  {
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    title: 'Software Development',
    desc: 'Developing modern, responsive and high-performance applications.',
    glow: 'group-hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]'
  }];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={false}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mb-16">
          
          <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-white" />
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Services I Provide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) =>
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`glass-panel p-8 rounded-3xl glass-panel-hover group cursor-pointer flex flex-col h-full transition-all duration-500 ${service.glow}`}>
            
              <div className="mb-8 group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <div className="mt-auto">
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
