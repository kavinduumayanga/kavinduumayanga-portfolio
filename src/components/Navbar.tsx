import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code2, Download, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Journey', href: 'journey' },
  { label: 'Community', href: 'community' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Skills', href: 'skills' },
  { label: 'Contact', href: 'contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <motion.nav
      initial={false}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-panel border-b-0' : 'py-6 bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Code2 className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" />
          <span className="font-heading font-bold text-lg tracking-wider text-white">
            KAVINDU UMAYANGA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className={`text-sm font-medium transition-colors relative group ${activeSection === link.href ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
              
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-white transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel glass-panel-hover text-sm font-medium text-white group">
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu">
          
          {mobileMenuOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div
        id="mobile-navigation-menu"
        className="lg:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10 py-4 px-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          className={`text-base font-medium ${activeSection === link.href ? 'text-white' : 'text-gray-300 hover:text-white'}`}
          onClick={closeMobileMenu}>
          
              {link.label}
            </a>
        ))}
        </div>
      }
    </motion.nav>);

}
