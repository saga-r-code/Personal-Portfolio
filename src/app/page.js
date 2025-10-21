import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { TbArrowBigUpLine } from "react-icons/tb";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Page = () => {
  return (
    <main className="relative w-screen overflow-auto min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(52,211,153,0.15),rgba(255,255,255,0))] text-white">
      {/* Social Links */}
      <div className="hidden md:fixed right-10 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col justify-center space-y-12 items-center">
          <Link
            href="https://github.com/saga-r-code"
            target="_blank"
            className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer group hover:scale-110"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sagar-shah-a29a77271/"
            target="_blank"
            className="text-blue-500 hover:text-blue-600 transition-colors duration-300 cursor-pointer group hover:scale-110"
          >
            <FaLinkedin size={28} />
          </Link>
          <Link
            href="https://wa.me/+919820938124"
            target="_blank"
            className="text-green-500 hover:text-green-600 transition-colors duration-300 cursor-pointer group hover:scale-110"
          >
            <IoLogoWhatsapp size={28} />
          </Link>
          <Link
            href="https://www.instagram.com/_sagar__1108"
            target="_blank"
            className="text-pink-500 hover:text-pink-600 transition-colors duration-300 cursor-pointer group hover:scale-110"
          >
            <AiFillInstagram size={30} />
          </Link>
          <Link
            href="mailto:shah.sagar2006@gmail.com"
            target="_blank"
            className="text-yellow-500 hover:text-yellow-600 transition-colors duration-300 cursor-pointer group hover:scale-110"
          >
            <FaEnvelope size={28} />
          </Link>
        </div>
      </div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="#">
          <button className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full fixed flex items-center justify-center bottom-10 right-10 shadow-lg shadow-emerald-500/50 z-20 ">
            <TbArrowBigUpLine className="text-white text-2xl" />
          </button>
        </Link>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
