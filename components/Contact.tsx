'use client';

import { useState, useEffect, useRef } from 'react';
import { FiMail, FiMapPin, FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative py-32"
    >
      <div className="container-custom">
        {/* Label */}
        <span className={`inline-flex items-center gap-3 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="w-8 h-px bg-accent" />
          Get in Touch
        </span>

        {/* Main Content */}
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Big CTA Text */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-secondary leading-tight max-w-4xl mb-16">
            Have a project in mind? 
            <span className="text-accent"> Let&apos;s create something amazing together.</span>
          </h2>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            {/* Email */}
            <a 
              href="mailto:hello@saeeddesigns.com"
              className="group flex items-start gap-4 p-6 rounded-2xl border border-secondary/10 hover:border-accent/30 transition-all duration-300"
            >
              <FiMail className="w-5 h-5 text-accent mt-1" />
              <div className="flex-1">
                <p className="text-sm text-secondary/40 mb-1">Email me at</p>
                <p className="text-lg text-secondary group-hover:text-accent transition-colors">hello@saeeddesigns.com</p>
              </div>
              <FiArrowUpRight className="w-5 h-5 text-secondary/20 group-hover:text-accent transition-colors" />
            </a>

            {/* Location */}
            <div className="flex items-start gap-4 p-6 rounded-2xl border border-secondary/10">
              <FiMapPin className="w-5 h-5 text-accent mt-1" />
              <div>
                <p className="text-sm text-secondary/40 mb-1">Based in</p>
                <p className="text-lg text-secondary">Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 pt-16 border-t border-secondary/10">
            <p className="text-sm text-secondary/40 mb-6">Follow me on</p>
            <div className="flex gap-6">
              {['Behance', 'Dribbble', 'LinkedIn', 'Instagram'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="text-secondary/60 hover:text-accent transition-colors text-lg font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
