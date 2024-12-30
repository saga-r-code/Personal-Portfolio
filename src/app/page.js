import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { TbArrowBigUpLine } from "react-icons/tb";
import Link from "next/link";

const Page = () => {
  return (
    <main className="w-screen min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(52,211,153,0.15),rgba(255,255,255,0))] text-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="#">
          <button className="w-12 h-12 bg-emerald-500 rounded-full fixed flex items-center justify-center bottom-10 right-10 shadow-lg shadow-emerald-500/50 z-20 ">
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
