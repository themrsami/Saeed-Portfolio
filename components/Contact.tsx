'use client';

import React from 'react';
import { FiLinkedin, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="relative min-h-screen py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(123,31,162,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_300px,rgba(59,130,246,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-grid"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Let&apos;s Connect
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Tell me about your project"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Socials */}
            <div className="space-y-8">
              {/* Social Links */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/971569627100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500/10 text-green-500 group-hover:bg-green-500/20 transition-colors">
                      <FiMessageCircle className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-300 font-medium">WhatsApp</p>
                      <p className="text-gray-400 text-sm">+971 56 962 7100</p>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/in/saeeddesigns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500 group-hover:bg-blue-500/20 transition-colors">
                      <FiLinkedin className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-300 font-medium">LinkedIn</p>
                      <p className="text-gray-400 text-sm">@saeeddesigns</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Working Hours</h3>
                <p className="text-gray-400">
                  Monday - Friday: 9:00 AM - 6:00 PM (GST)<br />
                  Available for urgent requests on weekends
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
