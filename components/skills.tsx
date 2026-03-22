'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { Database, Code2, Zap, Globe } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      icon: Database,
      skills: ['.NET/C#', 'Node.js', 'Web APIs', 'SQL Server', 'PostgreSQL'],
      color: 'from-neon-blue to-neon-cyan',
    },
    {
      title: 'Frontend',
      icon: Code2,
      skills: ['React.js', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS'],
      color: 'from-neon-cyan to-neon-purple',
    },
    {
      title: 'Technologies',
      icon: Zap,
      skills: ['WebForms', 'REST APIs', 'Database Design', 'Architecture', 'DevOps'],
      color: 'from-neon-purple to-neon-blue',
    },
    {
      title: 'Tools & Platforms',
      icon: Globe,
      skills: ['Git', 'Docker', 'VS Code', 'Azure', 'Firebase'],
      color: 'from-neon-blue to-neon-cyan',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="relative bg-dark-secondary py-24 sm:py-32">
      {/* Background accent */}
      <motion.div
        className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-neon-cyan/10 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="mx-auto mb-16 max-w-2xl text-lg text-foreground/70">
              A comprehensive toolkit of technologies and frameworks I use to build robust applications
            </p>
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {skillCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative"
                >
                  <motion.div
                    className="glow-box h-full rounded-xl p-6 transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)',
                    }}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`mb-4 h-12 w-12 rounded-lg bg-gradient-to-br ${category.color} p-3 text-dark-bg`}
                    >
                      <Icon className="h-full w-full" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mb-4 text-xl font-bold text-foreground">{category.title}</h3>

                    {/* Skills List */}
                    <ul className="space-y-3">
                      {category.skills.map((skill, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-foreground/80 hover:text-neon-cyan transition-colors"
                        >
                          <motion.div
                            className="h-2 w-2 rounded-full bg-neon-cyan"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          {skill}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-20"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgb(0, 217, 255), rgb(0, 150, 255))`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Detailed skills showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 rounded-xl border border-neon-cyan/30 bg-dark-bg/50 p-8 backdrop-blur-sm"
          >
            <h3 className="mb-6 text-2xl font-bold text-neon-cyan">Core Competencies</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                'Full-Stack Development',
                'API Design & Development',
                'Database Architecture',
                'UI/UX Implementation',
                'System Design',
                'Performance Optimization',
                'Code Quality & Testing',
                'Cloud Services',
              ].map((competency, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5, color: '#00d9ff' }}
                  className="flex items-center gap-3 text-foreground/70 transition-colors"
                >
                  <motion.div
                    className="h-3 w-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  />
                  {competency}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
