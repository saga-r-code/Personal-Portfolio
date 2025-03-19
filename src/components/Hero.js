"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Hero = () => {
  const [currentTime, setcurrentTime] = useState();
  useEffect(() => {
    const result = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setcurrentTime(`${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
    }, 1000);
    

    return () => clearInterval(result);
  }, []);

  return (
    <section className="py-20 md:py-24 lg:py-32 xl:py-40 relative">
      {/* Clock */}
      <div className=" h-8 xl:h-14 w-32 lg:w-44 absolute top-5 lg:top-10 xl:left-5">
          <p className="text-xl xl:text-3xl tracking-widest clock-font  font-semibold text-green-400 font-mycustomefont">
            {currentTime}
          </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10"
      >
        <div className="inline-block mb-4 md:mb-6 lg:mb-8 xl:mb-10 px-6 py-2 border border-emerald-500/20 rounded-full bg-emerald-500/5 backdrop-blur-sm">
          <Link href="#contact" className="text-emerald-400 cursor-pointer">
            Available for hire
          </Link>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gray-100">Hi, I'm </span>
          <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]">
            Sagar Shah
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl mb-8 font-mono">
          <span className="text-emerald-400">&lt;</span>
          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "Backend App Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <span className="text-emerald-400">/&gt;</span>
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Focused on backend development, security, scalability, and
          interactive, user-friendly designs. Passionate about learning new
          technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button className="group bg-emerald-500/10 hover:bg-emerald-500 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] backdrop-blur-sm border border-emerald-500/50 w-full sm:w-auto">
            <span className="group-hover:text-black transition-colors duration-300">
              <Link href="#projects">View Projects</Link>
            </span>
          </button>
          <button className="group bg-transparent px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] backdrop-blur-sm border border-emerald-500 w-full sm:w-auto hover:bg-emerald-500/10">
            <span>
              <Link href="#contact">Contact Me</Link>
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 items-center">
          <Link
            href="https://github.com/saga-r-code"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sagar-shah-a29a77271/"
            target="_blank"
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </Link>
          <Link
            href="https://wa.me/+919820938124"
            target="_blank"
            className="text-gray-400 hover:text-green-400 transition-colors duration-300"
          >
            <IoLogoWhatsapp size={28} />
          </Link>
          <Link
            href="https://www.instagram.com/_sagar__1108"
            target="_blank"
            className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
          >
            <AiFillInstagram size={28} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
