'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Nike Air Max",
    category: "Brand Film",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Culinary Arts",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Street Style",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Tech Forward",
    category: "Product",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Peak Performance",
    category: "Brand Film",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600",
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="relative py-32"
      onMouseMove={handleMouseMove}
    >
      <div className="container-custom">
        {/* Label */}
        <span className={`inline-flex items-center gap-3 text-sm font-medium text-secondary/40 tracking-[0.2em] uppercase mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="w-8 h-px bg-accent" />
          Selected Work
        </span>

        {/* Project List */}
        <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group border-t border-secondary/10 last:border-b"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <a 
                href="#" 
                className="flex items-center justify-between py-8 md:py-10 transition-all duration-300 hover:px-4"
              >
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-secondary/20 text-sm font-medium w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-secondary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-6">
                  <span className="hidden md:block text-sm text-secondary/40 group-hover:text-secondary/60 transition-colors">
                    {project.category}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                    <FiArrowUpRight className="w-4 h-4 text-secondary/40 group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image on Hover */}
      {hoveredId && (
        <div 
          className="fixed pointer-events-none z-50 w-64 h-80 rounded-xl overflow-hidden shadow-2xl transition-opacity duration-300"
          style={{ 
            left: mousePos.x + 20, 
            top: mousePos.y - 160,
            opacity: hoveredId ? 1 : 0
          }}
        >
          <Image
            src={projects.find(p => p.id === hoveredId)?.image || ''}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;
