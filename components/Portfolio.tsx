'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FiExternalLink, FiPlay, FiEye, FiArrowRight, FiStar, FiZap, FiTrendingUp } from 'react-icons/fi';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
  tech?: string[];
  year?: string;
  client?: string;
}

const projects: Project[] = [
  // Featured Projects
  {
    id: 1,
    title: "Nike Air Max Campaign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
    description: "Complete brand campaign with motion graphics and 3D visualization",
    featured: true,
    tech: ["After Effects", "Cinema 4D", "Photoshop"],
    year: "2024",
    client: "Nike"
  },
  {
    id: 2,
    title: "Luxury Restaurant Experience",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80",
    description: "Premium dining experience with complete visual identity system",
    featured: true,
    tech: ["Illustrator", "InDesign", "Figma"],
    year: "2024",
    client: "Michelin Guide"
  },
  {
    id: 3,
    title: "Artisan Coffee Brand",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80",
    description: "Sustainable coffee brand with packaging and digital presence",
    tech: ["Illustrator", "Photoshop"],
    year: "2024",
    client: "Bean & Brew"
  },

  // UI/UX Projects
  {
    id: 4,
    title: "Fashion E-commerce Platform",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80",
    description: "Next-gen shopping experience with AR try-on features",
    featured: true,
    tech: ["Figma", "Protopie", "Principle"],
    year: "2024",
    client: "StyleCorp"
  },
  {
    id: 5,
    title: "Food Delivery Revolution",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80",
    description: "Seamless food ordering with real-time tracking and social features",
    tech: ["Sketch", "InVision", "Principle"],
    year: "2024",
    client: "QuickBite"
  },
  {
    id: 6,
    title: "AI Fitness Companion",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
    description: "Personalized fitness tracking with AI-powered recommendations",
    tech: ["Figma", "Lottie", "Framer"],
    year: "2024",
    client: "FitTech"
  },

  // Motion Projects
  {
    id: 7,
    title: "Sneaker Launch Experience",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80",
    description: "3D product reveal with dynamic animations and particle effects",
    featured: true,
    tech: ["After Effects", "Cinema 4D", "Redshift"],
    year: "2024",
    client: "Jordan Brand"
  },
  {
    id: 8,
    title: "Fashion Week Highlights",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
    description: "Cinematic fashion show reel with dynamic transitions",
    tech: ["Premiere Pro", "After Effects", "DaVinci"],
    year: "2024",
    client: "Milan Fashion Week"
  },
  {
    id: 9,
    title: "Gourmet Commercial",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80",
    description: "Mouth-watering food commercial with macro cinematography",
    tech: ["Premiere Pro", "After Effects"],
    year: "2024",
    client: "Gourmet Kitchen"
  },

  // Photography Projects
  {
    id: 10,
    title: "High Fashion Editorial",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
    description: "Avant-garde fashion photography with creative lighting",
    tech: ["Canon R5", "Capture One", "Photoshop"],
    year: "2024",
    client: "Vogue Italia"
  },
  {
    id: 11,
    title: "Athletic Performance",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80",
    description: "Dynamic sports photography capturing peak performance",
    tech: ["Sony A7R5", "Lightroom", "Photoshop"],
    year: "2024",
    client: "Adidas"
  },
  {
    id: 12,
    title: "Culinary Artistry",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
    description: "Fine dining photography with artistic food styling",
    tech: ["Canon R6", "Profoto", "Capture One"],
    year: "2024",
    client: "Michelin Guide"
  },

  // Social Media Projects
  {
    id: 13,
    title: "Fashion Brand Revolution",
    category: "Social",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
    description: "Viral social media campaign with 10M+ engagement",
    tech: ["After Effects", "Photoshop", "Figma"],
    year: "2024",
    client: "Zara"
  },
  {
    id: 14,
    title: "Restaurant Social Strategy",
    category: "Social",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    description: "Complete social media transformation with UGC strategy",
    tech: ["Canva", "After Effects", "Premiere Pro"],
    year: "2024",
    client: "The Dining Room"
  },
  {
    id: 15,
    title: "Lifestyle Influence",
    category: "Social",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
    description: "Authentic lifestyle content creation and brand partnerships",
    tech: ["Lightroom", "VSCO", "Canva"],
    year: "2024",
    client: "Fashion Forward"
  }
];

