import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSvelte,
  SiExpress,
  SiMongodb,
  SiMariadb,
  SiPostman,
  SiC,
} from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-orange-500",
      textColor: "text-orange-500",
    },
    {
      name: "CSS3",
      icon: <FaCss3 className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
    },
    {
      name: "C",
      icon: <SiC className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-blue-700",
      textColor: "text-blue-700",
    },
    {
      name: "C++",
      icon: <TbBrandCpp className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      name: "React",
      icon: <FaReact className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-cyan-500",
      textColor: "text-cyan-500",
    },
    {
      name: "Svelte",
      icon: <SiSvelte className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-orange-600",
      textColor: "text-orange-600",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-gray-500",
      textColor: "text-gray-500",
    },
    {
      name: "Node.js",
      icon: <FaNode className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-green-500",
      textColor: "text-green-500",
    },
    {
      name: "Express",
      icon: <SiExpress className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-gray-600",
      textColor: "text-gray-600",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-green-600",
      textColor: "text-green-600",
    },
    {
      name: "MariaDB",
      icon: <SiMariadb className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-cyan-400",
      textColor: "text-cyan-400",
    },
    {
      name: "Git",
      icon: <BiLogoGit className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-red-500",
      textColor: "text-red-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-slate-300",
      textColor: "text-slate-200",
    },
    {
      name: "Postman",
      icon: <SiPostman className="sm:text-4xl md:text-5xl text-3xl" />,
      color: "bg-[#ff713e]",
      textColor: "text-[#ff713e]",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="w-full md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center sm:mb-16 mb-10">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
           Skills I Have
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div
                className="relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 sm:p-6 h-full 
                border border-gray-700/50 transition-all duration-300
                hover:border-gray-600
                group-hover:-translate-y-3"
              >
                {/* Icon Container */}
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon Background Circle */}
                  <div
                    className={`relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
                    bg-gradient-to-br from-gray-900 to-gray-800 
                    group-hover:ring-2 group-hover:ring-offset-2 group-hover:ring-offset-gray-800 
                    group-hover:ring-${skill.color} transition-all duration-300`}
                  >
                    {/* Icon */}
                    <div
                      className={`${skill.textColor} transform transition-transform duration-300 
                      group-hover:scale-110 group-hover:rotate-[360deg]`}
                    >
                      {skill.icon}
                    </div>
                  </div>
                  {/* Skill Name */}
                  <span className="font-semibold text-gray-300 text-center group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                transition-opacity duration-300 blur-3xl ${skill.color} border-2 border-${skill.color}`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
