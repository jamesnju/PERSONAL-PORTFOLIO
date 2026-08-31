'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { 
  Database, 
  Code2, 
  Zap, 
  Globe, 
  Server, 
  Layout, 
  Cloud, 
  Shield,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

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
      title: 'Backend Development',
      icon: Server,
      skills: ['.NET/C#', 'Node.js', 'REST APIs', 'GraphQL', 'SQL Server', 'PostgreSQL'],
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-500/10'
    },
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'Responsive Design'],
      color: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Tools & Cloud',
      icon: Cloud,
      skills: ['Docker', 'Azure', 'Firebase', 'Git', 'VS Code', 'CI/CD'],
      color: 'from-orange-500 to-red-500',
      bg: 'bg-orange-500/10'
    },
    {
      title: 'Implementation & Support',
      icon: Shield,
      skills: ['Payment Solutions', 'System Deployment', 'Client Training', 'Technical Support', 'API Integration', 'Performance Optimization'],
      color: 'from-green-500 to-emerald-500',
      bg: 'bg-green-500/10'
    },
  ]

  const allSkills = [
    { name: 'API Development', level: 95 },
    { name: 'Frontend Integration', level: 90 },
    { name: 'Backend Systems', level: 88 },
    { name: 'Database Design', level: 85 },
    { name: 'Payment Solutions', level: 90 },
    { name: 'Technical Support', level: 92 },
  ]

  return (
    <section 
      id="skills" 
      className="relative min-h-screen py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/james2.jpg"
            alt="James Muniu - Skills & Expertise"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Multiple gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/95 via-[#0a0a1a]/85 to-[#0a0a1a]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/95 via-transparent to-[#0a0a1a]/60" />
          
          {/* Animated accent overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium mb-3"
            >
              <span className="w-8 h-px bg-blue-400" />
              EXPERTISE & SKILLS
              <span className="w-8 h-px bg-blue-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Technical <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60">
              {isMobile 
                ? 'Tools and technologies I use to build robust solutions'
                : 'A comprehensive toolkit of technologies I leverage to deliver exceptional solutions'
              }
            </p>
          </div>

          {/* Skills Grid - Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skillCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-blue-400/30 transition-all duration-300 overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 ${category.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Icon */}
                    <div className={`relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r ${category.color} p-2.5 shadow-lg`}>
                      <Icon className="h-full w-full text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="relative mb-4 text-lg font-bold text-white">
                      {category.title}
                    </h3>

                    {/* Skills List */}
                    <ul className="relative space-y-2.5">
                      {category.skills.map((skill, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-2 text-sm text-white/70 group-hover:text-white/90 transition-colors"
                        >
                          <motion.div
                            className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${category.color}`}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                          />
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Decorative line */}
                    <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${category.color} group-hover:w-full transition-all duration-500`} />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Skill Proficiency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 sm:mt-16 lg:mt-20 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles size={24} className="text-blue-400" />
              <h3 className="text-xl font-bold text-white">
                {isMobile ? 'Proficiency' : 'Core Proficiency'}
              </h3>
            </div>
            
            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {allSkills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/80">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12 text-center"
          >
            <a 
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25 transition-all duration-300 group"
            >
              <span>View My Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}