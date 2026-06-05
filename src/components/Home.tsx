'use client';

import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Journey } from './Journey';
import { Services } from './Services';
import { TechStack } from './TechStack';
import { Community } from './Community';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Certifications } from './Certifications';
import { Recommendations } from './Recommendations';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-white/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Services />
        <Community />
        <Projects />
        <Experience />
        <Certifications />
        <TechStack />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
