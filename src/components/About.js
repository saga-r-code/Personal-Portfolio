import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="w-full xl:w-[80%] mx-auto  sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Heading with decorative elements */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Hey There! <span className='text-emerald-400'>👋</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Main content in a glass-morphism card */}
          <div className="bg-gray-900/30 backdrop-blur-lg sm:text-lg rounded-2xl p-5 sm:p-8 border border-gray-700/50 space-y-6">
            <p className="text-gray-300  leading-relaxed">
              I'm Sagar Shah, a passionate beginner on an exciting journey into the world of web development. 
              Like many of you, I started from scratch, armed with curiosity and determination to learn coding.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently, I'm exploring and learning Backend Development and how to make production ready code. 
              Every day is a new opportunity to learn something new, and I believe that with dedication and 
              consistent practice, anyone can become a great developer. Remember, every expert was once a beginner! 
            </p>

            {/* Philosophy section with gradient border */}
            <div className="relative p-5 sm:p-6 rounded-xl overflow-hidden  border border-emerald-500/50">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 bg-gray-900/60"></div>
              <div className="relative">
                <p className="text-emerald-400 font-medium mb-4 text-lg">My Learning Philosophy:</p>
                <ul className="grid sm:grid-cols-2 gap-4 text-gray-300 sm:text-lg lg:text-xl">
                  <li className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                    <span className="text-emerald-400 ">✨</span>
                    <span>Start small, dream big</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                    <span className="text-emerald-400 ">🌱</span>
                    <span>Learn by building real projects</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                    <span className="text-emerald-400 ">💡</span>
                    <span>Embrace mistakes as learning opportunities</span>
                  </li>
                  <li className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg border border-gray-700/50">
                    <span className="text-emerald-400 ">🚀</span>
                    <span>Keep pushing your boundaries</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-gray-300  leading-relaxed">
              When I'm not coding, I'm exploring tech tutorials, participating in coding communities, 
              and working on small projects to improve my skills. If you're also starting your coding journey, 
              remember: the most important step is to begin, and you've already taken that step!
            </p>

            {/* Resume And Progress Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
              <Link 
                href="/Sagar Shah.pdf" 
                target="_blank"
                // download={true}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-blue-500 px-8 py-3 rounded-xl 
                hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)] 
                text-center font-medium"
              >
                See My Resume
              </Link>
              <Link 
                href="#projects"
                className="w-full sm:w-auto bg-gray-800/50 px-8 py-3 rounded-xl border border-emerald-500/50
                hover:bg-emerald-500/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.5)]
                text-center"
              >
                See My Progress
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 