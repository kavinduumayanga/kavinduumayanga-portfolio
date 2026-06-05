import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const RECOMMENDATIONS = [
  {
    quote:
      'Kavindu consistently exhibits exceptional dedication, a strong grasp of complex tasks, and the ability to deliver precise, high-quality outcomes within deadlines.',
    author: 'Dineth Siriwardana',
  },
  // Add future recommendations here:
  // {
  //   quote: '...',
  //   author: 'Name',
  // },
];

export function Recommendations() {
  return (
    <section id="recommendations" className="py-24 relative scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-white" />
            Recommendations
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
            What People Say
          </h2>
        </motion.div>

        {/* Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECOMMENDATIONS.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 rounded-3xl glass-panel-hover group transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <Quote className="w-5 h-5 text-white/20 mb-4 shrink-0" />

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 flex-grow">
                &ldquo;{rec.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                  {rec.author.charAt(0)}
                </div>
                <span className="text-sm font-medium text-white">
                  {rec.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
