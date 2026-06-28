'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { useEffect, useState } from 'react'
import { Briefcase, Smartphone, Code2, Users } from 'lucide-react'

export function About() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return (
    <section id="about" className="relative bg-dark-bg py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background accent - responsive sizing */}
      <motion.div
        className="absolute -right-20 top-1/2 h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 rounded-full bg-neon-blue/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Additional background glow for mobile */}
      <motion.div
        className="absolute -left-20 bottom-0 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-neon-cyan/5 blur-2xl lg:hidden"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="gradient-text">About Me</span>
              </h2>

              {/* Role Badge - New */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 sm:px-4 py-1.5 sm:py-2"
              >
                <Briefcase size={isMobile ? 14 : 16} className="text-neon-cyan" />
                <span className="text-xs sm:text-sm font-medium text-neon-cyan">
                  Implementation & Support Engineer @ FINTECH-group Kenya
                </span>
              </motion.div>

              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
                <p>
                  {isMobile ? (
                    "I'm a passionate developer currently working as an Implementation and Support Engineer at FINTECH-group Kenya, and also building Android apps."
                  ) : (
                    "I'm a passionate developer currently working as an Implementation and Support Engineer at FINTECH-group Kenya, where I help deploy and maintain financial technology solutions. I also build Android apps, combining my love for mobile development with full-stack expertise."
                  )}
                </p>

                <p>
                  {isMobile ? (
                    "I specialize in full-stack development, Android apps, and system implementations."
                  ) : isTablet ? (
                    "My journey spans full-stack web development, Android app development, and system implementation. I specialize in building robust APIs, interactive front-end interfaces, scalable backend systems, and native mobile experiences."
                  ) : (
                    "My journey in software development spans across full-stack web development, Android app development, and system implementation. I specialize in building robust APIs, interactive front-end interfaces, scalable backend systems, and native mobile experiences that solve real-world problems."
                  )}
                </p>

                {!isMobile && (
                  <p>
                    At FINTECH-group Kenya, I work on implementing and supporting financial technology solutions that empower businesses and individuals. When I'm not coding, I explore new technologies, contribute to open-source projects, and share knowledge with the developer community.
                  </p>
                )}
              </div>

              {/* Specializations - New */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4"
              >
                {[
                  { icon: Code2, label: 'Full-Stack Web' },
                  { icon: Smartphone, label: 'Android Apps' },
                  { icon: Briefcase, label: 'System Implementation' },
                  { icon: Users, label: 'Support & Training' },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, borderColor: 'rgba(0, 217, 255, 0.6)' }}
                      className="flex items-center gap-2 sm:gap-3 rounded-lg border border-neon-cyan/20 bg-dark-secondary/30 p-2 sm:p-3 transition-all"
                    >
                      <div className="rounded-lg bg-neon-cyan/10 p-1.5 sm:p-2">
                        <Icon size={isMobile ? 14 : 18} className="text-neon-cyan" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground/80">
                        {item.label}
                      </span>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* Stats - responsive grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8"
              >
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '100%', label: 'Dedication' },
                ].map((stat, i) => (
                  <motion.div 
                    key={i} 
                    className="space-y-1 sm:space-y-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neon-cyan">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-foreground/60">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA for mobile */}
              {isMobile && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-6"
                >
                  <a 
                    href="#projects" 
                    className="inline-block w-full sm:w-auto text-center px-6 py-3 bg-neon-cyan text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
                  >
                    View My Work
                  </a>
                </motion.div>
              )}
            </motion.div>

            {/* Visual element - responsive sizing and positioning */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="glow-box aspect-square overflow-hidden rounded-xl max-w-sm sm:max-w-md lg:max-w-full mx-auto lg:mx-0">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                  className="animated-gradient h-full w-full bg-gradient-to-br from-neon-cyan/20 via-neon-blue/20 to-neon-purple/20"
                />

                {/* Overlay content - New */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center"
                  >
                    <div className="mb-2 sm:mb-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-neon-cyan">
                      FINTECH
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-foreground/60">
                      Implementation & Support
                    </div>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base text-foreground/60">
                      + Android Development
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating elements - responsive count and size */}
              {!isMobile && [...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-lg border border-neon-cyan/20 bg-dark-secondary/30 backdrop-blur-md flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl`}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    top: `${20 + i * 25}%`,
                    right: `${10 + i * 15}%`,
                  }}
                >
                  {['💼', '📱', '⚡'][i]}
                </motion.div>
              ))}

              {/* Mobile floating elements - smaller and fewer */}
              {isMobile && [...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-10 w-10 rounded-lg border border-neon-cyan/20 bg-dark-secondary/30 backdrop-blur-md flex items-center justify-center text-xl"
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                    rotate: [0, 8, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    top: `${30 + i * 30}%`,
                    right: `${5 + i * 20}%`,
                  }}
                >
                  {['💼', '📱'][i]}
                </motion.div>
              ))}

              {/* Decorative dots - mobile only */}
              {isMobile && (
                <div className="absolute -bottom-4 -left-4 flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full bg-neon-cyan/30"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import { ScrollReveal } from './scroll-reveal'

// export function About() {
//   return (
//     <section id="about" className="relative bg-dark-bg py-24 sm:py-32">
//       {/* Background accent */}
//       <motion.div
//         className="absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-neon-blue/10 blur-3xl"
//         animate={{
//           x: [0, 30, 0],
//           y: [0, -30, 0],
//         }}
//         transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
//       />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <ScrollReveal>
//           <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
//             {/* Content */}
//             <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//               <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
//                 <span className="gradient-text">About Me</span>
//               </h2>

//               <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
//                 <p>
//                   I'm a passionate full-stack developer with a deep love for creating elegant solutions to complex problems. With expertise in modern web technologies, I build applications that are not just functional but also delightful to use.
//                 </p>

//                 <p>
//                   My journey in software development spans across multiple technologies and frameworks. I specialize in building robust APIs, interactive front-end interfaces, and scalable backend systems.
//                 </p>

//                 <p>
//                   When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. Let's build something amazing together.
//                 </p>
//               </div>

//               {/* Stats */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3"
//               >
//                 {[
//                   { number: '50+', label: 'Projects' },
//                   { number: '5+', label: 'Years Experience' },
//                   { number: '100%', label: 'Dedication' },
//                 ].map((stat, i) => (
//                   <div key={i} className="space-y-2">
//                     <div className="text-3xl font-bold text-neon-cyan">{stat.number}</div>
//                     <div className="text-sm text-foreground/60">{stat.label}</div>
//                   </div>
//                 ))}
//               </motion.div>
//             </motion.div>

//             {/* Visual element */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="glow-box aspect-square overflow-hidden rounded-xl">
//                 <motion.div
//                   animate={{
//                     backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
//                   }}
//                   transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
//                   className="animated-gradient h-full w-full bg-gradient-to-br from-neon-cyan/20 via-neon-blue/20 to-neon-purple/20"
//                 />
//               </div>

//               {/* Floating elements */}
//               {[...Array(3)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className={`absolute h-20 w-20 rounded-lg border border-neon-cyan/20 bg-dark-secondary/30 backdrop-blur-md`}
//                   animate={{
//                     y: [0, -20, 0],
//                     x: [0, 10, 0],
//                     rotate: [0, 10, 0],
//                   }}
//                   transition={{
//                     duration: 4 + i,
//                     repeat: Infinity,
//                     ease: 'easeInOut',
//                   }}
//                   style={{
//                     top: `${20 + i * 25}%`,
//                     right: `${10 + i * 15}%`,
//                   }}
//                 />
//               ))}
//             </motion.div>
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   )
// }
