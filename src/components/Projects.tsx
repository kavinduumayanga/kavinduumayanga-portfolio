import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Infinity, Layers, Bell } from 'lucide-react';
export function Projects() {
  const projects = [
  {
    icon: <Infinity className="w-6 h-6 text-blue-400" />,
    title: 'CI/CD Pipeline Automation',
    desc: 'End-to-end CI/CD pipeline using Jenkins, Docker, Kubernetes and AWS.',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
    glow: 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.1)]'
  },
  {
    icon: <Layers className="w-6 h-6 text-purple-400" />,
    title: 'Infrastructure as Code',
    desc: 'Automated cloud infrastructure provisioning using Terraform and AWS.',
    tags: ['Terraform', 'AWS', 'S3', 'EC2'],
    glow: 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.1)]'
  },
  {
    icon: <Bell className="w-6 h-6 text-orange-400" />,
    title: 'Monitoring & Alerting System',
    desc: 'Centralized monitoring and alerting with Prometheus, Grafana and Alertmanager.',
    tags: ['Prometheus', 'Grafana', 'Alertmanager'],
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]'
  }];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={false}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}>
            
            <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-white" />
              Featured Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Some Things I&apos;ve Built
            </h2>
          </motion.div>

          <motion.button
            initial={false}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="flex items-center gap-2 px-6 py-3 glass-panel glass-panel-hover rounded-full font-medium text-white group w-fit">
            
            View All Projects
            <LayoutGrid className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) =>
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
            className={`glass-panel p-8 rounded-3xl glass-panel-hover group flex flex-col h-full transition-all duration-500 ${project.glow}`}>
            
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow text-sm">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) =>
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
                
                    {tag}
                  </span>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
