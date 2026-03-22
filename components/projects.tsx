'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { ExternalLink, Github } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      techs: ['Next.js', 'React', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      gradient: 'from-neon-cyan to-neon-blue',
      live: '#',
      repo: '#',
      image: '🛍️',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization and performance metrics.',
      techs: ['React.js', '.NET/C#', 'SQL Server', 'Chart.js', 'WebSockets'],
      gradient: 'from-neon-blue to-neon-purple',
      live: '#',
      repo: '#',
      image: '📊',
    },
    {
      title: 'AI Chat Application',
      description: 'Intelligent chatbot application with natural language processing, context awareness, and multi-language support.',
      techs: ['Next.js', 'Node.js', 'OpenAI API', 'MongoDB', 'Socket.io'],
      gradient: 'from-neon-purple to-neon-pink',
      live: '#',
      repo: '#',
      image: '💬',
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management platform with real-time updates, team collaboration, and advanced filtering.',
      techs: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
      gradient: 'from-neon-pink to-neon-cyan',
      live: '#',
      repo: '#',
      image: '✓',
    },
    {
      title: 'Weather Prediction API',
      description: 'RESTful API for weather data with machine learning predictions and historical data analysis.',
      techs: ['Node.js', 'Express', 'Python', 'TensorFlow', 'PostgreSQL'],
      gradient: 'from-neon-cyan to-neon-purple',
      live: '#',
      repo: '#',
      image: '🌤️',
    },
    {
      title: 'Portfolio CMS',
      description: 'Headless CMS for portfolio management with content versioning, media upload, and SEO optimization.',
      techs: ['.NET/C#', 'React', 'SQL Server', 'Azure Storage', 'GraphQL'],
      gradient: 'from-neon-blue to-neon-pink',
      live: '#',
      repo: '#',
      image: '🎨',
    },
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
                  className="relative h-full rounded-xl border border-neon-cyan/20 bg-dark-secondary/50 p-6 backdrop-blur-sm transition-all duration-300 hover-lift"
                  whileHover={{
                    borderColor: 'rgba(0, 217, 255, 0.5)',
                    boxShadow: `0 0 30px rgba(0, 217, 255, 0.3)`,
                  }}
                >
                  {/* Project header with icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`mb-6 inline-block rounded-lg bg-gradient-to-br ${project.gradient} p-4 text-4xl`}
                  >
                    {project.image}
                  </motion.div>

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
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.repo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-neon-cyan hover:text-neon-blue transition-colors"
                    >
                      <Github size={16} />
                      Repository
                    </motion.a>
                  </motion.div>

                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgb(0, 217, 255), rgb(0, 150, 255))`,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View all projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-lg bg-neon-cyan px-8 py-3 font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50"
            >
              View All Projects
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
