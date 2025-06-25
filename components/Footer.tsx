'use client';

import React from 'react';
import { FiHeart, FiArrowUp, FiMail, FiMessageCircle, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 mt-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Saeed&nbsp;<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Designs</span>
                </h3>
                <p className="text-gray-400 max-w-md">
                  Creating exceptional digital experiences through innovative design and development. 
                  Let&apos;s bring your vision to life.
                </p>
              </div>
              
              {/* Quick Contact */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:hello@saeeddesigns.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/20 text-gray-300 hover:text-purple-300 transition-all duration-300"
                >
                  <FiMail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="https://wa.me/971569627100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/20 text-gray-300 hover:text-green-300 transition-all duration-300"
                >
                  <FiMessageCircle className="w-4 h-4" />
                  <span className="text-sm">WhatsApp</span>
                </a>
                <a
                  href="https://linkedin.com/in/saeeddesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/20 text-gray-300 hover:text-blue-300 transition-all duration-300"
                >
                  <FiLinkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-400 hover:text-purple-300 transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-purple-300 transition-colors">Web Development</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-purple-300 transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-purple-300 transition-colors">Brand Identity</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-purple-300 transition-colors">About</a></li>
                <li><a href="#portfolio" className="text-gray-400 hover:text-purple-300 transition-colors">Portfolio</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-purple-300 transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-purple-300 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <span>© {currentYear} SaeedDesigns. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Made with love */}
              <div className="flex items-center text-gray-400 text-sm">
                <span>Made with</span>
                <FiHeart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
                <span>by</span>
                <a
                  href="https://usamalabs.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 transition-all"
                >
                  Usama
                </a>
              </div>
              
              {/* Back to top */}
              <button
                onClick={scrollToTop}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-purple-500/10 border border-white/10 hover:border-purple-500/20 text-gray-400 hover:text-purple-300 transition-all duration-300 group"
                aria-label="Back to top"
              >
                <FiArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
