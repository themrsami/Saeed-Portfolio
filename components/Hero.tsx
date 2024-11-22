'use client';
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBGRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorBG = cursorBGRef.current;

    const moveCursor = (e: MouseEvent) => {
      if (cursor && cursorBG) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorBG.style.left = e.clientX + 'px';
        cursorBG.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your needs
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute inset-0 animate-pulse-slow">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600/30 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor"></div>
      <div ref={cursorBGRef} className="cursor-bg"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto">
          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Main Title and Description */}
            <div className="text-left space-y-6 reveal-animation">
              <div className="space-y-4">
                <h1 className="hero-title-new">
                  <span className="text-white block">Saeed Ijaz</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 block mt-2">
                    Creative Designer
                  </span>
                </h1>
                
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"></div>
              </div>

              <p className="hero-description-new">
                Transforming ideas into visually compelling stories through design innovation
                and creative excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="primary-button-new glow-on-hover"
                >
                  View Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="secondary-button-new glow-on-hover"
                >
                  Let&apos;s Connect
                </button>
              </div>
            </div>

            {/* Right Column - Expertise */}
            <div className="relative reveal-animation" style={{ animationDelay: '0.2s' }}>
              <div className="expertise-grid">
                {[
                  {
                    title: 'Graphic Design',
                    description: 'Creating visual content that communicates messages effectively'
                  },
                  {
                    title: 'Videography',
                    description: 'Capturing and editing compelling video content'
                  },
                  {
                    title: 'Motion Design',
                    description: 'Bringing static designs to life through animation'
                  },
                  {
                    title: 'Visual Storytelling',
                    description: 'Crafting narratives through visual elements'
                  }
                ].map((skill, index) => (
                  <div 
                    key={index}
                    className="expertise-card glow-on-hover"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <h3 className="expertise-title">{skill.title}</h3>
                    <p className="expertise-description">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator-container">
            <div className="scroll-indicator"></div>
            <span className="text-sm text-white/60 mt-2 block text-center">Scroll to Explore</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element" style={{ '--delay': '0s' } as React.CSSProperties}></div>
        <div className="floating-element" style={{ '--delay': '2s' } as React.CSSProperties}></div>
        <div className="floating-element" style={{ '--delay': '4s' } as React.CSSProperties}></div>
      </div>
    </div>
  );
};

export default Hero;
