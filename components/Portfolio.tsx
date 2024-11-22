'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  // Branding Projects
  {
    id: 1,
    title: "Nike Brand Campaign",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
    description: "Sportswear brand identity and campaign"
  },
  {
    id: 2,
    title: "Restaurant Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&q=80",
    description: "Upscale restaurant brand identity"
  },
  {
    id: 3,
    title: "Coffee Shop Identity",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80",
    description: "Artisanal coffee brand design"
  },

  // UI/UX Projects
  {
    id: 4,
    title: "E-commerce App",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80",
    description: "Fashion e-commerce platform design"
  },
  {
    id: 5,
    title: "Food Delivery App",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80",
    description: "Restaurant delivery interface"
  },
  {
    id: 6,
    title: "Fitness Dashboard",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
    description: "Workout tracking app design"
  },

  // Motion Projects
  {
    id: 7,
    title: "Product Launch",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80",
    description: "Sneaker product launch animation"
  },
  {
    id: 8,
    title: "Fashion Show Reel",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80",
    description: "Luxury fashion show highlights"
  },
  {
    id: 9,
    title: "Food Commercial",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80",
    description: "Gourmet burger commercial"
  },

  // Photography Projects
  {
    id: 10,
    title: "Fashion Editorial",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
    description: "High fashion editorial shoot"
  },
  {
    id: 11,
    title: "Product Showcase",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80",
    description: "Athletic footwear photography"
  },
  {
    id: 12,
    title: "Food Photography",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80",
    description: "Culinary arts and food styling"
  },

  // Social Media Projects
  {
    id: 13,
    title: "Fashion Campaign",
    category: "Social",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80",
    description: "Fashion brand social campaign"
  },
  {
    id: 14,
    title: "Restaurant Marketing",
    category: "Social",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    description: "Restaurant social media content"
  },
  {
    id: 15,
    title: "Lifestyle Content",
    category: "Social",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80",
    description: "Fashion lifestyle photography"
  }
];

const categories = ["All", "Branding", "UI/UX", "Motion", "Photography", "Social"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Featured Work
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my latest projects and creative endeavors across various design disciplines
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                  ${activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'glass-card text-gray-400 hover:text-white'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="space-y-2">
                      <span className="text-sm text-purple-400">{project.category}</span>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