const categories = ["All", "Featured", "Branding", "UI/UX", "Motion", "Photography", "Social"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [visibleProjects, setVisibleProjects] = useState(6); // Start with 6 projects
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects.filter(project => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Featured") return project.featured;
    return project.category === activeCategory;
  });

  const featuredProjects = projects.filter(p => p.featured);

  // Get projects to display based on activeCategory and visibleProjects count
  const getProjectsToDisplay = () => {
    if (activeCategory === "Featured") {
      return featuredProjects.slice(0, visibleProjects);
    }
    return filteredProjects.slice(0, visibleProjects);
  };

  const projectsToDisplay = getProjectsToDisplay();
  const hasMoreProjects = projectsToDisplay.length < filteredProjects.length;

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  // Reset visible projects when category changes
  useEffect(() => {
    setVisibleProjects(6);
  }, [activeCategory]);

  const getCategoryIcon = (category: string) => {
    const icons = {
      "All": <FiZap className="w-4 h-4" />,
      "Featured": <FiStar className="w-4 h-4" />,
      "Branding": <FiTrendingUp className="w-4 h-4" />,
      "UI/UX": <FiEye className="w-4 h-4" />,
      "Motion": <FiPlay className="w-4 h-4" />,
      "Photography": <FiExternalLink className="w-4 h-4" />,
      "Social": <FiArrowRight className="w-4 h-4" />
    };
    return icons[category as keyof typeof icons] || <FiZap className="w-4 h-4" />;
  };

  return (
    <section className="relative min-h-screen py-32" id="portfolio" ref={sectionRef}>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-pink-500/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-blue-500/30 rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg">
                  ✦ Creative Portfolio ✦
                </span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                Featured Works
                <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-30"></span>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover my latest creative projects and visual stories that 
              <span className="text-purple-300 font-semibold"> push boundaries </span>
              and <span className="text-pink-300 font-semibold">inspire audiences</span>
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
              {[
                { label: "Projects", value: "150+" },
                { label: "Clients", value: "50+" },
                { label: "Awards", value: "15+" },
                { label: "Years", value: "5+" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Category Filter */}
          <div className={`flex flex-col items-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
            
            {/* View Mode Toggle */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-white/60 text-sm font-medium">View:</span>
              <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    viewMode === 'masonry' 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Masonry
                </button>
              </div>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative overflow-hidden px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500 hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white shadow-2xl shadow-purple-500/25'
                      : 'backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {getCategoryIcon(category)}
                    {category}
                    {category === "Featured" && (
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    )}
                  </span>
                  
                  {activeCategory === category && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full blur-sm"></div>
                    </>
                  )}
                </button>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <span className="text-white/40 text-sm">
                Showing {projectsToDisplay.length} of {filteredProjects.length} projects
              </span>
            </div>
          </div>

          {/* Featured Projects Showcase - Only show when "Featured" category is active */}
          {activeCategory === "Featured" && (
            <div className={`mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  ✨ Featured Highlights
                </h3>
                <p className="text-white/60 max-w-2xl mx-auto">
                  Spotlight on my most impactful and award-winning projects
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsToDisplay.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative aspect-[4/5] rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-700 hover:scale-105 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <FiStar className="w-3 h-3" />
                      FEATURED
                    </div>
                    
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-purple-400 font-semibold bg-purple-500/20 px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                            <span className="text-xs text-white/60">{project.year}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {project.description}
                          </p>
                          {project.client && (
                            <p className="text-white/60 text-xs">
                              Client: <span className="text-purple-400">{project.client}</span>
                            </p>
                          )}
                          
                          {/* Tech Stack */}
                          {project.tech && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {project.tech.slice(0, 3).map((tech, i) => (
                                <span 
                                  key={i}
                                  className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded backdrop-blur-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {/* Action Button */}
                          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 group/btn">
                            <FiEye className="w-4 h-4" />
                            View Project
                            <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(45deg, transparent, rgba(168,85,247,0.5), transparent, rgba(236,72,153,0.5), transparent)', backgroundSize: '200% 200%', animation: hoveredProject === project.id ? 'gradientShift 3s ease infinite' : 'none' }}></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Enhanced Projects Grid */}
          {activeCategory !== "Featured" && (
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
              <div className={`${
                viewMode === 'masonry' 
                  ? 'columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8' 
                  : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              }`}>
                {projectsToDisplay.map((project, index) => (
                  <div
                    key={project.id}
                    className={`group relative ${
                      viewMode === 'masonry' ? 'break-inside-avoid' : 'aspect-[4/3]'
                    } rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      height: viewMode === 'masonry' ? `${300 + (index % 3) * 100}px` : 'auto'
                    }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Project Image */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                        <FiStar className="w-3 h-3" />
                      </div>
                    )}
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                        
                        {/* Category & Year */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-purple-400 font-semibold bg-purple-500/20 backdrop-blur-sm px-3 py-1 rounded-full border border-purple-400/30">
                            {project.category}
                          </span>
                          {project.year && (
                            <span className="text-xs text-white/60 bg-white/10 backdrop-blur-sm px-2 py-1 rounded">
                              {project.year}
                            </span>
                          )}
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-200 transition-colors">
                          {project.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Client */}
                        {project.client && (
                          <p className="text-white/60 text-xs">
                            <span className="text-white/40">for</span> <span className="text-purple-400 font-medium">{project.client}</span>
                          </p>
                        )}
                        
                        {/* Tech Stack */}
                        {project.tech && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {project.tech.slice(0, 3).map((tech, i) => (
                              <span 
                                key={i}
                                className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="text-xs text-white/50">+{project.tech.length - 3}</span>
                            )}
                          </div>
                        )}
                        
                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-2">
                          <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 group/btn">
                            <FiEye className="w-4 h-4" />
                            View
                            <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                          
                          <button className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all duration-300 group/icon">
                            <FiExternalLink className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Load More Button */}
          {hasMoreProjects && (
            <div className="text-center mt-16">
              <button 
                onClick={loadMoreProjects}
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600/40 hover:to-pink-600/40 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Load More Projects
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
