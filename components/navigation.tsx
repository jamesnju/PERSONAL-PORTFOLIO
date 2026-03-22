'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full border-b border-neon-cyan/20 bg-dark-bg/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue" />
          <span className="text-xl font-bold text-neon-cyan">Dev</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#00d9ff', scale: 1.05 }}
              className="text-sm text-foreground/70 transition-colors hover:text-neon-cyan"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-neon-cyan px-6 py-2 text-sm font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-cyan hover:text-neon-cyan/80 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden border-t border-neon-cyan/20 bg-dark-secondary/50 backdrop-blur-md md:hidden"
      >
        <div className="flex flex-col gap-4 px-4 py-4">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 5 }}
              className="text-foreground/70 transition-colors hover:text-neon-cyan"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setIsOpen(false)}
            whileHover={{ scale: 1.02 }}
            className="rounded-lg bg-neon-cyan px-4 py-2 text-center font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}
