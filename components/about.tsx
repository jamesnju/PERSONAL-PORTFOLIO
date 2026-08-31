'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { 
  Code2, 
  Users, 
  Database,
  Smartphone,
  Headphones,
  Shield,
  ArrowRight,
  Star,
  Briefcase,
  GraduationCap,
  Sparkles
} from 'lucide-react'

export function About() {
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Professional journey timeline
  const journeySteps = [
    { 
      year: '2020',
      title: 'Started Development',
      description: 'Began my software development journey with web technologies'
    },
    { 
      year: '2022',
      title: 'Full-Stack Expertise',
      description: 'Mastered backend APIs and frontend integrations'
    },
    { 
      year: '2023',
      title: 'Implementation Engineer',
      description: 'Joined FINTECH-group Kenya as Implementation & Support Engineer'
    },
    { 
      year: '2024',
      title: 'Payment Solutions',
      description: 'Specializing in payment system implementation and client training'
    },
  ]

  const coreSkills = [
    { 
      icon: Database, 
      title: 'API Development', 
      description: 'Building robust RESTful & GraphQL APIs',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Code2, 
      title: 'Frontend Integration', 
      description: 'React, Next.js, TypeScript expertise',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Smartphone, 
      title: 'Android Development', 
      description: 'Native mobile experiences with Kotlin',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Shield, 
      title: 'Payment Solutions', 
      description: 'Implementation & technical support',
      color: 'from-orange-500 to-red-500'
    },
    { 
      icon: Headphones, 
      title: 'Technical Support', 
      description: 'Client training & issue resolution',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      icon: Users, 
      title: 'System Implementation', 
      description: 'Deployment & client success',
      color: 'from-pink-500 to-rose-500'
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative min-h-screen py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/james2.jpg"
            alt="James Muniu - Software Developer & Implementation Engineer"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Gradient overlays for readability */}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium mb-3">
            <span className="w-8 h-px bg-blue-400" />
            WHO I AM
            <span className="w-8 h-px bg-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto text-base sm:text-lg">
            Software Developer & Implementation Support Engineer
          </p>
        </motion.div>

        {/* Professional Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-12 mb-12"
        >
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-start">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative aspect-square max-w-[300px] mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-lg shadow-blue-500/10">
                <Image
                  src="/james2.jpg"
                  alt="James Muniu - Software Developer & Implementation Engineer"
                  fill
                  className="object-cover object-center"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="text-lg font-bold">James Muniu</div>
                  <div className="text-xs text-white/80">Software Developer & Implementation Engineer</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <Briefcase size={16} />
                <span className="font-medium">Currently at FINTECH-group Kenya</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Building Solutions,<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Creating Impact
                </span>
              </h3>
              <p className="text-white/70 leading-relaxed">
                {isMobile ? (
                  <>
                    I'm a <span className="font-medium text-blue-400">Software Developer</span> and{' '}
                    <span className="font-medium text-purple-400">Implementation Support Engineer</span>
                    {' '}passionate about building robust web APIs, seamless integrations, and delivering exceptional client support.
                  </>
                ) : (
                  <>
                    I'm a <span className="font-medium text-blue-400">Software Developer</span> and{' '}
                    <span className="font-medium text-purple-400">Implementation Support Engineer</span>
                    {' '}with a passion for building robust web APIs, seamless frontend integrations, and delivering exceptional 
                    client support. I specialize in payment solution implementation, system deployment, and technical training, 
                    ensuring smooth transitions and ongoing client success.
                  </>
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                {['API Development', 'Frontend Integration', 'Payment Solutions', 'Technical Support'].map((skill) => (
                  <span 
                    key={skill}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm text-white/80 border border-white/10"
                  >
                    <Star size={12} className="text-blue-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 size={24} className="text-blue-400" />
            <h3 className="text-xl font-semibold text-white">
              Core Expertise
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coreSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ 
                    y: -4,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-6 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${skill.color} bg-opacity-10`}>
                      <Icon size={isMobile ? 18 : 22} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {skill.title}
                      </h4>
                      <p className="text-xs text-white/50">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={24} className="text-purple-400" />
            <h3 className="text-xl font-semibold text-white">
              Professional Journey
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-6 hover:border-purple-400/30 transition-all duration-300">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {step.year}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-white/50">
                    {step.description}
                  </p>
                </div>
                {index < journeySteps.length - 1 && !isMobile && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-blue-400 to-purple-400" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Availability Badge & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-sm text-white/60">
              Available for opportunities
            </span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
          </div>
          
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25 transition-all duration-300 group"
          >
            <span>Let's Connect</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}