import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Download, Menu, X } from 'lucide-react';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Experience',
  'Contact'];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-panel border-b-0' : 'py-6 bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Code2 className="w-6 h-6 text-white group-hover:text-gray-300 transition-colors" />
          <span className="font-heading font-bold text-lg tracking-wider text-white">
            KAVINDU UMAYANGA
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) =>
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group">
              
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            )}
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel glass-panel-hover text-sm font-medium text-white group">
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          
          {mobileMenuOpen ?
          <X className="w-6 h-6" /> :

          <Menu className="w-6 h-6" />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen &&
      <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10 py-4 px-6 flex flex-col gap-4">
          {navLinks.map((link) =>
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="text-base font-medium text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(false)}>
          
              {link}
            </a>
        )}
        </div>
      }
    </motion.nav>);

}