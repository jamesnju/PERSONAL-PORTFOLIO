'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { ExternalLink, Github, Star, ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Projects() {
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

  const projects = [
    {
      title: 'AgroPoa AI',
      description: isMobile
        ? 'AI-powered agricultural platform for crop disease diagnosis.'
        : 'Enterprise-grade agricultural intelligence platform leveraging computer vision and machine learning to diagnose crop diseases from image and video uploads, providing real-time treatment recommendations and predictive analytics for farmers.',
      techs: ['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'],
      color: 'from-green-500 to-emerald-500',
      bg: 'bg-green-500/10',
      live: 'https://agropoa.vercel.app', 
      repo: 'https://github.com/jamesnju/AgroPoa',
      image: '/images/agropoa.png', 
    },
    {
      title: 'CaddyLink',
      description: isMobile
        ? 'Golf booking platform for caddies, pros, and players.'
        : 'A comprehensive golf management platform that allows players to book caddies and golf pros seamlessly. Features real-time availability, scheduling, payment processing, and player performance tracking for an enhanced golfing experience.',
      techs: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-500/10',
      live: 'https://caddylink.vercel.app', 
      repo: 'https://github.com/jamesnju/caddylink',
      image: '/images/caddyLink.jpg', 
    },
    {
      title: 'Savo Website',
      description: isMobile
        ? 'Corporate website for Savo Innovations.'
        : 'Professional corporate website for Savo Innovations, showcasing their services, portfolio, and thought leadership. Features a modern design with seamless navigation, service showcases, client testimonials, and integrated contact management.',
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-500/10',
      live: 'https://innovaspherelabs.vercel.app', 
      repo: 'https://github.com/jamesnju/savo-website',
      image: '/images/savo.jpg', 
    },
    {
      title: 'GreenLink Sacco',
      description: isMobile
        ? 'Digital banking platform for golf-focused Sacco.'
        : 'A modern digital banking and savings platform designed specifically for golf enthusiasts and members of GreenLink Sacco. Features secure transactions, savings management, loan applications, member dashboards, and real-time financial tracking.',
      techs: ['React', 'Node.js', 'MongoDB', 'Express'],
      color: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-500/10',
      live: 'https://greenlinksacco.vercel.app', 
      repo: 'https://github.com/jamesnju/greenlink-sacco',
      image: '/images/greenlinksacco.jpg', 
    },
    {
      title: 'Insurance Web App',
      description: isMobile
        ? 'Remote device inspection and insurance platform.'
        : 'A comprehensive insurance management platform that enables remote capture and inspection of devices seeking insurance coverage. Features real-time image capture, device assessment, automated documentation, and seamless integration with insurance companies for faster claim processing.',
      techs: ['React', 'Node.js', 'PostgreSQL', 'Cloudinary'],
      color: 'from-orange-500 to-red-500',
      bg: 'bg-orange-500/10',
      live: 'https://insurance-app.vercel.app', 
      repo: 'https://github.com/jamesnju/insurance-app',
      image: '/images/insurance.jpg', 
    },
    {
      title: 'Beatity MakerUp',
      description: isMobile 
        ? 'E-commerce & booking platform for beauty professionals.'
        : 'A sophisticated e-commerce and booking platform for beauty professionals, featuring service catalog management, real-time pricing, appointment scheduling, integrated payment processing, and client management tools to streamline beauty business operations.',
      techs: ['Next.js', 'Node.js', 'NeonDb', 'Tailwind CSS'],
      color: 'from-pink-500 to-rose-500',
      bg: 'bg-pink-500/10',
      live: 'https://makeup-neon.vercel.app/', 
      repo: 'https://github.com/jamesnju/terrywebsite',
      image: '/images/beatity.png',
    },
    {
      title: 'Shop Reconciliation',
      description: isMobile
        ? 'Automated financial reconciliation with M-Pesa.'
        : 'Automated financial reconciliation engine for retail environments, intelligently matching M-Pesa mobile transactions with physical cash collections to eliminate discrepancies, reduce fraud risks, and streamline accounting workflows with real-time reporting.',
      techs: ['.NET/C#', 'SQL Server', 'M-Pesa API', 'React', 'Chart.js'],
      color: 'from-blue-500 to-indigo-500',
      bg: 'bg-blue-500/10',
      live: 'https://recon-web-app-ten.vercel.app/login', 
      repo: 'https://github.com/jamesnju/reconWebApp',
      image: '/images/reconciliation.png', 
    },
    {
      title: 'Garage Management',
      description: isMobile
        ? 'Workshop management with M-Pesa payments and CRM.'
        : 'Comprehensive workshop management solution with integrated M-Pesa payment processing, inventory tracking, customer relationship management, service scheduling, automated invoicing, and real-time business analytics for automotive repair businesses.',
      techs: ['Next.js', 'Node.js', 'M-Pesa API', 'PostgreSQL', 'Tailwind CSS'],
      color: 'from-yellow-500 to-orange-500',
      bg: 'bg-yellow-500/10',
      live: 'https://gm-ten.vercel.app/', 
      repo: 'https://github.com/jamesnju/GMS',
      image: '/images/garage.png',
    },
    {
      title: 'GCI Church',
      description: isMobile
        ? 'Digital platform for religious organizations.'
        : 'Full-featured digital presence platform for religious organizations, featuring sermon archives with multimedia support, event management systems, online donation processing, community calendars, member engagement tools, and integrated communication channels.',
      techs: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
      color: 'from-indigo-500 to-purple-500',
      bg: 'bg-indigo-500/10',
      live: 'https://jamesnju-gciwebsite.vercel.app/', 
      repo: 'https://github.com/jamesnju/gciwebsite',
      image: '/images/gcichurch.png',
    }
    // {
    //   title: 'Architech Designs',
    //   description: isMobile
    //     ? 'Portfolio platform for architectural firm.'
    //     : 'Professional portfolio and project showcase platform for architectural firm, featuring high-resolution project galleries, design process documentation, interactive 3D model viewing, client testimonials, and integrated contact management to showcase architectural excellence.',
    //   techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    //   color: 'from-cyan-500 to-blue-500',
    //   bg: 'bg-cyan-500/10',
    //   live: 'https://architechdesigns.vercel.app',
    //   repo: 'https://github.com/jamesnju/ARCHITECH',
    //   image: '/images/arch.png',
    // }
  ]

  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/james2.jpg"
            alt="James Muniu - Projects Portfolio"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/95 via-[#0a0a1a]/85 to-[#0a0a1a]/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/95 via-transparent to-[#0a0a1a]/60" />
          
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
              MY PORTFOLIO
              <span className="w-8 h-px bg-blue-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60">
              {isMobile 
                ? 'Recent work showcasing my technical expertise'
                : 'Showcasing my recent work and technical expertise across various domains'
              }
            </p>
          </div>

          {/* Projects Grid - Modern Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative h-full"
              >
                <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={idx < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color} shadow-lg`}>
                        <Star size={12} />
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techs.slice(0, isMobile ? 3 : 4).map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className={`rounded-full ${project.bg} px-2.5 py-1 text-xs font-medium text-white/80 border border-white/10`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {isMobile && project.techs.length > 3 && (
                        <span className={`rounded-full ${project.bg} px-2.5 py-1 text-xs font-medium text-white/80 border border-white/10`}>
                          +{project.techs.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${project.color} hover:shadow-lg transition-all`}
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
                      >
                        <Github size={14} />
                        <span className="hidden sm:inline">Code</span>
                      </motion.a>
                    </div>
                  </div>

                  {/* Hover gradient line */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${project.color} group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <a 
              href="https://github.com/jamesnju?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-blue-400/30 shadow-lg transition-all duration-300 group"
            >
              <Github size={18} />
              <span>View More on GitHub</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-xs text-white/50">
                {projects.length} projects • Built with passion & precision
              </span>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import { ScrollReveal } from './scroll-reveal'
// import { ExternalLink, Github, Star, ArrowRight, Sparkles } from 'lucide-react'
// import Image from 'next/image'
// import { useEffect, useState } from 'react'

// export function Projects() {
//   const [isMobile, setIsMobile] = useState(false)
//   const [isTablet, setIsTablet] = useState(false)

//   useEffect(() => {
//     const checkDevice = () => {
//       const width = window.innerWidth
//       setIsMobile(width < 640)
//       setIsTablet(width >= 640 && width < 1024)
//     }
    
//     checkDevice()
//     window.addEventListener('resize', checkDevice)
//     return () => window.removeEventListener('resize', checkDevice)
//   }, [])

//   const projects = [
//      {
//       title: 'AgroPoa AI',
//       description: isMobile
//         ? 'Agricultural intelligence platform using ML to diagnose crop diseases.'
//         : 'Enterprise-grade agricultural intelligence platform leveraging computer vision and machine learning to diagnose crop diseases from image and video uploads, providing real-time treatment recommendations.',
//       techs: ['React', 'Python', 'TensorFlow', 'Node.js'],
//       color: 'from-purple-500 to-pink-500',
//       bg: 'bg-purple-500/10',
//       live: 'https://agropoa.vercel.app', 
//       repo: 'https://github.com/jamesnju/AgroPoa',
//       image: '/images/agropoa.png', 
//     },
//      {
//       title: 'CaddyLink',
//       description: isMobile
//         ? 'A Golf web application that aloows Prayer to book for Caddies And Pros and Players.'
//         : 'crop diseases from image and video uploads, providing real-time treatment recommendations.',
//       techs: ['React', 'Python', 'TensorFlow', 'Node.js'],
//       color: 'from-purple-500 to-pink-500',
//       bg: 'bg-purple-500/10',
//       live: 'https://caddylink.vercel.app', 
//       repo: 'https://github.com/jamesnju/AgroPoa',
//       image: '/images/caddyLink.jpg', 
//     },
//      {
//       title: 'Savo Website',
//       description: isMobile
//         ? 'Agricultural intelligence platform using ML to diagnose crop diseases.'
//         : 'Enterprise-grade agricultural intelligence platform leveraging computer vision and machine learning to diagnose crop diseases from image and video uploads, providing real-time treatment recommendations.',
//       techs: ['React', 'Python', 'TensorFlow', 'Node.js'],
//       color: 'from-purple-500 to-pink-500',
//       bg: 'bg-purple-500/10',
//       live: 'https://innovaspherelabs.vercel.app', 
//       repo: 'https://github.com/jamesnju/AgroPoa',
//       image: '/images/savo.jpg', 
//     },
//       {
//       title: 'GreenLink Sacco',
//       description: isMobile
//         ? 'sacco for golf user'
//         : 'Enterprise-grade agricultural intelligence platform leveraging computer vision and machine learning to diagnose crop diseases from image and video uploads, providing real-time treatment recommendations.',
//       techs: ['React', 'Python', 'TensorFlow', 'Node.js'],
//       color: 'from-purple-500 to-pink-500',
//       bg: 'bg-purple-500/10',
//       live: 'https://greenlinksacco.vercel.app', 
//       repo: 'https://github.com/jamesnju/AgroPoa',
//       image: '/images/greenlinksacco.jpg', 
//     },
//       {
//       title: 'Insurance web app',
//       description: isMobile
//         ? 'Insurance web app'
//         : 'Helps remote capture of thespecific device that a user want to seek insurance and sendts it to the company',
//       techs: ['React', 'Python', 'TensorFlow', 'Node.js'],
//       color: 'from-purple-500 to-pink-500',
//       bg: 'bg-purple-500/10',
//       live: 'https://greenlinksacco.vercel.app', 
//       repo: 'https://github.com/jamesnju/AgroPoa',
//       image: '/images/insurance.jpg', 
//     },
//     {
//       title: 'Beatity MakerUp',
//       description: isMobile 
//         ? 'E-commerce & booking platform for beauty professionals with appointments and payments.'
//         : 'A sophisticated e-commerce and booking platform for beauty professionals, featuring service catalog management, real-time pricing, appointment scheduling, and integrated payment processing.',
//       techs: ['Next.js', 'Node.js', 'NeonDb', 'Tailwind CSS'],
//       color: 'from-blue-500 to-cyan-500',
//       bg: 'bg-blue-500/10',
//       live: 'https://makeup-neon.vercel.app/', 
//       repo: 'https://github.com/jamesnju/terrywebsite',
//       image: '/images/beatity.png',
//     },
   
//     {
//       title: 'Shop Reconciliation',
//       description: isMobile
//         ? 'Automated financial reconciliation matching M-Pesa with physical cash.'
//         : 'Automated financial reconciliation engine for retail environments, matching M-Pesa mobile transactions with physical cash collections to eliminate discrepancies and streamline accounting.',
//       techs: ['.NET/C#', 'SQL Server', 'M-Pesa API', 'React'],
//       color: 'from-orange-500 to-red-500',
//       bg: 'bg-orange-500/10',
//       live: 'https://recon-web-app-ten.vercel.app/login', 
//       repo: 'https://github.com/jamesnju/reconWebApp',
//       image: '/images/reconciliation.png', 
//     },
//     {
//       title: 'Garage Management',
//       description: isMobile
//         ? 'Workshop management with M-Pesa payments, inventory, and CRM.'
//         : 'Comprehensive workshop management solution with integrated M-Pesa payment processing, inventory tracking, customer relationship management, and automated invoicing.',
//       techs: ['Next.js', 'Node.js', 'M-Pesa API', 'PostgreSQL'],
//       color: 'from-green-500 to-emerald-500',
//       bg: 'bg-green-500/10',
//       live: 'https://gm-ten.vercel.app/', 
//       repo: 'https://github.com/jamesnju/GMS',
//       image: '/images/garage.png',
//     },
//     {
//       title: 'GCI Church',
//       description: isMobile
//         ? 'Digital platform for religious organizations with sermons and events.'
//         : 'Full-featured digital presence platform for religious organizations, including sermon archives, event management, online donation processing, and member engagement tools.',
//       techs: ['React', 'Next.js', 'Tailwind CSS'],
//       color: 'from-indigo-500 to-blue-500',
//       bg: 'bg-indigo-500/10',
//       live: 'https://jamesnju-gciwebsite.vercel.app/', 
//       repo: 'https://github.com/jamesnju/gciwebsite',
//       image: '/images/gcichurch.png',
//     },
//     {
//       title: 'Architech Designs',
//       description: isMobile
//         ? 'Portfolio and showcase platform for architectural firm with galleries.'
//         : 'Professional portfolio and project showcase platform for architectural firm, featuring high-resolution project galleries, design process documentation, and client testimonials.',
//       techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
//       color: 'from-pink-500 to-rose-500',
//       bg: 'bg-pink-500/10',
//       live: 'https://architechdesigns.vercel.app',
//       repo: 'https://github.com/jamesnju/ARCHITECH',
//       image: '/images/arch.png',
//     }
//   ]

//   return (
//     <section 
//       id="projects" 
//       className="relative min-h-screen py-16 sm:py-24 lg:py-32 overflow-hidden"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <div className="relative w-full h-full">
//           <Image
//             src="/james2.jpg"
//             alt="James Muniu - Projects Portfolio"
//             fill
//             className="object-cover object-center"
//             priority
//             quality={100}
//           />
//           {/* Gradient overlays */}
//           <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/95 via-[#0a0a1a]/85 to-[#0a0a1a]/95" />
//           <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/95 via-transparent to-[#0a0a1a]/60" />
          
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
//             animate={{
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>
//       </div>

//       {/* Animated glow effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             opacity: [0.2, 0.4, 0.2],
//           }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <ScrollReveal>
//           {/* Header */}
//           <div className="text-center mb-12 sm:mb-16 lg:mb-20">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium mb-3"
//             >
//               <span className="w-8 h-px bg-blue-400" />
//               MY PORTFOLIO
//               <span className="w-8 h-px bg-blue-400" />
//             </motion.div>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
//               Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
//             </h2>
//             <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60">
//               {isMobile 
//                 ? 'Recent work showcasing my technical expertise'
//                 : 'Showcasing my recent work and technical expertise across various domains'
//               }
//             </p>
//           </div>

//           {/* Projects Grid - Modern Cards */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
//           >
//             {projects.map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 whileHover={{ 
//                   y: -8,
//                   transition: { type: "spring", stiffness: 300 }
//                 }}
//                 className="group relative h-full"
//               >
//                 <div className="relative h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-blue-400/30 transition-all duration-300">
//                   {/* Image Container */}
//                   <div className="relative h-48 sm:h-56 w-full overflow-hidden">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       priority={idx < 2}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-transparent" />
                    
//                     {/* Category Badge */}
//                     <div className="absolute top-3 right-3">
//                       <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${project.color} shadow-lg`}>
//                         <Star size={12} />
//                         Featured
//                       </span>
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-5 sm:p-6">
//                     <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
//                       {project.title}
//                     </h3>
                    
//                     <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
//                       {project.description}
//                     </p>

//                     {/* Tech Stack */}
//                     <div className="flex flex-wrap gap-1.5 mb-4">
//                       {project.techs.slice(0, isMobile ? 3 : 4).map((tech, i) => (
//                         <motion.span
//                           key={i}
//                           whileHover={{ scale: 1.05 }}
//                           className={`rounded-full ${project.bg} px-2.5 py-1 text-xs font-medium text-white/80 border border-white/10`}
//                         >
//                           {tech}
//                         </motion.span>
//                       ))}
//                       {isMobile && project.techs.length > 3 && (
//                         <span className={`rounded-full ${project.bg} px-2.5 py-1 text-xs font-medium text-white/80 border border-white/10`}>
//                           +{project.techs.length - 3}
//                         </span>
//                       )}
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex items-center gap-3 pt-3 border-t border-white/10">
//                       <motion.a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r ${project.color} hover:shadow-lg transition-all`}
//                       >
//                         <ExternalLink size={14} />
//                         <span>Live Demo</span>
//                       </motion.a>
//                       <motion.a
//                         href={project.repo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white/70 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
//                       >
//                         <Github size={14} />
//                         <span className="hidden sm:inline">Code</span>
//                       </motion.a>
//                     </div>
//                   </div>

//                   {/* Hover gradient line */}
//                   <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${project.color} group-hover:w-full transition-all duration-500`} />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* View More Projects */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-12 sm:mt-16 text-center"
//           >
//             <a 
//               href="https://github.com/jamesnju?tab=repositories" 
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-blue-400/30 shadow-lg transition-all duration-300 group"
//             >
//               <Github size={18} />
//               <span>View More on GitHub</span>
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//           </motion.div>

//           {/* Trust Badge */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="mt-8 text-center"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
//               <Sparkles size={14} className="text-blue-400" />
//               <span className="text-xs text-white/50">
//                 {projects.length} projects • Built with passion & precision
//               </span>
//             </div>
//           </motion.div>
//         </ScrollReveal>
//       </div>
//     </section>
//   )
// }