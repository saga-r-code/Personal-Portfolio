import React from "react";

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
            <h5 className="group">
              <Link href="#about" className="text-gray-300 hover:text-gray-200">
                About
                <div className=" h-0.5 w-0 group-hover:w-full transition-all bg-gradient-to-r from-emerald-400 to-blue-500 " />
              </Link>
            </h5>
            <h5 className="group">
              <Link
                href="#projects"
                className="text-gray-300 hover:text-gray-200"
              >
                Projects
              </Link>
              <div className=" h-0.5 w-0 group-hover:w-full transition-all bg-gradient-to-r from-emerald-400 to-blue-500 " />
            </h5>
            <h5 className="group">
              <Link
                href="#skills"
                className="text-gray-300 hover:text-gray-200"
              >
                Skills
              </Link>
              <div className=" h-0.5 w-0 group-hover:w-full transition-all bg-gradient-to-r from-emerald-400 to-blue-500 " />
            </h5>
            <h5 className="group">
              <Link
                href="#contact"
                className="text-gray-300 hover:text-gray-200"
              >
                Contact
              </Link>
              <div className=" h-0.5 w-0 group-hover:w-full transition-all bg-gradient-to-r from-emerald-400 to-blue-500 " />
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
