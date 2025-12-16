'use client';

import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32"
    >
      <div className="container-custom">
        <div className="max-w-4xl">
          
          {/* Label */}
          <span className={`inline-flex items-center gap-3 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-8 h-px bg-accent" />
            About
          </span>

          {/* Main Text */}
          <p className={`text-3xl md:text-4xl lg:text-5xl font-display font-medium text-secondary leading-snug transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            I&apos;m <span className="text-accent">Saeed</span>, a video editor and motion designer based in Dubai. I help brands tell their stories through 
            <span className="text-accent"> compelling visuals</span> and 
            <span className="text-accent"> cinematic narratives</span>.
          </p>

          {/* Tools */}
          <div className={`mt-16 pt-16 border-t border-secondary/10 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-sm text-secondary/40 tracking-[0.15em] uppercase">Tools I Use</span>
            <p className="mt-4 text-lg text-secondary/60">
              Premiere Pro • After Effects • DaVinci Resolve • Cinema 4D • Photoshop • Illustrator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
