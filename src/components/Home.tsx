'use client';

import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Services } from './Services';
import { TechStack } from './TechStack';
import { Ambassador } from './Ambassador';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Ambassador />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
