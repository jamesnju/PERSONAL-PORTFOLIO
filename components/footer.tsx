'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkDevice()
    window.addEventListener('resize', checkDevice)
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/jamesnju' 
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/james-muniu-33a92a234/' 
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:james500muniu@gmail.com' 
    },
  ]

  const techStack = isMobile 
    ? ['React/Next.js', '.NET/C#', 'PostgreSQL'] 
    : ['React & Next.js', '.NET/C#', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion']

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/james2.jpg"
            alt="James Muniu - Footer"
            fill
            className="object-cover object-center"
            quality={100}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/95 via-[#0a0a1a]/90 to-[#0a0a1a]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 to-transparent" />
          
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
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25 flex-shrink-0"
              />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {isMobile ? 'JN' : 'JamesPortfolio'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/50 max-w-xs mx-auto sm:mx-0 leading-relaxed">
              {isMobile 
                ? 'Building digital experiences with modern tech.'
                : 'Building digital experiences with modern technologies and creative solutions.'
              }
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.map((link, i) => (
                <motion.li key={i} whileHover={{ x: isMobile ? 3 : 5 }}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/50 transition-colors hover:text-blue-400 block py-0.5"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-white/80">
              {isMobile ? 'Tech' : 'Tech Stack'}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {techStack.map((tech, i) => (
                <motion.li key={i} whileHover={{ x: isMobile ? 3 : 5 }}>
                  <span className="text-xs sm:text-sm text-white/50 block py-0.5">
                    {tech}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="text-center sm:text-left"
          >
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-white/80">
              Connect
            </h3>
            <div className="flex justify-center sm:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target={social.label !== 'Email' ? "_blank" : undefined}
                    rel={social.label !== 'Email' ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg border border-white/10 flex items-center justify-center text-white/60 bg-white/5 hover:bg-blue-500/10 hover:border-blue-400/30 hover:text-blue-400 transition-all"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <Icon size={isMobile ? 16 : 18} />
                  </motion.a>
                )
              })}
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              {isMobile ? "Work together" : "Let's work together"} 
              <ExternalLink size={isMobile ? 12 : 14} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent mb-6 sm:mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-white/40"
        >
          <p className="text-center sm:text-left">
            {isMobile 
              ? `© ${currentYear} James Portfolio. All rights reserved.`
              : `© ${currentYear} James Portfolio. Designed with care and built with modern technologies.`
            }
          </p>
          <div className="flex justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors text-xs sm:text-sm">
              {isMobile ? 'Terms' : 'Terms of Service'}
            </a>
            {!isMobile && (
              <a href="#" className="hover:text-blue-400 transition-colors text-sm">
                Sitemap
              </a>
            )}
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Sparkles size={12} className="text-blue-400" />
            <span className="text-xs text-white/40">
              Available for opportunities
            </span>
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
          </div>
        </motion.div>

        {/* Back to top button - mobile only */}
        {isMobile && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </div>
    </footer>
  )
}