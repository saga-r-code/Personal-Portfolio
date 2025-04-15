import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="w-full xl:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="mb-4 md:mb-0 tracking-wide">
            <p>
              © {new Date().getFullYear()}{" "}
              <Link
                href="https://github.com/saga-r-code"
                target="_blank"
                className="text-green-500 font-semibold underline hover:text-green-400"
              >
                Sagar Shah.
              </Link>{" "}
              All rights reserved.
            </p>
          </div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
