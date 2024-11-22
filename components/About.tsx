import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(123,31,162,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_300px,rgba(59,130,246,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-grid"></div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Main Content Card */}
          <div className="glass-card rounded-[2.5rem] p-12 shadow-2xl">
            {/* Glow Effects */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Left Column - Image & Stats */}
              <div className="lg:col-span-1 space-y-8">
                {/* Profile Image Container */}
                <div className="relative">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-card">
                    <Image
                      src="/saeed.jpg"
                      alt="Saeed Ijaz"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Name Tag */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%]">
                    <div className="glass-card p-4 rounded-xl text-center">
                      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        Saeed Ijaz
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 pt-8">
                  {[
                    { label: 'Experience', value: '5+' },
                    { label: 'Projects', value: '100+' },
                  ].map((stat, index) => (
                    <div key={index} className="glass-card p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Title & Description */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    Creative Designer
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Transforming ideas into captivating visual experiences through innovative design solutions.
                  </p>
                </div>

                {/* Skills Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: 'Design',
                      skills: [
                        { name: 'UI/UX Design', level: 90 },
                        { name: 'Graphic Design', level: 95 },
                        { name: 'Motion Design', level: 85 }
                      ]
                    },
                    {
                      title: 'Tools',
                      skills: [
                        { name: 'Adobe Suite', level: 95 },
                        { name: 'Figma', level: 90 },
                        { name: 'After Effects', level: 85 }
                      ]
                    }
                  ].map((category, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-xl space-y-4">
                      <h4 className="text-lg font-semibold text-white/90">{category.title}</h4>
                      <div className="space-y-4">
                        {category.skills.map((skill, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-300">{skill.name}</span>
                              <span className="text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="h-1.5 bg-white/[0.03] rounded-full overflow-hidden">
                              <div 
                                className="skill-bar h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Skills */}
                <div className="flex flex-wrap gap-3">
                  {[
                    'Brand Identity', 'Visual Design', '3D Design',
                    'Motion Graphics', 'Video Editing', 'Creative Direction'
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="skill-tag px-4 py-2 rounded-full text-sm glass-card text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
