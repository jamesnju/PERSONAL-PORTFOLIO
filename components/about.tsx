'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

export function About() {
  return (
    <section id="about" className="relative bg-dark-bg py-24 sm:py-32">
      {/* Background accent */}
      <motion.div
        className="absolute -right-20 top-1/2 h-96 w-96 rounded-full bg-neon-blue/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="mb-6 text-4xl font-bold sm:text-5xl">
                <span className="gradient-text">About Me</span>
              </h2>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with a deep love for creating elegant solutions to complex problems. With expertise in modern web technologies, I build applications that are not just functional but also delightful to use.
                </p>

                <p>
                  My journey in software development spans across multiple technologies and frameworks. I specialize in building robust APIs, interactive front-end interfaces, and scalable backend systems.
                </p>

                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. Let's build something amazing together.
                </p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3"
              >
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '5+', label: 'Years Experience' },
                  { number: '100%', label: 'Dedication' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="text-3xl font-bold text-neon-cyan">{stat.number}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Visual element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="glow-box aspect-square overflow-hidden rounded-xl">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                  className="animated-gradient h-full w-full bg-gradient-to-br from-neon-cyan/20 via-neon-blue/20 to-neon-purple/20"
                />
              </div>

              {/* Floating elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute h-20 w-20 rounded-lg border border-neon-cyan/20 bg-dark-secondary/30 backdrop-blur-md`}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{
                    top: `${20 + i * 25}%`,
                    right: `${10 + i * 15}%`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
