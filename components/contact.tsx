'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'james500muniu@gmail.com',
      href: 'mailto:james500muniu@gmail.com' 
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+2 (547) 00-747076',
      href: 'tel:+254700747076',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nairobi, Kenya',
      href: '#',
    },
    {
      icon: MessageSquare,
      title: 'Chat',
      value: 'Let\'s connect on LinkedIn',
      href: '#',
    },
  ]
 

  return (
    <section id="contact" className="relative bg-dark-secondary py-24 sm:py-32">
      {/* Background accent */}
      <motion.div
        className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-neon-cyan/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-foreground/70">
              Have a project in mind? Let's collaborate and create something amazing together
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:col-span-1"
            >
              {contactMethods.map((method, i) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={i}
                    href={method.href}
                    whileHover={{ x: 10, color: '#00d9ff' }}
                    className="group flex items-start gap-4 rounded-lg border border-neon-cyan/20 bg-dark-bg/50 p-4 transition-all hover:border-neon-cyan/50 hover:bg-dark-bg"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="mt-1 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-blue p-3 text-dark-bg"
                    >
                      <Icon size={20} />
                    </motion.div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                        {method.title}
                      </div>
                      <div className="text-sm text-foreground/60">{method.value}</div>
                    </div>
                  </motion.a>
                )
              })}

              {/* Social links */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <p className="mb-4 font-semibold text-foreground">Follow me on social media</p>
                <div className="flex gap-3">
                  {[
                    { name: 'GitHub', emoji: '🐙' },
                    { name: 'LinkedIn', emoji: '💼' },
                    { name: 'Twitter', emoji: '𝕏' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="h-12 w-12 rounded-lg border border-neon-cyan/30 flex items-center justify-center text-xl bg-dark-bg hover:bg-neon-cyan/10 hover:border-neon-cyan/60 transition-all"
                      title={social.name}
                    >
                      {social.emoji}
                    </motion.a>
                  ))}
                </div>
              </motion.div> */}
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="rounded-xl border border-neon-cyan/20 bg-dark-bg/50 p-8 backdrop-blur-sm lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-neon-cyan/20 bg-dark-secondary/50 px-4 py-3 text-foreground placeholder-foreground/40 transition-all focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
                    required
                  />
                </motion.div>

                {/* Email field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-lg border border-neon-cyan/20 bg-dark-secondary/50 px-4 py-3 text-foreground placeholder-foreground/40 transition-all focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
                    required
                  />
                </motion.div>

                {/* Message field */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full rounded-lg border border-neon-cyan/20 bg-dark-secondary/50 px-4 py-3 text-foreground placeholder-foreground/40 resize-none transition-all focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30"
                    required
                  />
                </motion.div>

                {/* Submit button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={submitted}
                  className="w-full rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 font-semibold text-dark-bg transition-all hover:shadow-lg hover:shadow-neon-cyan/50 disabled:opacity-50"
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
                    {!submitted && <Send size={18} />}
                  </div>
                </motion.button>

                {/* Success message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400"
                  >
                    Thank you! I'll get back to you as soon as possible.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
