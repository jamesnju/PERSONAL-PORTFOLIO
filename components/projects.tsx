'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export function Projects() {
  const projects = [
    {
      title: 'Beatity MakerUp Website',
      description: 'A sophisticated e-commerce and booking platform for beauty professionals, featuring service catalog management, real-time pricing, appointment scheduling, and integrated payment processing.',
      techs: ['Next.js', 'Node.js', 'NeonDb', 'Tailwind CSS'],
      gradient: 'from-neon-cyan to-neon-purple',
      live: 'https://makeup-neon.vercel.app/', 
      repo: 'https://github.com/jamesnju/terrywebsite',
      image: '/images/beatity.png',
    },
    {
      title: 'AgroPoa AI',
      description: 'Enterprise-grade agricultural intelligence platform leveraging computer vision and machine learning to diagnose crop diseases from image and video uploads, providing real-time treatment recommendations and predictive analytics for farmers.',
      techs: ['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'],
      gradient: 'from-neon-blue to-neon-purple',
      live: 'https://agropoa.vercel.app', 
      repo: 'https://github.com/jamesnju/AgroPoa',
      image: '/images/agropoa.png', 
    },
    {
      title: 'Shop Reconciliation System',
      description: 'Automated financial reconciliation engine designed for retail environments, intelligently matching M-Pesa mobile transactions with physical cash collections to eliminate discrepancies, reduce fraud, and streamline accounting workflows.',
      techs: ['.NET/C#', 'SQL Server', 'M-Pesa API', 'React', 'Chart.js'],
      gradient: 'from-neon-purple to-neon-pink',
      live: 'https://recon-web-app-ten.vercel.app/login', 
      repo: 'https://github.com/jamesnju/reconWebApp',
      image: '/images/reconciliation.png', 
    },
    {
      title: 'Garage Management System',
      description: 'Comprehensive workshop management solution with integrated M-Pesa payment processing, inventory tracking, customer relationship management, service scheduling, and automated invoicing for automotive repair businesses.',
      techs: ['Next.js', 'Node.js', 'M-Pesa API', 'PostgreSQL', 'Tailwind CSS'],
      gradient: 'from-neon-pink to-neon-cyan',
      live: 'https://gm-ten.vercel.app/', 
      repo: 'https://github.com/jamesnju/GMS',
      image: '/images/garage.png',
    },
    {
      title: 'GCI Church Website',
      description: 'Full-featured digital presence platform for religious organizations, including sermon archives, event management systems, online donation processing, community calendars, and member engagement tools.',
      techs: ['React', 'Next.js', 'Tailwind CSS'],
      gradient: 'from-neon-cyan to-neon-purple',
      live: 'https://jamesnju-gciwebsite.vercel.app/', 
      repo: 'https://github.com/jamesnju/gciwebsite',
      image: '/images/gcichurch.png',
    },
    {
      title: 'Architech Designs Website',
      description: 'Professional portfolio and project showcase platform for architectural firm, featuring high-resolution project galleries, design process documentation, client testimonials, and integrated contact management system.',
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      gradient: 'from-neon-cyan to-neon-blue',
      live: 'https://architechdesigns.vercel.app',
      repo: 'https://github.com/jamesnju/ARCHITECH',
      image: '/images/arch.png',
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="relative bg-dark-bg py-24 sm:py-32">
      {/* Background accent */}
      <motion.div
        className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-neon-purple/10 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70">
              Showcasing my recent work and technical expertise across various domains
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative h-full"
              >
                <motion.div
                  className="relative h-full rounded-xl border border-neon-cyan/20 bg-dark-secondary/50 backdrop-blur-sm transition-all duration-300 hover-lift overflow-hidden"
                  whileHover={{
                    borderColor: 'rgba(0, 217, 255, 0.5)',
                    boxShadow: `0 0 30px rgba(0, 217, 255, 0.3)`,
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-sm text-foreground/70 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.techs.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="rounded-full bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan border border-neon-cyan/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex gap-4 pt-4 border-t border-neon-cyan/20"
                    >
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
                      >
                        <Github size={16} />
                        Repository
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgb(0, 217, 255), rgb(0, 150, 255))`,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View more projects CTA - Redirects to GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="https://github.com/jamesnju?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg bg-neon-cyan px-8 py-3 font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
            >
              <Github size={20} />
              View More Projects on GitHub
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

// 'use client'

// import { motion } from 'framer-motion'
// import { ScrollReveal } from './scroll-reveal'
// import { ExternalLink, Github } from 'lucide-react'
// import Image from 'next/image'

// export function Projects() {
//   const projects = [
//     {
//       title: 'Beatity MakerUp Website',
//       description: 'Modern, responsive website for a maker shop featuring services, prices offered',
//       techs: ['Next.js', 'Node.js', 'NeonDb', 'Tailwind CSS'],
//       gradient: 'from-neon-cyan to-neon-purple',
//       live: 'https://makeup-neon.vercel.app/', 
//       repo: 'https://github.com/jamesnju/terrywebsite',
//       image: '/images/beatity.png', // Replace with your actual image path
//     },
  
//     {
//       title: 'AgroPoa AI',
//       description: 'AI-powered agricultural web application that allows admins to upload images and videos of crop diseases for instant diagnosis and treatment recommendations.',
//       techs: ['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB'],
//       gradient: 'from-neon-blue to-neon-purple',
//       live: 'https://agropoa.vercel.app', 
//       repo: 'https://github.com/jamesnju/AgroPoa',
//       image: '/images/agropoa.png', 
//     },
//     {
//       title: 'Shop Reconciliation System',
//       description: 'Automated reconciliation web application for shops to match M-Pesa transactions with cash collections, reducing discrepancies and streamlining accounting.',
//       techs: ['.NET/C#', 'SQL Server', 'M-Pesa API', 'React', 'Chart.js'],
//       gradient: 'from-neon-purple to-neon-pink',
//       live: 'https://recon-web-app-ten.vercel.app/login', 
//       repo: 'https://github.com/jamesnju/reconWebApp',
//       image: '/images/reconciliation.png', 
//     },
//     {
//       title: 'Garage Management System',
//       description: 'Comprehensive garage management solution with M-Pesa API integration for automated payments, inventory tracking, and customer management.',
//       techs: ['Next.js', 'Node.js', 'M-Pesa API', 'PostgreSQL', 'Tailwind CSS'],
//       gradient: 'from-neon-pink to-neon-cyan',
//       live: 'https://gm-ten.vercel.app/', 
//       repo: 'https://github.com/jamesnju/GMS',
//       image: '/images/garage.png', // Replace with your actual image path
//     },
//     {
//       title: 'GCI Church Website',
//       description: 'Modern, responsive website for GCI Church featuring event management, sermon archives, online donations, and community engagement tools.',
//       techs: ['React', 'Next.js', 'Tailwind CSS'],
//       gradient: 'from-neon-cyan to-neon-purple',
//       live: 'https://jamesnju-gciwebsite.vercel.app/', 
//       repo: 'https://github.com/jamesnju/gciwebsite',
//       image: '/images/gcichurch.png', // Replace with your actual image path
//     },
//           {
//       title: 'Architech Designs website',
//       description: 'A website for an architech show casing his work',
//       techs: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS'],
//       gradient: 'from-neon-cyan to-neon-blue',
//       live: 'https://architechdesigns.vercel.app', // Replace with your live URL
//       repo: 'https://github.com/jamesnju/ARCHITECH', // Replace with your repository URL
//       image: '/images/arch.png', // Replace with your actual image path
//     }
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <section id="projects" className="relative bg-dark-bg py-24 sm:py-32">
//       {/* Background accent */}
//       <motion.div
//         className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-neon-purple/10 blur-3xl"
//         animate={{
//           x: [0, 40, 0],
//           y: [0, -40, 0],
//         }}
//         transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
//       />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <ScrollReveal>
//           <div className="mb-16 text-center">
//             <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
//               <span className="gradient-text">Featured Projects</span>
//             </h2>
//             <p className="mx-auto max-w-2xl text-lg text-foreground/70">
//               Showcasing my recent work and technical expertise across various domains
//             </p>
//           </div>

//           {/* Projects Grid */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: '-100px' }}
//             className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
//           >
//             {projects.map((project, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={itemVariants}
//                 className="group relative h-full"
//               >
//                 <motion.div
//                   className="relative h-full rounded-xl border border-neon-cyan/20 bg-dark-secondary/50 backdrop-blur-sm transition-all duration-300 hover-lift overflow-hidden"
//                   whileHover={{
//                     borderColor: 'rgba(0, 217, 255, 0.5)',
//                     boxShadow: `0 0 30px rgba(0, 217, 255, 0.3)`,
//                   }}
//                 >
//                   {/* Project Image */}
//                   <div className="relative h-48 w-full overflow-hidden">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     {/* Gradient overlay on image */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
//                   </div>

//                   {/* Content */}
//                   <div className="p-6">
//                     {/* Title */}
//                     <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-neon-cyan transition-colors">
//                       {project.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="mb-6 text-sm text-foreground/70 leading-relaxed line-clamp-3">
//                       {project.description}
//                     </p>

//                     {/* Tech stack */}
//                     <div className="mb-6 flex flex-wrap gap-2">
//                       {project.techs.map((tech, i) => (
//                         <motion.span
//                           key={i}
//                           whileHover={{ scale: 1.05 }}
//                           className="rounded-full bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan border border-neon-cyan/30"
//                         >
//                           {tech}
//                         </motion.span>
//                       ))}
//                     </div>

//                     {/* Links */}
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.2 }}
//                       className="flex gap-4 pt-4 border-t border-neon-cyan/20"
//                     >
//                       <motion.a
//                         href={project.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
//                       >
//                         <ExternalLink size={16} />
//                         Live Demo
//                       </motion.a>
//                       <motion.a
//                         href={project.repo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
//                       >
//                         <Github size={16} />
//                         Repository
//                       </motion.a>
//                     </motion.div>
//                   </div>

//                   {/* Gradient overlay on hover */}
//                   <motion.div
//                     className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
//                     style={{
//                       backgroundImage: `linear-gradient(135deg, rgb(0, 217, 255), rgb(0, 150, 255))`,
//                     }}
//                   />
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* View more projects CTA - Redirects to GitHub */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="mt-16 text-center"
//           >
//             <motion.a
//               href="https://github.com/jamesnju?tab=repositories" 
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-flex items-center gap-2 rounded-lg bg-neon-cyan px-8 py-3 font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
//             >
//               <Github size={20} />
//               View More Projects on GitHub
//             </motion.a>
//           </motion.div>
//         </ScrollReveal>
//       </div>
//     </section>
//   )
// }
