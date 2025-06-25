'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiStar } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = menuItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          return {
            id: item.id,
            offset: Math.abs(element.getBoundingClientRect().top - 100)
          };
        }
        return { id: item.id, offset: Infinity };
      });

      const currentSection = sections.reduce((prev, curr) => 
        prev.offset < curr.offset ? prev : curr
      );

      setActiveSection(currentSection.id);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Premium Navigation Container */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <div className={`
            relative flex items-center justify-between
            px-6 py-4 rounded-3xl
            transition-all duration-700 ease-out
            ${scrolled 
              ? 'bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' 
              : 'bg-transparent'
            }
          `}>
            
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2 z-20">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <FiStar className="text-white text-sm" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Saeed&nbsp;<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Designs</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex items-center space-x-1">
                {menuItems.map((item, index) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        relative px-6 py-3 rounded-2xl text-sm font-medium
                        transition-all duration-500 ease-out
                        group overflow-hidden
                        ${activeSection === item.id
                          ? 'text-white bg-white/10 backdrop-blur-sm'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }
                      `}
                      style={{ 
                        animationDelay: `${index * 100}ms`,
                        animation: 'navItemSlide 0.8s ease-out forwards'
                      }}
                    >
                      {/* Hover effect background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
                      
                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                      )}
                      
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                md:hidden relative z-20 flex items-center justify-center p-3 rounded-2xl
                transition-all duration-300 ease-out
                ${scrolled ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/5'}
                hover:bg-white/20 hover:scale-105
                text-white
              `}
              aria-label="Toggle Menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Only animate translate for burger, not rotate for X */}
                {!isOpen ? (
                  <span className={`block transition-all duration-300 ${isOpen ? '' : '-translate-y-0.5'}`}>
                    <FiMenu size={24} />
                  </span>
                ) : (
                  <span className="block transition-all duration-300">
                    <FiX size={24} />
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-all duration-700 ease-out
          ${isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`
          absolute top-0 right-0 h-full w-80 max-w-full
          bg-gradient-to-br from-gray-900/95 to-black/95
          backdrop-blur-xl border-l border-white/10
          transform transition-transform duration-700 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <ul className="space-y-2 flex-1">
              {menuItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full text-left px-6 py-4 rounded-2xl text-lg font-medium
                      transition-all duration-500 ease-out
                      relative overflow-hidden group
                      ${activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }
                    `}
                    style={{ 
                      animationDelay: `${(index + 1) * 100}ms`,
                      animation: isOpen ? 'mobileMenuSlide 0.6s ease-out forwards' : 'none',
                      opacity: 0,
                      transform: 'translateX(100px)'
                    }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-2xl" />
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Mobile Menu Footer */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-gray-400 text-sm text-center">
                Let&apos;s create something amazing together
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic cursor effect for desktop */}
      <div 
        className="hidden lg:block fixed pointer-events-none z-30 w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-sm transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
      />
    </>
  );
};

export default Navbar;
