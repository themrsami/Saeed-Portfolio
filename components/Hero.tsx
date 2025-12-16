'use client';

import { useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-primary">
      
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px]" />
      </div>

      {/* Top Marquee */}
      <div className={`relative pt-12 lg:pt-16 overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[12vw] font-display font-bold text-secondary/[0.03] mx-4 leading-none">
              DESIGNER • EDITOR • CREATOR • ARTIST •
            </span>
          ))}
        </div>
      </div>

      {/* Main Content - Center */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-custom w-full">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Eyebrow */}
            <div className={`mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="inline-flex items-center gap-4 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase">
                <span className="w-8 h-px bg-accent" />
                Creative Designer
                <span className="w-8 h-px bg-accent" />
              </span>
            </div>

            {/* Main Name */}
            <h1 className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Outline Text - Background */}
              <span 
                className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-bold tracking-tight leading-none"
                style={{
                  WebkitTextStroke: '1px rgba(245, 245, 240, 0.1)',
                  WebkitTextFillColor: 'transparent',
                  transform: 'translate(-8px, -8px)'
                }}
              >
                SAEED
              </span>
              {/* Filled Text - Foreground */}
              <span className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-bold tracking-tight text-secondary leading-none">
                SAEED
              </span>
            </h1>

            {/* Subtitle with Accent */}
            <div className={`mt-4 mb-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-secondary/60">
                I create <span className="text-accent font-medium">visual stories</span> that captivate
              </p>
            </div>

            {/* Services Tags */}
            <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {['Video Editing', 'Motion Graphics', 'Visual Effects', 'Creative Direction'].map((service, index) => (
                <span 
                  key={service}
                  className="px-5 py-2.5 text-sm font-medium text-secondary/60 border border-secondary/10 rounded-full hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="btn-primary"
              >
                Explore Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Let&apos;s Connect
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 pb-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-secondary/5">
            
            {/* Stats */}
            <div className={`flex gap-12 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {[
                { value: '5+', label: 'Years' },
                { value: '150+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
              ].map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-display font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-secondary/40 mt-1 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <button 
              onClick={() => scrollToSection('about')}
              className={`flex items-center gap-3 text-secondary/40 hover:text-accent transition-all duration-300 group ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="text-xs tracking-widest uppercase">Scroll Down</span>
              <div className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:border-accent transition-colors">
                <FiArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Marquee - Reverse Direction */}
      <div className={`absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[8vw] font-display font-bold text-secondary/[0.02] mx-4 leading-none">
              MOTION • DESIGN • CREATIVITY • VISION •
            </span>
          ))}
        </div>
      </div>

      {/* CSS for Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
