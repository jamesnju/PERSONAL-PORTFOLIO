'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Add scroll effect for better mobile experience
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
      className={`fixed top-0 z-50 w-full border-b border-neon-cyan/20 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-bg/95 backdrop-blur-lg shadow-lg shadow-neon-cyan/5' 
          : 'bg-dark-bg/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo - Improved touch target */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer min-h-[44px] min-w-[44px]"
        >
          <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex-shrink-0" />
          <span className="text-lg sm:text-xl font-bold text-neon-cyan tracking-tight">JN</span>
        </motion.div>

        {/* Desktop Menu - Enhanced spacing */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#00d9ff', scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm lg:text-base text-foreground/70 transition-colors hover:text-neon-cyan font-medium"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-neon-cyan px-4 lg:px-6 py-2 text-sm lg:text-base font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50 whitespace-nowrap"
          >
            Get in Touch
          </motion.a>
        </div>

        {/* Mobile Menu Button - Improved touch target */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neon-cyan hover:text-neon-cyan/80 transition-colors p-2 -m-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
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

      {/* Mobile Menu - Enhanced with better animations */}
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
        className="overflow-hidden border-t border-neon-cyan/20 bg-dark-secondary/95 backdrop-blur-lg md:hidden"
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
              whileHover={{ x: 8, color: '#00d9ff' }}
              whileTap={{ scale: 0.98 }}
              className="text-base sm:text-lg text-foreground/70 transition-all hover:text-neon-cyan py-3 px-2 border-b border-neon-cyan/5 font-medium"
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
            className="rounded-lg bg-neon-cyan px-4 py-3 sm:py-3.5 text-center font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50 mt-2 text-base sm:text-lg"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)

//   const menuItems = [
//     { label: 'About', href: '#about' },
//     { label: 'Skills', href: '#skills' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Contact', href: '#contact' },
//   ]

//   return (
//     <motion.nav
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed top-0 z-50 w-full border-b border-neon-cyan/20 bg-dark-bg/80 backdrop-blur-md"
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           className="flex items-center gap-2 cursor-pointer"
//         >
//           <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue" />
//           <span className="text-xl font-bold text-neon-cyan">JN</span>
//         </motion.div>

//         {/* Desktop Menu */}
//         <div className="hidden items-center gap-8 md:flex">
//           {menuItems.map((item) => (
//             <motion.a
//               key={item.label}
//               href={item.href}
//               whileHover={{ color: '#00d9ff', scale: 1.05 }}
//               className="text-sm text-foreground/70 transition-colors hover:text-neon-cyan"
//             >
//               {item.label}
//             </motion.a>
//           ))}
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="rounded-lg bg-neon-cyan px-6 py-2 text-sm font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
//           >
//             Get in Touch
//           </motion.a>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-neon-cyan hover:text-neon-cyan/80 transition-colors"
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
//         transition={{ duration: 0.3 }}
//         className="overflow-hidden border-t border-neon-cyan/20 bg-dark-secondary/50 backdrop-blur-md md:hidden"
//       >
//         <div className="flex flex-col gap-4 px-4 py-4">
//           {menuItems.map((item) => (
//             <motion.a
//               key={item.label}
//               href={item.href}
//               onClick={() => setIsOpen(false)}
//               whileHover={{ x: 5 }}
//               className="text-foreground/70 transition-colors hover:text-neon-cyan"
//             >
//               {item.label}
//             </motion.a>
//           ))}
//           <motion.a
//             href="#contact"
//             onClick={() => setIsOpen(false)}
//             whileHover={{ scale: 1.02 }}
//             className="rounded-lg bg-neon-cyan px-4 py-2 text-center font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
//           >
//             Get in Touch
//           </motion.a>
//         </div>
//       </motion.div>
//     </motion.nav>
//   )
// }
