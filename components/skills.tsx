'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { Database, Code2, Zap, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Skills() {
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

  const skillCategories = [
    {
      title: 'Backend',
      icon: Database,
      skills: isMobile 
        ? ['.NET/C#', 'Node.js', 'APIs', 'SQL'] 
        : ['.NET/C#', 'Node.js', 'Web APIs', 'SQL Server', 'PostgreSQL'],
      color: 'from-neon-blue to-neon-cyan',
    },
    {
      title: 'Frontend',
      icon: Code2,
      skills: isMobile 
        ? ['React', 'Next.js', 'HTML/CSS'] 
        : ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
      color: 'from-neon-cyan to-neon-purple',
    },
    {
      title: 'Technologies',
      icon: Zap,
      skills: isMobile 
        ? ['WebForms', 'REST APIs', 'Architecture'] 
        : ['WebForms', 'REST APIs', 'Database Design', 'Architecture', 'DevOps'],
      color: 'from-neon-purple to-neon-blue',
    },
    {
      title: 'Tools & Platforms',
      icon: Globe,
      skills: isMobile 
        ? ['Git', 'Docker', 'Azure'] 
        : ['Git', 'Docker', 'VS Code', 'Azure', 'Firebase'],
      color: 'from-neon-blue to-neon-cyan',
    },
  ]

  // Responsive competencies
  const competencies = isMobile 
    ? [
        'Full-Stack Dev',
        'API Design',
        'UI/UX',
        'System Design',
      ]
    : [
        'Full-Stack Development',
        'API Design & Development',
        'Database Architecture',
        'UI/UX Implementation',
        'System Design',
        'Performance Optimization',
        'Code Quality & Testing',
        'Cloud Services',
      ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="relative bg-dark-secondary py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background accent - responsive */}
      <motion.div
        className="absolute -left-40 top-1/4 h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full bg-neon-cyan/10 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Additional background glow for mobile */}
      <motion.div
        className="absolute -right-20 bottom-1/4 h-40 w-40 sm:h-56 sm:w-56 rounded-full bg-neon-blue/5 blur-2xl lg:hidden"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="mx-auto mb-10 sm:mb-12 lg:mb-16 max-w-2xl text-base sm:text-lg text-foreground/70 px-4 sm:px-0">
              {isMobile 
                ? 'Tools and technologies I use to build robust applications'
                : 'A comprehensive toolkit of technologies and frameworks I use to build robust applications'
              }
            </p>
          </div>

          {/* Skills Grid - responsive columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skillCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="glow-box h-full rounded-xl p-4 sm:p-6 transition-all duration-300 bg-dark-bg/30 backdrop-blur-sm"
                    whileHover={{
                      scale: isMobile ? 1.02 : 1.05,
                      boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon - responsive sizing */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`mb-3 sm:mb-4 h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br ${category.color} p-2 sm:p-3 text-dark-bg`}
                    >
                      <Icon className="h-full w-full" />
                    </motion.div>

                    {/* Title - responsive */}
                    <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-foreground">
                      {category.title}
                    </h3>

                    {/* Skills List - responsive spacing */}
                    <ul className="space-y-2 sm:space-y-3">
                      {category.skills.map((skill, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-sm sm:text-base text-foreground/80 hover:text-neon-cyan transition-colors"
                        >
                          <motion.div
                            className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-neon-cyan flex-shrink-0"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="break-words">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover glow effect - hidden on mobile for performance */}
                    {!isMobile && (
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20"
                        style={{
                          backgroundImage: `linear-gradient(135deg, rgb(0, 217, 255), rgb(0, 150, 255))`,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Detailed skills showcase - responsive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 sm:mt-16 lg:mt-20 rounded-xl border border-neon-cyan/30 bg-dark-bg/50 p-4 sm:p-6 lg:p-8 backdrop-blur-sm"
          >
            <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-neon-cyan">
              {isMobile ? 'Core Skills' : 'Core Competencies'}
            </h3>
            <div className="grid gap-2 sm:gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
              {competencies.map((competency, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: isMobile ? 3 : 5, color: '#00d9ff' }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-foreground/70 transition-colors"
                >
                  <motion.div
                    className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue flex-shrink-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                  <span className="break-words">{competency}</span>
                </motion.div>
              ))}
            </div>

            {/* Progress bars for visual interest - mobile only */}
            {isMobile && (
              <div className="mt-4 grid gap-2">
                {['Frontend', 'Backend', 'DevOps', 'Database'].map((skill, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs text-foreground/60">
                      <span>{skill}</span>
                      <span>{[90, 85, 75, 80][i]}%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-dark-bg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${[90, 85, 75, 80][i]}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import { ScrollReveal } from './scroll-reveal'
// import { Database, Code2, Zap, Globe } from 'lucide-react'

// export function Skills() {
//   const skillCategories = [
//     {
//       title: 'Backend',
//       icon: Database,
//       skills: ['.NET/C#', 'Node.js', 'Web APIs', 'SQL Server', 'PostgreSQL'],
//       color: 'from-neon-blue to-neon-cyan',
//     },
//     {
//       title: 'Frontend',
//       icon: Code2,
//       skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
//       color: 'from-neon-cyan to-neon-purple',
//     },
//     {
//       title: 'Technologies',
//       icon: Zap,
//       skills: ['WebForms', 'REST APIs', 'Database Design', 'Architecture', 'DevOps'],
//       color: 'from-neon-purple to-neon-blue',
//     },
//     {
//       title: 'Tools & Platforms',
//       icon: Globe,
//       skills: ['Git', 'Docker', 'VS Code', 'Azure', 'Firebase'],
//       color: 'from-neon-blue to-neon-cyan',
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <section id="skills" className="relative bg-dark-secondary py-24 sm:py-32">
//       {/* Background accent */}
//       <motion.div
//         className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-neon-cyan/10 blur-3xl"
//         animate={{
//           x: [0, -50, 0],
//           y: [0, 30, 0],
//         }}
//         transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
//       />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <ScrollReveal>
//           <div className="text-center">
//             <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
//               <span className="gradient-text">Technical Skills</span>
//             </h2>
//             <p className="mx-auto mb-16 max-w-2xl text-lg text-foreground/70">
//               A comprehensive toolkit of technologies and frameworks I use to build robust applications
//             </p>
//           </div>

//           {/* Skills Grid */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-100px' }}
//             className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
//           >
//             {skillCategories.map((category, idx) => {
//               const Icon = category.icon
//               return (
//                 <motion.div
//                   key={idx}
//                   variants={itemVariants}
//                   className="group relative"
//                 >
//                   <motion.div
//                     className="glow-box h-full rounded-xl p-6 transition-all duration-300"
//                     whileHover={{
//                       scale: 1.05,
//                       boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
//                     }}
//                   >
//                     {/* Icon */}
//                     <motion.div
//                       whileHover={{ rotate: 10, scale: 1.1 }}
//                       className={`mb-4 h-12 w-12 rounded-lg bg-gradient-to-br ${category.color} p-3 text-dark-bg`}
//                     >
//                       <Icon className="h-full w-full" />
//                     </motion.div>

//                     {/* Title */}
//                     <h3 className="mb-4 text-xl font-bold text-foreground">{category.title}</h3>

//                     {/* Skills List */}
//                     <ul className="space-y-3">
//                       {category.skills.map((skill, i) => (
//                         <motion.li
//                           key={i}
//                           initial={{ opacity: 0, x: -10 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           transition={{ delay: i * 0.1 }}
//                           className="flex items-center gap-2 text-foreground/80 hover:text-neon-cyan transition-colors"
//                         >
//                           <motion.div
//                             className="h-2 w-2 rounded-full bg-neon-cyan"
//                             animate={{ scale: [1, 1.5, 1] }}
//                             transition={{ duration: 2, repeat: Infinity }}
//                           />
//                           {skill}
//                         </motion.li>
//                       ))}
//                     </ul>

//                     {/* Hover glow effect */}
//                     <motion.div
//                       className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20"
//                       style={{
//                         backgroundImage: `linear-gradient(135deg, rgb(0, 217, 255), rgb(0, 150, 255))`,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </motion.div>
//                 </motion.div>
//               )
//             })}
//           </motion.div>

//           {/* Detailed skills showcase */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="mt-20 rounded-xl border border-neon-cyan/30 bg-dark-bg/50 p-8 backdrop-blur-sm"
//           >
//             <h3 className="mb-6 text-2xl font-bold text-neon-cyan">Core Competencies</h3>
//             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//               {[
//                 'Full-Stack Development',
//                 'API Design & Development',
//                 'Database Architecture',
//                 'UI/UX Implementation',
//                 'System Design',
//                 'Performance Optimization',
//                 'Code Quality & Testing',
//                 'Cloud Services',
//               ].map((competency, i) => (
//                 <motion.div
//                   key={i}
//                   whileHover={{ x: 5, color: '#00d9ff' }}
//                   className="flex items-center gap-3 text-foreground/70 transition-colors"
//                 >
//                   <motion.div
//                     className="h-3 w-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue"
//                     animate={{ scale: [1, 1.3, 1] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
//                   />
//                   {competency}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </ScrollReveal>
//       </div>
//     </section>
//   )
// }
