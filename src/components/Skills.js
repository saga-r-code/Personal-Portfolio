import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3,
  FaNode,
  FaGithub,
  FaDatabase,
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
  SiExpo,
  SiPython,
  SiKubernetes,
  SiJenkins,
  SiDocker,
  SiSupabase,
} from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 size={20} />,
        color: "bg-orange-500",
        textColor: "text-orange-500",
      },
      {
        name: "CSS3",
        icon: <FaCss3 size={20} />,
        color: "bg-blue-500",
        textColor: "text-blue-500",
      },

      {
        name: "React",
        icon: <FaReact size={20} />,
        color: "bg-cyan-500",
        textColor: "text-cyan-500",
      },
      {
        name: "Svelte",
        icon: <SiSvelte size={20} />,
        color: "bg-orange-600",
        textColor: "text-orange-600",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={20} />,
        color: "bg-gray-500",
        textColor: "text-gray-500",
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss size={20} />,
        color: "bg-cyan-400",
        textColor: "text-cyan-400",
      },
      {
        name: "Expo",
        icon: <SiExpo size={20} />,
        color: "bg-[#000020]",
        textColor: "text-[#000020]",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Express",
        icon: <SiExpress size={20} />,
        color: "bg-gray-600",
        textColor: "text-gray-600",
      },
      {
        name: "Node.js",
        icon: <FaNode size={20} />,
        color: "bg-green-500",
        textColor: "text-green-500",
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      {
        name: "C",
        icon: <SiC size={20} />,
        color: "bg-blue-700",
        textColor: "text-blue-700",
      },
      {
        name: "C++",
        icon: <TbBrandCpp size={20} />,
        color: "bg-blue-600",
        textColor: "text-blue-600",
      },
      {
        name: "JavaScript",
        icon: <FaJs size={20} />,
        color: "bg-yellow-500",
        textColor: "text-yellow-500",
      },
      {
        name: "Python",
        icon: <SiPython size={20} />,
        color: "bg-blue-500",
        textColor: "text-blue-500",
      },
    ],
  },
  {
    category: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb size={20} />,
        color: "bg-green-600",
        textColor: "text-green-600",
      },
      {
        name: "MariaDB",
        icon: <SiMariadb size={20} />,
        color: "bg-blue-600",
        textColor: "text-blue-600",
      },
      {
        name: "Supabase",
        icon: <SiSupabase size={20} />,
        color: "bg-red-500",
        textColor: "text-red-500",
      },
      {
        name: "SQL",
        icon: <FaDatabase size={20} />,
        color: "bg-blue-500",
        textColor: "text-blue-500",
      },
      {
        name: "NeonDB",
        icon: <FaDatabase size={20} />,
        color: "bg-green-500",
        textColor: "text-green-500",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Git",
        icon: <BiLogoGit size={20} />,
        color: "bg-red-500",
        textColor: "text-red-500",
      },
      {
        name: "GitHub",
        icon: <FaGithub size={20} />,
        color: "bg-slate-300",
        textColor: "text-slate-200",
      },
      {
        name: "Postman",
        icon: <SiPostman size={20} />,
        color: "bg-[#ff713e]",
        textColor: "text-[#ff713e]",
      },
    ],
  },
  // {
  //   category: "Devops",
  //   skills: [
  //     {
  //       name: "Docker",
  //       icon: <SiDocker size={20} />,
  //       color: "bg-blue-500",
  //       textColor: "text-blue-500",
  //     },
  //     {
  //       name: "Jenkins",
  //       icon: <SiJenkins size={20} />,
  //       color: "bg-orange-500",
  //       textColor: "text-orange-500",
  //     },
  //     {
  //       name: "Kubernetes",
  //       icon: <SiKubernetes size={20} />,
  //       color: "bg-blue-500",
  //       textColor: "text-blue-500",
  //     },
  //   ],
  // },
];
const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="w-full mx-auto container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center sm:mb-14 mb-8 group">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Skills I Have
          </span>
          <div className="mt-2 h-1 w-0 group-hover:w-28 transition-all bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </h2>

        {/* For Mobile To Show Skill */}

        {/* For Medium  Size To Show Skill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((cat, catIndex) => (
            <div key={catIndex} className="group relative">
              {/* Category Card */}
              <div className="relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-xl p-4 sm:p-6 h-full border border-gray-700/50 transition-all duration-300 hover:border-gray-600 group-hover:-translate-y-2">
                {/* Category Title */}
                <h3 className="text-xl text-center font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  {cat.category}
                </h3>

                {/* Skills Grid */}
                <div className="flex flex-wrap  justify-center items-center gap-4">
                  {cat.skills.map((skill, skillIndex) => {
                    return (
                      <div
                        key={skillIndex}
                        className="flex justify-center   gap-4 px-4 pt-2 pb-1 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300 hover:scale-105"
                      >
                        {/* Icon */}
                        <div
                          className={`${skill.textColor} mb-2 transition-transform duration-300 hover:rotate-12`}
                        >
                          <span>{skill.icon}</span>
                        </div>

                        {/* Skill Name */}
                        <span className="text-sm font-semibold text-gray-300 text-center">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl bg-gradient-to-r from-emerald-400 to-blue-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
