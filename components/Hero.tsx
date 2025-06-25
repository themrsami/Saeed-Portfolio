'use client';
import React, { useEffect, useState } from 'react';
import { FiArrowDown, FiPlay, FiVideo, FiHeart, FiCamera, FiEdit3, FiZap, FiStar } from 'react-icons/fi';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const dynamicWords = ['CINEMATIC', 'CREATIVE', 'INNOVATIVE', 'ARTISTIC', 'PROFESSIONAL'];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);

    // Dynamic word rotation
    const wordRotation = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % dynamicWords.length);
        setIsTyping(true);
      }, 300);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(wordRotation);
    };
  }, [dynamicWords.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative overflow-hidden pt-32 pb-28"
      id="home"
    >
      {/* Interactive floating elements for depth */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced floating geometric shapes */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500/40 rotate-45 animate-pulse shadow-lg shadow-purple-500/20"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-500/30 rounded-full animate-bounce shadow-lg shadow-pink-500/20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-500/40 rotate-45 animate-ping shadow-lg shadow-blue-500/20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-yellow-500/30 rounded-full animate-pulse shadow-lg shadow-yellow-500/20" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-emerald-500/20 rotate-12 animate-bounce shadow-lg shadow-emerald-500/20" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Cinematic light rays */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 right-1/3 w-px h-24 bg-gradient-to-b from-pink-400/20 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-0 left-2/3 w-px h-40 bg-gradient-to-b from-blue-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full">
          
          {/* Enhanced Header Badge */}
          <div className={`flex justify-center mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative inline-flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <FiVideo className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-pulse" />
                  <FiCamera className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                </div>
                <span className="text-white/90 text-xs sm:text-sm font-semibold tracking-wide text-center">
                  <span className="hidden sm:inline">Video Editor & Motion Designer</span>
                  <span className="sm:hidden">Video Editor</span>
                </span>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <FiEdit3 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <FiHeart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center space-y-8">
            
            {/* Enhanced Name & Title with Dynamic Text */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: '200ms' }}>
                  <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                    Saeed Ijaz
                    {/* Subtle glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-50"></span>
                  </span>
                </h1>
                
                {/* Floating accent elements around name */}
                <div className="absolute -top-4 -left-4 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -top-2 -right-6 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              {/* Dynamic subtitle with word rotation */}
              <div className="relative h-12 flex items-center justify-center">
                <h2 className={`text-xl sm:text-2xl lg:text-3xl font-light text-purple-300 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                    style={{ transitionDelay: '400ms' }}>
                  <span className="text-white/90">I Create </span>
                  <span className={`bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold transition-all duration-500 ${isTyping ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {dynamicWords[currentWordIndex]}
                  </span>
                  <span className="text-white/90"> Stories</span>
                </h2>
              </div>
              
              {/* Enhanced accent line with animation */}
              <div className="flex justify-center">
                <div className={`relative transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                     style={{ transitionDelay: '600ms' }}>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                  <div className="absolute inset-0 w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
                  <div className="absolute left-1/2 top-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Description with Cinematic Feel */}
            <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                 style={{ transitionDelay: '800ms' }}>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/80 leading-relaxed font-light relative">
                <span className="relative z-10">
                  Bringing stories to life through 
                  <span className="text-purple-300 font-semibold"> cinematic videography</span>, 
                  <span className="text-pink-300 font-semibold"> dynamic motion graphics</span>, 
                  and <span className="text-blue-300 font-semibold">compelling visual narratives </span> 
                  that captivate audiences and leave lasting impressions.
                </span>
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 rounded-lg blur-sm"></div>
              </p>
            </div>

            {/* Premium Skills Showcase */}
            <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto my-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                 style={{ transitionDelay: '1000ms' }}>
              {[
                { title: 'Video', desc: 'Editing', icon: <FiVideo className="w-6 h-6" />, color: 'purple' },
                { title: 'Motion', desc: 'Graphics', icon: <FiZap className="w-6 h-6" />, color: 'pink' },
                { title: 'Graphic', desc: 'Design', icon: <FiEdit3 className="w-6 h-6" />, color: 'blue' },
                { title: 'Video', desc: 'graphy', icon: <FiCamera className="w-6 h-6" />, color: 'emerald' }
              ].map((skill, index) => (
                <div 
                  key={index}
                  className="group relative p-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-lg hover:from-white/20 hover:to-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}-500/10 to-${skill.color}-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-1">
                    <div className={`flex justify-center text-${skill.color}-400 group-hover:text-${skill.color}-300 transition-colors duration-300 group-hover:scale-110 transform`}>
                      <div className="w-5 h-5">{skill.icon}</div>
                    </div>
                    <div className="text-base font-bold text-white group-hover:text-white transition-colors">
                      {skill.title}
                    </div>
                    <div className="text-xs text-white/70 group-hover:text-white/90 transition-colors font-medium">
                      {skill.desc}
                    </div>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-${skill.color}-500/0 via-${skill.color}-500/20 to-${skill.color}-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Corner accent */}
                  <div className={`absolute top-3 right-3 w-2 h-2 bg-${skill.color}-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                 style={{ transitionDelay: '1200ms' }}>
              
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold text-base sm:text-lg rounded-full overflow-hidden hover:scale-105 sm:hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <FiPlay className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="whitespace-nowrap">
                    <span className="hidden sm:inline">Explore My Work</span>
                    <span className="sm:hidden">My Work</span>
                  </span>
                  <FiStar className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full blur-sm"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-colors duration-300"></div>
              </button>
              
              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/20 hover:border-purple-400/60 hover:scale-105 sm:hover:scale-110 transition-all duration-500 overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                  <FiHeart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-pink-400 transition-colors duration-300" />
                  <span className="whitespace-nowrap">
                    <span className="hidden sm:inline">Let&apos;s Collaborate</span>
                    <span className="sm:hidden">Collaborate</span>
                  </span>
                  <FiArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 group-hover:text-purple-300 transition-all duration-300" />
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? 'w-1 h-1 bg-purple-400/30' : 
              i % 3 === 1 ? 'w-0.5 h-0.5 bg-pink-400/40' : 
              'w-1.5 h-1.5 bg-blue-400/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Floating sparkles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          >
            <FiStar className="w-2 h-2 text-yellow-400/40" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
