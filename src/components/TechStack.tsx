import React from 'react';
import { motion } from 'framer-motion';
export function TechStack() {
  const technologies = [
  {
    name: 'AWS',
    iconUrl: 'https://cdn.simpleicons.org/amazonwebservices/FF9900'
  },
  {
    name: 'Azure',
    iconUrl: 'https://cdn.simpleicons.org/microsoftazure/0089D6'
  },
  {
    name: 'Docker',
    iconUrl: 'https://cdn.simpleicons.org/docker/2496ED'
  },
  {
    name: 'Kubernetes',
    iconUrl: 'https://cdn.simpleicons.org/kubernetes/326CE5'
  },
  {
    name: 'Jenkins',
    iconUrl: 'https://cdn.simpleicons.org/jenkins/D33833'
  },
  {
    name: 'GitHub',
    iconUrl: 'https://cdn.simpleicons.org/github/FFFFFF'
  },
  {
    name: 'Terraform',
    iconUrl: 'https://cdn.simpleicons.org/terraform/7B42BC'
  },
  {
    name: 'Ansible',
    iconUrl: 'https://cdn.simpleicons.org/ansible/EE0000'
  },
  {
    name: 'Linux',
    iconUrl: 'https://cdn.simpleicons.org/linux/FCC624'
  }];

  return (
    <section
      id="skills"
      className="py-24 relative border-y border-white/5 bg-white/[0.01]">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="mb-16 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-white" />
            Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
          {technologies.map((tech, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05
            }}
            className="glass-panel flex flex-col items-center justify-center gap-3 w-28 h-28 md:w-32 md:h-32 rounded-2xl glass-panel-hover group">
            
              <img
              src={tech.iconUrl}
              alt={tech.name}
              className="w-8 h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-300" />
            
              <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}