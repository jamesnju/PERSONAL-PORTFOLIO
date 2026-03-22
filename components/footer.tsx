'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@developer.com', label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-neon-cyan/20 bg-dark-bg/95 backdrop-blur-sm">
      {/* Background accent */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-96 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12"
        >
          {/* Brand */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="h-10 w-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue"
              />
              <span className="text-xl font-bold text-neon-cyan">DevPortfolio</span>
            </div>
            <p className="text-sm text-foreground/60">
              Building digital experiences with modern technologies and creative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-neon-cyan"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="mb-4 font-semibold text-foreground">Tech Stack</h3>
            <ul className="space-y-2">
              {['React & Next.js', '.NET/C#', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'].map((tech, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <span className="text-sm text-foreground/60">{tech}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="mb-4 font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="h-10 w-10 rounded-lg border border-neon-cyan/30 flex items-center justify-center text-neon-cyan bg-dark-secondary/50 hover:bg-neon-cyan/10 hover:border-neon-cyan/60 transition-all"
                    title={social.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                )
              })}
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
            >
              Let's work together <ExternalLink size={14} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-foreground/60"
        >
          <p>
            © {currentYear} Developer Portfolio. Designed with care and built with modern technologies.
          </p>
          <motion.div className="flex gap-6">
            <a href="#" className="hover:text-neon-cyan transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neon-cyan transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
