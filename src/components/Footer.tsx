import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-white" />
          <span className="font-heading font-bold text-base tracking-wider text-white">
            KAVINDU UMAYANGA
          </span>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kavindu Umayanga. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[Github, Linkedin, Mail].map((Icon, i) =>
          <a
            key={i}
            href="#"
            className="text-gray-500 hover:text-white transition-colors">
            
              <Icon className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </footer>);

}