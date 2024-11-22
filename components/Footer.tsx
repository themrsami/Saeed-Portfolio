'use client';

import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative py-6 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center text-gray-400 text-sm">
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
      </div>
    </footer>
  );
};

export default Footer;
