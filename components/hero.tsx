'use client'

import { motion } from 'framer-motion'
import { GlowButton } from './glow-button'
import { AnimatedText } from './animated-text'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Replace these with your actual URLs
  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com/jamesnju' // Replace with your GitHub profile URL
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/james-muniu-33a92a234/' // Replace with your LinkedIn profile URL
    },
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:james500muniu@gmail.com' // Replace with your email address
    },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark-bg pt-20">
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-neon-cyan/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-neon-blue/20 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex min-h-screen flex-col items-center justify-center gap-8 text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="h-3 w-3 rounded-full bg-neon-cyan"
            />
            <span className="text-sm font-medium text-neon-cyan">Welcome to my portfolio</span>
          </motion.div>

          {/* Main heading with animated text */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              <AnimatedText
                text="Full-Stack Developer"
                type="word"
                className="gradient-text inline-block"
              />
              <br />
              <span className="text-foreground">Building Digital Experiences</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg text-foreground/70 leading-relaxed"
          >
            I craft modern, scalable web applications with cutting-edge technologies. Specializing
            in full-stack development, APIs, and interactive user interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
            <GlowButton href="#projects" variant="primary" className="flex items-center gap-2">
              View My Work <ArrowRight size={18} />
            </GlowButton>
            <GlowButton href="#contact" variant="secondary">
              Get in Touch
            </GlowButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 pt-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? "_blank" : undefined}
                rel={social.label !== 'Email' ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="group relative h-12 w-12 rounded-lg border border-neon-cyan/30 flex items-center justify-center bg-dark-secondary/50 transition-all hover:bg-neon-cyan/10 hover:border-neon-cyan/60"
              >
                <social.icon size={20} className="text-neon-cyan group-hover:text-neon-cyan" />
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-foreground/50">Scroll to explore</span>
            <div className="h-6 w-4 rounded-full border-2 border-neon-cyan/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}