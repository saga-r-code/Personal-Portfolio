import React from "react";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiGreensock,
  SiDrizzle,
  SiPostgresql,
  SiDaisyui,
  SiVite,
  SiMongodb,
  SiShadcnui,
  SiClerk,
} from "react-icons/si";
import { CiGrid42 } from "react-icons/ci";
import { TbBrandFramerMotion } from "react-icons/tb";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Text Utils App",
      description:
        "This is my first application which I have built, and it has several command features like converting text to uppercase, lowercase, removing extra spaces, and more.",
      image: "/Images/project-1.png",
      badge: "Personal",
      type: "Landing Page",
      tech: [
        {
          name: "React.js",
          icon: <SiReact className="text-2xl text-cyan-500" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
        },
      ],
      liveLink: "https://txtool.netlify.app/",
    },
    {
      title: "Logistic Company Website",
      description:
        "A responsive landing page for a transport company with smooth animations and clean UI.It showcases the company's services with a professional look and optimized layout for all devices.",
      image: "/Images/project-2.png",
      badge: "Personal",
      type: "Landing Page",
      tech: [
        {
          name: "Framer Motion",
          icon: <TbBrandFramerMotion className="text-2xl text-pink-500" />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-2xl text-white" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
        },
      ],
      liveLink: "https://transport-company.netlify.app/",
    },
    {
      title: "Fitness Gym Website",
      description:
        "A modern and responsive landing page for a fitness brand, built with smooth GSAP animations and bold design.It highlights gym programs, trainers, and membership options with a professional and energetic look.",
      image: "/Images/project-3.png",
      badge: "Personal",
      type: "Landing Page",
      tech: [
        {
          name: "GSAP",
          icon: <SiGreensock className="text-2xl text-green-500 " />,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-2xl text-white" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
        },
      ],
      liveLink: "https://fitnessproo-gym.netlify.app/",
    },
    {
      title: "Eatofy Pos Website",
      description:
        "A responsive and modern landing page for Eatofy, a POS solution built for restaurants and cafes.It highlights core features, pricing, and benefits in a clean layout with strong visual hierarchy.",
      image: "/Images/project-4.png",
      badge: "Work",
      type: "Landing Page",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-2xl text-white" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
        },
      ],
      liveLink: "https://eatofy.netlify.app/",
    },
    {
      title: "AppNiche Technologies",
      description:
        "AppNiche Technologies is a startup venture that provides a wide range of services to help businesses grow and succeed. This startup offers a variety of services, including web development, mobile app development, and digital marketing.",
      image: "/Images/project-5.png",
      badge: "Work",
      type: "Landing Page",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-2xl text-white" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
        },
      ],
      liveLink: "https://appniche.netlify.app/",
    },
    {
      title: "Expense Tracker Web App",
      description:
        "A simple and responsive web app to track daily income and expenses with real-time balance updates.It helps users stay on top of their finances through clean input forms and categorized transaction history.",
      image: "/Images/project-6.png",
      badge: "personal",
      type: "Web App",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-2xl text-white" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
        },
        {
          name: "Mongoose",
          icon: <SiMongodb className="text-2xl text-green-400" />,
        },
        {
          name: "Clerk Auth",
          icon: <SiClerk className="text-2xl text-blue-600" />,
        },

        {
          name: "Recharts",
          icon: (
            <p className="text-sm text-sky-500">{"<ReCharts />"}</p>
          ),
        },
      ],
      liveLink: "https://expense-tracker-software.vercel.app/",
    },
    {
      title: "Next Big Idea Web App",
      description:
        "A modern web app where users can drop their creative ideas anonymously — no login required. Includes features like creating ideas, real-time idea listing, and like/unlike functionality.",
      image: "/Images/project-7.png",
      badge: "personal",
      type: "Web App",
      tech: [
        {
          name: "Vite",
          icon: <SiVite className="text-yellow-600 text-2xl" />,
        },
        {
          name: "Daizy UI",
          icon: <SiDaisyui className="text-pink-500 text-2xl" />,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-500 text-2xl" />,
        },
        {
          name: "Drizzle ORM",
          icon: <SiDrizzle className="text-green-600 text-2xl" />,
        },
      ],
      liveLink: "https://next-big-idea-one.vercel.app/",
    },
    {
      title: "Student Attendace Management Web App",
      description:
        "A comprehensive web app to manage student attendance, track daily presence, and generate detailed reports and attendance graphs.Perfect for educational institutions to visualize attendance data in real-time.",
      image: "/Images/project-8.png",
      badge: "personal",
      type: "Web App",
      tech: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-2xl text-white" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-2xl text-cyan-400" />,
        },
        {
          name: "Mongoose",
          icon: <SiMongodb className="text-2xl text-green-400" />,
        },
        {
          name: "Kinde Auth",
          icon: (
            <span className="text-2xl bg-white text-black px-2 py-0.5 rounded-full">
              K
            </span>
          ),
        },

        {
          name: "AG Grid",
          icon: <CiGrid42 className="text-2xl text-orange-400" />,
        },
        {
          name: "Shadcn",
          icon: <SiShadcnui className="text-2xl text-white" />,
        },
      ],
      liveLink: "https://student-attendify.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="w-full mx-auto container">
        {/* <div className="w-full xl:w-[95%] 2xl:[80%] mx-auto sm:px-6 lg:px-8"> */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Work and Personal Projects
        </h2>
        <div className="grid p-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" relative p-3 bg-gray-900/30 rounded-2xl overflow-hidden hover:transform transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] backdrop-blur-sm border border-emerald-500/20"
            >
              <div className="relative  rounded-2xl h-60">
                <p className="bg-green-500 rounded-lg px-2 py-1 text-black font-semibold text-sm absolute bottom-2 right-2 z-10">
                  {project.badge}
                </p>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="lazy"
                  className="object-cover  object-top  rounded-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-all duration-500" />
              </div>
              <div className="py-6 px-3 md:p-4 lg:p-6 ">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Stack Section */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap justify-start items-center gap-1">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="flex flex-col justify-center items-center gap-2 p-2 rounded-xl "
                      >
                        <div className="text-gray-400 transition-colors   duration-300 ">
                          {tech.icon}
                        </div>
                        <span className="text-xs   text-gray-400 group-hover/tech:text-gray-300 ">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 ">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 px-6 py-2.5 rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] font-medium text-white"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
