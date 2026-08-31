'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a1a]/95 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-white/10' 
          : 'bg-[#0a0a1a]/80 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer min-h-[44px] min-w-[44px]"
        >
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0 shadow-lg shadow-blue-500/25" />
          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            JN
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#60a5fa', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm lg:text-base text-white/70 transition-colors hover:text-blue-400 font-medium"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-blue-400 transition-colors p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ 
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="overflow-hidden border-t border-white/10 bg-[#0a0a1a]/95 backdrop-blur-xl md:hidden"
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col gap-2 px-4 py-4 sm:px-6">
          {menuItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: isOpen ? index * 0.05 : 0 }}
              whileHover={{ x: 8, color: '#60a5fa' }}
              whileTap={{ scale: 0.98 }}
              className="text-base sm:text-lg text-white/70 transition-all hover:text-blue-400 py-3 px-2 border-b border-white/5 font-medium"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setIsOpen(false)}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
            transition={{ delay: isOpen ? 0.2 : 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-3 sm:py-3.5 text-center font-semibold text-white transition-all hover:shadow-lg hover:shadow-blue-500/25 mt-2 text-base sm:text-lg"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}