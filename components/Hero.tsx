'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

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

            {/* Right Column - Floating Design Tools */}
            <div className="relative reveal-animation" style={{ animationDelay: '0.2s' }}>
              <div className="floating-tools">
                {/* Figma */}
                <div className="tool-icon" style={{ '--delay': '0s', '--top': '10%', '--left': '20%' } as React.CSSProperties}>
                  <Image src="/design-tools/figma.svg" alt="Figma" width={40} height={40} />
                  <div className="tool-glow"></div>
                </div>

                {/* Photoshop */}
                <div className="tool-icon" style={{ '--delay': '0.3s', '--top': '15%', '--right': '25%' } as React.CSSProperties}>
                  <Image src="/design-tools/photoshop.svg" alt="Adobe Photoshop" width={40} height={40} />
                  <div className="tool-glow"></div>
                </div>

                {/* Illustrator */}
                <div className="tool-icon" style={{ '--delay': '0.6s', '--top': '40%', '--left': '15%' } as React.CSSProperties}>
                  <Image src="/design-tools/illustrator.svg" alt="Adobe Illustrator" width={40} height={40} />
                  <div className="tool-glow"></div>
                </div>

                {/* After Effects */}
                <div className="tool-icon" style={{ '--delay': '0.9s', '--bottom': '30%', '--right': '20%' } as React.CSSProperties}>
                  <Image src="/design-tools/after-effects.svg" alt="Adobe After Effects" width={40} height={40} />
                  <div className="tool-glow"></div>
                </div>

                {/* XD */}
                <div className="tool-icon" style={{ '--delay': '1.2s', '--bottom': '15%', '--left': '25%' } as React.CSSProperties}>
                  <Image src="/design-tools/xd.svg" alt="Adobe XD" width={40} height={40} />
                  <div className="tool-glow"></div>
                </div>

                {/* Sketch */}
                <div className="tool-icon" style={{ '--delay': '1.5s', '--top': '25%', '--right': '15%' } as React.CSSProperties}>
                  <Image src="/design-tools/sketch.svg" alt="Sketch" width={40} height={40} />
                  <div className="tool-glow"></div>
                </div>
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
