import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "shah.sagar2006@gmail.com",
      link: "mailto:shah.sagar2006@gmail.com",
      color: "group-hover:text-yellow-500",
      iconColor: "text-yellow-500",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "+91 9820938124",
      link: "https://wa.me/+919820938124",
      color: "group-hover:text-green-500",
      iconColor: "text-green-500",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Sagar Shah",
      link: "https://www.linkedin.com/in/sagar-shah-a29a77271/",
      color: "group-hover:text-blue-500",
      iconColor: "text-blue-500",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "saga-r-code",
      link: "https://github.com/saga-r-code",
      color: "group-hover:text-gray-400",
      iconColor: "",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      value: "_sagar__1108",
      link: "https://www.instagram.com/_sagar__1108",
      color: "group-hover:text-pink-500",
      iconColor: "text-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="w-full mx-auto container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 group space-y-4">
          <span className="bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
          <div className=" h-1 w-0 group-hover:w-28 transition-all bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full" />
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-gray-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
              Send a Message
            </h3>

            {/* Coming Soon Message */}
            <div className="text-center p-4 mb-4 bg-gray-800/50 rounded-xl border border-emerald-500/20">
              <p className="text-emerald-400 font-medium mb-1">
                🚀 Coming Soon!
              </p>
              <p className="text-gray-400 text-sm">
                The contact form is under development. Meanwhile, please reach
                out through the contact information provided.
              </p>
            </div>

            <form className="space-y-6 opacity-75">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    disabled
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 cursor-not-allowed"
                    placeholder="Unknown User"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    disabled
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 cursor-not-allowed"
                    placeholder="xyz@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  disabled
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 cursor-not-allowed"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  disabled
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700/50 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 cursor-not-allowed"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                disabled
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500/50 to-blue-500/50 text-white font-semibold py-4 rounded-xl
                transition-all duration-300 cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Link
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className={`text-2xl transition-colors duration-300 ${info.iconColor}`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{info.label}</p>
                      <p
                        className={`font-medium transition-colors duration-300 ${info.color}`}
                      >
                        {info.value}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-2xl font-semibold mb-4 text-white">
                Let&apos;s Build Something Extraordinary! ⚡
              </h4>
              <div className="flex flex-col gap-6 text-gray-300">
                <p className="italic text-emerald-400">
                  &quot;Hi there! I&apos;m Sagar, and I&apos;m excited about the
                  possibility of working together!&quot;
                </p>
                <p>
                  As a passionate developer who&rsquo;s always eager to learn
                  and grow, I&lsquo;m actively seeking opportunities to:
                </p>
                <ul className="text-blue-400 space-y-2">
                  <li>Collaborate on innovative projects</li>
                  <li>Share knowledge and learn from others</li>
                  <li>Create impactful solutions together</li>
                  <li>Grow alongside fellow developers</li>
                </ul>
                <p className="tracking-wide leading-relaxed text-emerald-400">
                  I believe in building meaningful connections and creating
                  solutions that make a difference. If you&apos;re looking for
                  someone who brings knowledge of creating websites, I&#39;d
                  love to be part of your next project or team!
                </p>

                <div className="text-center p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl border border-gray-700/50 hover:border-emerald-500/20 transition-all duration-300">
                  <p className="text-lg font-medium bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                    Let&apos;s connect and explore how we can create something
                    amazing together!{" "}
                    <span className="text-emerald-400">🚀</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
