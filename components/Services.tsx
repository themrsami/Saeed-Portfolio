'use client';

import React from 'react';
import { FiLayout, FiPenTool, FiVideo, FiCamera, FiInstagram, FiPackage } from 'react-icons/fi';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Brand Identity",
    description: "Creating distinctive brand identities that resonate with your audience and stand out in the market.",
    icon: <FiPackage className="w-6 h-6" />,
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity Systems",
      "Brand Strategy"
    ]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging digital experiences that delight users and drive results.",
    icon: <FiLayout className="w-6 h-6" />,
    features: [
      "User Interface Design",
      "User Experience Design",
      "Wireframing & Prototyping",
      "Design Systems"
    ]
  },
  {
    id: 3,
    title: "Motion Design",
    description: "Bringing brands to life through dynamic animations and engaging motion graphics.",
    icon: <FiVideo className="w-6 h-6" />,
    features: [
      "Motion Graphics",
      "Brand Animation",
      "Video Editing",
      "Animated Logos"
    ]
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Creating impactful visual designs that communicate your message effectively.",
    icon: <FiPenTool className="w-6 h-6" />,
    features: [
      "Print Design",
      "Digital Graphics",
      "Marketing Materials",
      "Illustration"
    ]
  },
  {
    id: 5,
    title: "Photography",
    description: "Capturing stunning visuals that tell your brand's story and showcase your products.",
    icon: <FiCamera className="w-6 h-6" />,
    features: [
      "Product Photography",
      "Brand Photography",
      "Lifestyle Shoots",
      "Photo Editing"
    ]
  },
  {
    id: 6,
    title: "Social Media",
    description: "Developing engaging social media content that builds community and drives engagement.",
    icon: <FiInstagram className="w-6 h-6" />,
    features: [
      "Content Creation",
      "Social Media Strategy",
      "Feed Design",
      "Story Templates"
    ]
  }
];

const Services = () => {
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
              Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and engage your audience
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="glass-card rounded-2xl p-8 group hover:bg-gradient-to-br hover:from-purple-900/50 hover:to-blue-900/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 text-purple-400 group-hover:text-purple-300 transition-colors">
                  {service.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-400 group-hover:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
