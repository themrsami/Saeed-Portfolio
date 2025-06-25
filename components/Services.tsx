'use client';

import React, { useState, useEffect } from 'react';
import { FiLayout, FiPenTool, FiVideo, FiCamera, FiInstagram, FiPackage, FiStar, FiZap, FiArrowRight, FiCheck, FiTrendingUp } from 'react-icons/fi';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price?: string;
  popular?: boolean;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Creating distinctive brand identities that resonate with your audience and stand out in the market.",
    icon: <FiPackage className="w-8 h-8" />,
    features: [
      "Logo Design & Brand Marks",
      "Complete Brand Guidelines",
      "Visual Identity Systems",
      "Brand Strategy & Positioning",
      "Brand Collateral Design"
    ],
    // price removed
    color: "purple"
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging digital experiences that delight users and drive results.",
    icon: <FiLayout className="w-8 h-8" />,
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems & Libraries",
      "Usability Testing"
    ],
    // price removed
    popular: true,
    color: "pink"
  },
  {
    id: 3,
    title: "Motion Design",
    description: "Bringing brands to life through dynamic animations and engaging motion graphics.",
    icon: <FiVideo className="w-8 h-8" />,
    features: [
      "Motion Graphics & Animation",
      "Brand Animation Systems",
      "Video Editing & Post-Production",
      "Animated Logo Design",
      "Social Media Motion Content"
    ],
    // price removed
    color: "blue"
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Creating impactful visual designs that communicate your message effectively.",
    icon: <FiPenTool className="w-8 h-8" />,
    features: [
      "Print & Digital Design",
      "Marketing Material Design",
      "Packaging Design",
      "Illustration & Iconography",
      "Publication Design"
    ],
    // price removed
    color: "emerald"
  },
  {
    id: 5,
    title: "Photography",
    description: "Capturing stunning visuals that tell your brand's story and showcase your products.",
    icon: <FiCamera className="w-8 h-8" />,
    features: [
      "Product Photography",
      "Brand & Lifestyle Photography",
      "Commercial Photography",
      "Photo Editing & Retouching",
      "Creative Direction"
    ],
    // price removed
    color: "orange"
  },
  {
    id: 6,
    title: "Social Media",
    description: "Developing engaging social media content that builds community and drives engagement.",
    icon: <FiInstagram className="w-8 h-8" />,
    features: [
      "Content Creation & Design",
      "Social Media Strategy",
      "Feed Design & Planning",
      "Story Templates & Highlights",
      "Social Media Management"
    ],
    // price removed
    color: "cyan"
  }
];

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        icon: 'text-purple-400 group-hover:text-purple-300',
        gradient: 'from-purple-600 to-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-400/30',
        glow: 'shadow-purple-500/25'
      },
      pink: {
        icon: 'text-pink-400 group-hover:text-pink-300',
        gradient: 'from-pink-600 to-pink-400',
        bg: 'bg-pink-500/10',
        border: 'border-pink-400/30',
        glow: 'shadow-pink-500/25'
      },
      blue: {
        icon: 'text-blue-400 group-hover:text-blue-300',
        gradient: 'from-blue-600 to-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-400/30',
        glow: 'shadow-blue-500/25'
      },
      emerald: {
        icon: 'text-emerald-400 group-hover:text-emerald-300',
        gradient: 'from-emerald-600 to-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-400/30',
        glow: 'shadow-emerald-500/25'
      },
      orange: {
        icon: 'text-orange-400 group-hover:text-orange-300',
        gradient: 'from-orange-600 to-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-400/30',
        glow: 'shadow-orange-500/25'
      },
      cyan: {
        icon: 'text-cyan-400 group-hover:text-cyan-300',
        gradient: 'from-cyan-600 to-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-400/30',
        glow: 'shadow-cyan-500/25'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.purple;
  };

  return (
    <section className="relative min-h-screen py-32" id="services">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 left-16 w-2 h-2 bg-purple-500/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-24 w-1 h-1 bg-pink-500/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-500/30 rotate-45 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-emerald-500/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-lg">
                  ✦ Professional Services ✦
                </span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 tracking-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent relative">
                What I Offer
                <span className="absolute inset-0 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent blur-sm opacity-30"></span>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              Comprehensive design solutions tailored to 
              <span className="text-purple-300 font-semibold"> elevate your brand </span>
              and <span className="text-pink-300 font-semibold">engage your audience</span>
            </p>

            {/* Service Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
              {[
                { label: "Services", value: "6+" },
                { label: "Specialties", value: "30+" },
                { label: "Tools", value: "20+" },
                { label: "Satisfaction", value: "100%" }
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

          {/* Enhanced Services Grid */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const colors = getColorClasses(service.color);
                return (
                  <div
                    key={service.id}
                    className={`group relative backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
                      service.popular ? 'ring-2 ring-pink-500/30 shadow-2xl shadow-pink-500/10' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
                          <FiStar className="w-3 h-3" />
                          MOST POPULAR
                        </div>
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className={`mb-8 ${colors.icon} transition-all duration-500 group-hover:scale-110`}>
                      <div className={`w-16 h-16 ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="space-y-6">
                      {/* Title */}
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {service.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3">
                        <h4 className="text-white font-semibold flex items-center gap-2">
                          <FiZap className="w-4 h-4 text-purple-400" />
                          What&apos;s Included:
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300"
                            >
                              <FiCheck className={`w-4 h-4 mt-0.5 ${colors.icon.split(' ')[0]} flex-shrink-0`} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* No individual action button */}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient.replace('to-', 'via-')} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                    
                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} style={{ padding: '1px', background: hoveredService === service.id ? `linear-gradient(45deg, transparent, ${service.color === 'purple' ? 'rgba(168,85,247,0.3)' : service.color === 'pink' ? 'rgba(236,72,153,0.3)' : 'rgba(59,130,246,0.3)'}, transparent)` : 'none', backgroundSize: '200% 200%', animation: hoveredService === service.id ? 'gradientShift 3s ease infinite' : 'none' }}></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Single CTA Button */}
          <div className={`text-center mt-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FiTrendingUp className="w-6 h-6" />
                Get Started
                <FiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Services;
