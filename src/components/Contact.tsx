import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react';

const CONTACT_EMAIL = 'kavinumayanga@gmail.com';

const SOCIAL_LINKS = [
  {
    label: 'Email',
    href: `mailto:${CONTACT_EMAIL}`,
    icon: Mail
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kavindu-umayanga',
    icon: Linkedin
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kavinduumayanga',
    icon: Github
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/kavinduumayanga',
    icon: Twitter
  }
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 border-t border-white/5 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid gap-16 lg:gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                Let&apos;s Connect
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-gray-400">
                I&apos;m always open to discussing DevOps, cloud projects,
                student community initiatives, and collaboration opportunities.
                If you have an idea in mind, let&apos;s connect.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel rounded-[2rem] p-8 md:p-10 border border-white/5 bg-white/[0.02] backdrop-blur-md"
          >
            <div className="mb-8 space-y-2">
              <h3 className="text-2xl font-heading font-bold text-white tracking-tight">
                Send a Message
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Fill out the form below and your default mail app will open with
                the details ready to send.
              </p>
            </div>

            <form
              action={`mailto:${CONTACT_EMAIL}`}
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2.5">
                  <span className="text-sm font-medium text-gray-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    required
                  />
                </label>

                <label className="space-y-2.5">
                  <span className="text-sm font-medium text-gray-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                    required
                  />
                </label>
              </div>

              <label className="block space-y-2.5">
                <span className="text-sm font-medium text-gray-300">Subject</span>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this regarding?"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  required
                />
              </label>

              <label className="block space-y-2.5">
                <span className="text-sm font-medium text-gray-300">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell me a bit about your project, opportunity, or idea."
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-300 focus:border-white/30 focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] resize-none"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
