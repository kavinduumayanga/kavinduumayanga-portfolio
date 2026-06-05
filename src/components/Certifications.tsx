'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ChevronDown, X } from 'lucide-react';

const FEATURED_CERTS = [
  {
    name: 'AZ-900 Azure Fundamentals',
    issuer: 'Microsoft',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    name: 'GitHub Foundations',
    issuer: 'GitHub',
    color: 'text-gray-100',
    bg: 'bg-white/10',
    border: 'border-white/20',
  },
  {
    name: 'Postman Student Expert',
    issuer: 'Postman',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    name: 'Linux Unhatched',
    issuer: 'Cisco',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
  },
  {
    name: 'Microsoft Learn Student Ambassador',
    issuer: 'Microsoft',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    name: 'AI Skills Fest Badge',
    issuer: 'Microsoft',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
];

// ───────────────────────────────────────────────────────
// Add future certifications here.
// They will appear inside the "View All" modal.
// ───────────────────────────────────────────────────────
const ALL_CERTS = [
  ...FEATURED_CERTS,
  // { name: 'SC-900', issuer: 'Microsoft', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
];

function CertCard({ cert, index }: { cert: typeof FEATURED_CERTS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass-panel p-6 rounded-3xl glass-panel-hover group flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1"
    >
      <div
        className={`w-14 h-14 rounded-2xl ${cert.bg} ${cert.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}
      >
        <Award className={`w-7 h-7 ${cert.color}`} />
      </div>
      <h3 className="text-base font-heading font-bold text-white mb-1 leading-snug">
        {cert.name}
      </h3>
      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
        {cert.issuer}
      </p>
    </motion.div>
  );
}

export function Certifications() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="certifications" className="py-24 relative scroll-mt-28">
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
              Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Licenses &amp; Credentials
            </h2>
          </motion.div>

          {/* Featured Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_CERTS.map((cert, i) => (
              <CertCard key={cert.name} cert={cert} index={i} />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2 px-8 py-4 glass-panel glass-panel-hover rounded-full font-medium text-white group transition-colors"
            >
              View All Certifications
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Full-screen Modal ── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
            role="presentation"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="certifications-dialog-title"
              aria-describedby="certifications-dialog-description"
              className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl glass-panel border border-white/10 p-8 md:p-12"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full glass-panel glass-panel-hover text-gray-400 hover:text-white transition-colors"
                aria-label="Close certifications dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <h3
                id="certifications-dialog-title"
                className="text-2xl md:text-3xl font-heading font-bold text-white mb-2"
              >
                All Certifications
              </h3>
              <p id="certifications-dialog-description" className="text-gray-400 mb-8">
                A complete list of my professional certifications and credentials.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {ALL_CERTS.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="glass-panel p-5 rounded-2xl flex items-center gap-4 group transition-all duration-300 hover:bg-white/[0.04]"
                  >
                    <div
                      className={`w-11 h-11 shrink-0 rounded-xl ${cert.bg} ${cert.border} border flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Award className={`w-5 h-5 ${cert.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-heading font-bold text-white leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
