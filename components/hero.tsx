'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { GlowButton } from './glow-button'
import { AnimatedText } from './animated-text'
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Sparkles, 
  ChevronDown, 
  Award, 
  Briefcase, 
  Users,
  Database,
  Headphones,
  CreditCard
} from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      setIsTablet(width >= 640 && width < 1024)
      setIsSmallMobile(width < 400)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/jamesnju' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/james-muniu-33a92a234/' },
    { icon: Mail, label: 'Email', href: 'mailto:james500muniu@gmail.com' },
  ]

  const coreStrengths = [
    { icon: Database, label: 'API Development', sub: 'RESTful & GraphQL' },
    { icon: Code2, label: 'Frontend Integration', sub: 'React, Next.js' },
    { icon: CreditCard, label: 'Payment Solutions', sub: 'Implementation & Support' },
    { icon: Headphones, label: 'Technical Support', sub: 'Client Training & Issue Resolution' },
  ]

  const achievements = [
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Briefcase, value: '50+', label: 'Projects Delivered' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
  ]

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a0a1a] pt-14 sm:pt-16 md:pt-20"
    >
      {/* Background Image with Professional Overlay */}
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
          {/* Responsive gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/95 via-[#0a0a1a]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/95 via-transparent to-[#0a0a1a]/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/70 via-transparent to-[#0a0a1a]/95" />
          
          {/* Mobile-specific overlay for better readability */}
          <div className="absolute inset-0 bg-[#0a0a1a]/40 sm:bg-transparent" />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Animated background accents - hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ y: backgroundY }}
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ opacity, scale }}
          className="flex min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex-col items-center sm:items-start justify-center gap-4 sm:gap-6 lg:gap-8 text-center sm:text-left"
        >
          <div className="w-full max-w-4xl">
            {/* Professional Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 sm:px-4 sm:py-1.5 md:px-6 md:py-2 backdrop-blur-sm mb-3 sm:mb-4 md:mb-6"
            >
              <Sparkles size={isSmallMobile ? 12 : isMobile ? 14 : 18} className="text-blue-400" />
              <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-blue-300">
                {isMobile ? '✨ Available' : 'Available for New Opportunities'}
              </span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2"
              >
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500" />
              </motion.span>
            </motion.div>

            {/* Professional Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                <span className="block text-sm sm:text-base lg:text-xl font-medium text-blue-300 mb-1 sm:mb-2">
                  {isMobile ? "Hi, I'm" : "Welcome, I'm"}
                </span>
                <span className="block text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                  James Muniu
                </span>
                <span className="block mt-2 sm:mt-3 md:mt-4 text-xl xs:text-xl sm:text-xl lg:text-4xl xl:text-xl font-semibold">
                  <AnimatedText
                    text={isMobile ? "Software Developer & Implementation Engineer" : "Software Developer & Implementation Support Engineer"}
                    type="word"
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Professional Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto sm:mx-0"
            >
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed">
                {isMobile ? (
                  <>
                    <span className="font-medium text-white/90">Software developer</span>
                    {' '}specializing in APIs, frontend integrations, and payments.
                    <br />
                    <span className="inline-block mt-1 text-blue-300 text-sm">
                      <Headphones size={14} className="inline mr-1" />
                      Implementation Support Engineer
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-medium text-white/90">Software developer</span> specializing in{' '}
                    <span className="font-medium text-white/90">backend APIs</span>,{' '}
                    <span className="font-medium text-white/90">frontend integrations</span>, and{' '}
                    <span className="font-medium text-white/90">payment solutions</span>.
                    <br className="hidden sm:block" />
                    As an <span className="font-medium text-blue-300">Implementation Support Engineer</span>, 
                    I deliver comprehensive solutions—from system implementation and client training 
                    to resolving technical challenges with dedication and precision.
                  </>
                )}
              </p>
            </motion.div>

            {/* Core Strengths Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 w-full"
            >
              {coreStrengths.map((item, index) => (
                <div 
                  key={index} 
                  className="group p-2 sm:p-3 md:p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300 text-center sm:text-left"
                >
                  <item.icon size={isSmallMobile ? 14 : isMobile ? 16 : 22} className="text-blue-400 group-hover:text-blue-300 transition-colors mx-auto sm:mx-0 mb-0.5 sm:mb-1 md:mb-2" />
                  <div className="text-[10px] xs:text-xs sm:text-sm font-semibold text-white/90">
                    {isSmallMobile ? item.label.split(' ')[0] : item.label}
                  </div>
                  <div className="text-[8px] xs:text-[10px] sm:text-xs text-white/40">
                    {isSmallMobile ? '' : item.sub}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Achievements/Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 md:gap-10 mt-4 sm:mt-6 md:mt-8"
            >
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <item.icon size={isSmallMobile ? 12 : isMobile ? 14 : 20} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white">
                      {item.value}
                    </div>
                    <div className="text-[10px] xs:text-xs sm:text-sm text-white/50">
                      {isSmallMobile ? item.label.split(' ')[0] : item.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 w-full xs:w-auto"
            >
              <GlowButton
                href="#projects"
                variant="primary"
                className="group flex items-center justify-center gap-2 w-full xs:w-auto text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25"
              >
                <span className="text-xs xs:text-sm sm:text-base">Explore My Work</span>
                <ArrowRight size={isSmallMobile ? 14 : isMobile ? 16 : 18} className="group-hover:translate-x-1 transition-transform" />
              </GlowButton>
              <GlowButton
                href="#contact"
                variant="secondary"
                className="w-full xs:w-auto text-sm sm:text-base px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 border-2 border-white/20 hover:border-blue-400/50 bg-white/5 backdrop-blur-sm"
              >
                <span className="text-xs xs:text-sm sm:text-base">Let's Connect</span>
              </GlowButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? "_blank" : undefined}
                  rel={social.label !== 'Email' ? "noopener noreferrer" : undefined}
                  whileHover={{ 
                    scale: 1.12, 
                    y: -3,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative h-9 w-9 xs:h-10 xs:w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-blue-400/50"
                  aria-label={social.label}
                >
                  <social.icon size={isSmallMobile ? 14 : isMobile ? 16 : 20} className="text-white/60 group-hover:text-white transition-colors" />
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator - Hidden on very small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-3 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 sm:gap-1 md:gap-2"
        >
          <span className="text-[8px] xs:text-[10px] sm:text-xs text-white/30 tracking-wider uppercase hidden xs:block">
            {isMobile ? 'Scroll' : 'Scroll to discover more'}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-6 w-4 xs:h-7 xs:w-4.5 sm:h-8 sm:w-5 md:h-10 md:w-6 rounded-full border-2 border-white/20 flex items-start justify-center p-0.5 sm:p-1"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 xs:h-1.5 xs:w-1.5 sm:h-2 sm:w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            />
          </motion.div>
          <ChevronDown size={isSmallMobile ? 12 : isMobile ? 14 : 20} className="text-white/20 mt-0.5 sm:mt-1 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}