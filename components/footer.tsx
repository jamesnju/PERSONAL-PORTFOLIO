'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
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

  // Responsive tech stack
  const techStack = isMobile 
    ? ['React/Next.js', '.NET/C#', 'PostgreSQL'] 
    : ['React & Next.js', '.NET/C#', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion']

  return (
    <footer className="relative border-t border-neon-cyan/20 bg-dark-bg/95 backdrop-blur-sm overflow-hidden">
      {/* Background accent - responsive */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-24 sm:h-32 lg:h-40 w-48 sm:w-64 lg:w-96 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Main footer content - responsive grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-10 lg:mb-12"
        >
          {/* Brand - responsive */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3 sm:mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue flex-shrink-0"
              />
              <span className="text-lg sm:text-xl font-bold text-neon-cyan">
                {isMobile ? 'JN' : 'JamesPortfolio'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-foreground/60 max-w-xs mx-auto sm:mx-0">
              {isMobile 
                ? 'Building digital experiences with modern tech.'
                : 'Building digital experiences with modern technologies and creative solutions.'
              }
            </p>
          </motion.div>

          {/* Quick Links - responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.map((link, i) => (
                <motion.li key={i} whileHover={{ x: isMobile ? 3 : 5 }}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-foreground/60 transition-colors hover:text-neon-cyan block py-0.5"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies - responsive */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left"
          >
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">
              {isMobile ? 'Tech' : 'Tech Stack'}
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {techStack.map((tech, i) => (
                <motion.li key={i} whileHover={{ x: isMobile ? 3 : 5 }}>
                  <span className="text-xs sm:text-sm text-foreground/60 block py-0.5">
                    {tech}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect - responsive */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ delay: 0.3 }}
            className="text-center sm:text-left"
          >
            <h3 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-foreground">
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
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg border border-neon-cyan/30 flex items-center justify-center text-neon-cyan bg-dark-secondary/50 hover:bg-neon-cyan/10 hover:border-neon-cyan/60 transition-all"
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
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-neon-cyan hover:text-neon-blue transition-colors"
            >
              {isMobile ? "Work together" : "Let's work together"} 
              <ExternalLink size={isMobile ? 12 : 14} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider - responsive */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent mb-6 sm:mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Bottom footer - responsive */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-foreground/60"
        >
          <p className="text-center sm:text-left">
            {isMobile 
              ? `© ${currentYear} James Portfolio. All rights reserved.`
              : `© ${currentYear} James Portfolio. Designed with care and built with modern technologies.`
            }
          </p>
          <div className="flex justify-center sm:justify-end gap-4 sm:gap-6">
            <a href="#" className="hover:text-neon-cyan transition-colors text-xs sm:text-sm">
              Privacy
            </a>
            <a href="#" className="hover:text-neon-cyan transition-colors text-xs sm:text-sm">
              {isMobile ? 'Terms' : 'Terms of Service'}
            </a>
            {!isMobile && (
              <a href="#" className="hover:text-neon-cyan transition-colors text-sm">
                Sitemap
              </a>
            )}
          </div>
        </motion.div>

        {/* Back to top button - mobile only */}
        {isMobile && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg shadow-lg shadow-neon-cyan/30 flex items-center justify-center"
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

// 'use client'

// import { motion } from 'framer-motion'
// import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

// export function Footer() {
//   const currentYear = new Date().getFullYear()

//   const footerLinks = [
//     { label: 'Home', href: '#' },
//     { label: 'About', href: '#about' },
//     { label: 'Skills', href: '#skills' },
//     { label: 'Projects', href: '#projects' },
//     { label: 'Contact', href: '#contact' },
//   ]


//    const socialLinks = [
//       { 
//         icon: Github, 
//         label: 'GitHub', 
//         href: 'https://github.com/jamesnju' 
//       },
//       { 
//         icon: Linkedin, 
//         label: 'LinkedIn', 
//         href: 'https://www.linkedin.com/in/james-muniu-33a92a234/' 
//       },
//       { 
//         icon: Mail, 
//         label: 'Email', 
//         href: 'mailto:james500muniu@gmail.com' 
//       },
//     ]

//   return (
//     <footer className="relative border-t border-neon-cyan/20 bg-dark-bg/95 backdrop-blur-sm">
//       {/* Background accent */}
//       <motion.div
//         className="absolute top-0 left-1/2 -translate-x-1/2 h-40 w-96 rounded-full bg-neon-cyan/5 blur-3xl pointer-events-none"
//         animate={{
//           y: [0, 10, 0],
//         }}
//         transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//       />

//       <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//         {/* Main footer content */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12"
//         >
//           {/* Brand */}
//           <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
//             <div className="flex items-center gap-2 mb-4">
//               <motion.div
//                 whileHover={{ scale: 1.1, rotate: 10 }}
//                 className="h-10 w-10 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue"
//               />
//               <span className="text-xl font-bold text-neon-cyan">JamesPortfolio</span>
//             </div>
//             <p className="text-sm text-foreground/60">
//               Building digital experiences with modern technologies and creative solutions.
//             </p>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
//             <h3 className="mb-4 font-semibold text-foreground">Quick Links</h3>
//             <ul className="space-y-2">
//               {footerLinks.map((link, i) => (
//                 <motion.li key={i} whileHover={{ x: 5 }}>
//                   <a
//                     href={link.href}
//                     className="text-sm text-foreground/60 transition-colors hover:text-neon-cyan"
//                   >
//                     {link.label}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Technologies */}
//           <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
//             <h3 className="mb-4 font-semibold text-foreground">Tech Stack</h3>
//             <ul className="space-y-2">
//               {['React & Next.js', '.NET/C#', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion'].map((tech, i) => (
//                 <motion.li key={i} whileHover={{ x: 5 }}>
//                   <span className="text-sm text-foreground/60">{tech}</span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Connect */}
//           <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
//             <h3 className="mb-4 font-semibold text-foreground">Connect</h3>
//             <div className="flex gap-3 mb-6">
//               {socialLinks.map((social, i) => {
//                 const Icon = social.icon
//                 return (
//                   <motion.a
//                     key={i}
//                     href={social.href}
//                     whileHover={{ scale: 1.2, rotate: 10 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="h-10 w-10 rounded-lg border border-neon-cyan/30 flex items-center justify-center text-neon-cyan bg-dark-secondary/50 hover:bg-neon-cyan/10 hover:border-neon-cyan/60 transition-all"
//                     title={social.label}
//                   >
//                     <Icon size={18} />
//                   </motion.a>
//                 )
//               })}
//             </div>
//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.05 }}
//               className="inline-flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
//             >
//               Let's work together <ExternalLink size={14} />
//             </motion.a>
//           </motion.div>
//         </motion.div>

//         {/* Divider */}
//         <motion.div
//           className="h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent mb-8"
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 1 }}
//         />

//         {/* Bottom footer */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-foreground/60"
//         >
//           <p>
//             © {currentYear} James Portfolio. Designed with care and built with modern technologies.
//           </p>
//           <motion.div className="flex gap-6">
//             <a href="#" className="hover:text-neon-cyan transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-neon-cyan transition-colors">
//               Terms of Service
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }
