import React from 'react'
import Image from 'next/image'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiTypescript } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const Projects = () => {
  const projects = [
    {
      title: 'AppNiche Technologies',
      description: 'AppNiche Technologies is a startup venture that provides a wide range of services to help businesses grow and succeed. This startup offers a variety of services, including web development, mobile app development, and digital marketing.',
      image: '/Images/Project-1.png',
      tech: [
        { name: 'Next.js', icon: <SiNextdotjs className="text-2xl" />, color: 'hover:text-white' },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-2xl" />, color: 'hover:text-cyan-400' },
       
      ],
      liveLink: 'https://appniche.netlify.app/',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="w-full xl:w-[80%] mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Work and Personal Projects
        </h2>
        <div className="grid p-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" relative p-3 bg-gray-900/30 rounded-2xl overflow-hidden hover:transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] backdrop-blur-sm border border-emerald-500/20"
            >
              <div className="relative  rounded-2xl h-60">
                <p className='bg-green-500 rounded-lg px-2 py-1 text-black font-semibold text-sm absolute bottom-2 right-2 z-10'>Work</p>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading='lazy'
                  className="object-cover  rounded-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className='absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-all duration-500' />
              </div>
              <div className="py-6 px-3 md:p-4 lg:p-6 ">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tech Stack Section */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center gap-2 p-2 rounded-xl "
                      >
                        <div className={`text-gray-400 transition-colors duration-300 ${tech.color}`}>
                          {tech.icon}
                        </div>
                        <span className="text-xs text-gray-400 group-hover/tech:text-gray-300 text-center">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-2.5 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] font-medium text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 