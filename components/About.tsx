'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiZap, FiStar} from 'react-icons/fi';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="relative min-h-screen py-20">
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Enhanced Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg">
                  ✦ About Me ✦
                </span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                Meet the Creator
                <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-30"></span>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              Passionate video editor and motion designer crafting 
              <span className="text-purple-300 font-semibold"> visual stories </span>
              that <span className="text-pink-300 font-semibold">captivate and inspire</span>
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
              {[
                { label: "Experience", value: "5+" },
                { label: "Projects", value: "150+" },
                { label: "Happy Clients", value: "50+" },
                { label: "Creative Hours", value: "10K+" }
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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Side - Profile Card */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="group relative backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-700">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg"></div>
                
                <div className="relative">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="aspect-square w-32 mx-auto rounded-xl overflow-hidden backdrop-blur-xl border border-white/10 group-hover:scale-105 transition-all duration-500">
                      <Image
                        src="/saeed.jpg"
                        alt="Saeed Ijaz"
                        fill
                        className="object-cover"
                        sizes="128px"
                        priority
                      />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#0A0A0A] animate-pulse"></div>
                  </div>
                  
                  {/* Profile Info */}
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Saeed Ijaz
                    </h3>
                    <p className="text-white/70 text-sm">Video Editor & Motion Designer</p>
                    <p className="text-white/50 text-xs leading-relaxed">
                      Based in Pakistan, creating compelling visual narratives through expert editing and motion graphics.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="text-center p-3 backdrop-blur-xl border border-white/10 rounded-lg">
                      <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">5+</div>
                      <div className="text-xs text-white/60">Years</div>
                    </div>
                    <div className="text-center p-3 backdrop-blur-xl border border-white/10 rounded-lg">
                      <div className="text-lg font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">100+</div>
                      <div className="text-xs text-white/60">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center - Specialties */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <FiStar className="w-5 h-5 text-pink-400" />
                  <h4 className="text-lg font-bold text-white">Specialties</h4>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-sm font-semibold text-white/80 mb-2">Software</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D'].map((tool, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 border border-white/10 rounded-full text-xs text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-white/80 mb-2">Services</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Brand Videos', 'Social Content', 'Documentary', 'Motion Design'].map((service, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 border border-white/10 rounded-full text-xs text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-white/80 mb-2">Expertise</h5>
                    <div className="flex flex-wrap gap-2">
                      {['Visual Storytelling', 'Post Production', 'Creative Concepts'].map((expertise, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 border border-white/10 rounded-full text-xs text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
                        >
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Core Skills */}
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '600ms' }}>
              <div className="backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <FiZap className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Core Skills</h4>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: 'Video Editing', level: 95 },
                    { name: 'Motion Graphics', level: 90 },
                    { name: 'Creative Direction', level: 88 },
                    { name: 'Color Grading', level: 85 }
                  ].map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/90 text-sm font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-xs font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            transitionDelay: `${index * 150}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
