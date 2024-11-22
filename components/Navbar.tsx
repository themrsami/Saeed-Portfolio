'use client';

import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 right-4 z-50 w-full md:w-auto">
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          md:hidden absolute right-4 top-4 z-50
          p-2 rounded-xl
          ${scrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-white/10'}
          hover:bg-white/20 transition-all duration-300
          text-white
        `}
        aria-label="Toggle Menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Navigation Menu */}
      <div
        className={`
          ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          transition-all duration-500 ease-in-out
          fixed md:relative top-0 md:top-0 right-0
          h-screen md:h-auto w-full md:w-auto
          ${scrolled 
            ? 'bg-black/50 backdrop-blur-lg md:backdrop-blur-md' 
            : 'bg-black/30 backdrop-blur-sm md:backdrop-blur-sm'
          }
          md:rounded-2xl md:shadow-2xl
          border border-white/10
          md:max-w-[500px]
        `}
      >
        <ul className="flex flex-col md:flex-row items-center justify-center min-h-screen md:min-h-0 gap-2 p-4 md:p-2">
          {menuItems.map((item) => (
            <li key={item.id} className="w-full md:w-auto">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`
                  w-full md:w-auto
                  px-6 py-3 md:px-4 md:py-2
                  rounded-xl text-base
                  font-medium
                  transition-all duration-300
                  relative overflow-hidden
                  ${activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-purple-500/50 to-blue-500/50'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse" />
                )}
                <span className="relative">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;