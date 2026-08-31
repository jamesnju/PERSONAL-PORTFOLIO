'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'
import { Mail, MessageSquare, Phone, MapPin, Send, Github, Linkedin, Twitter, Sparkles, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      // Send email using your preferred service
      // Option 1: Using EmailJS (recommended for client-side)
      // Option 2: Using a serverless function (Next.js API route)
      
      // Example using fetch to a serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'james500muniu@gmail.com',
      href: 'mailto:james500muniu@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+254 700 747076',
      href: 'tel:+254700747076',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nairobi, Kenya',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    },
  ]

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      url: 'https://github.com/jamesnju',
      color: 'hover:border-gray-400'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/james-muniu-33a92a234/',
      color: 'hover:border-blue-400'
    },
    { 
      icon: Twitter, 
      label: 'Twitter', 
      url: '#',
      color: 'hover:border-blue-300'
    },
  ]

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/james2.jpg"
            alt="James Muniu - Contact"
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
              LET'S CONNECT
              <span className="w-8 h-px bg-blue-400" />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-white/60">
              {isMobile 
                ? "Let's collaborate on your next project"
                : "Have a project in mind? Let's collaborate and create something amazing together"
              }
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:gap-12 lg:grid-cols-5">
            {/* Contact methods - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 order-2 lg:order-1 space-y-4"
            >
              {contactMethods.map((method, i) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={i}
                    href={method.href}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-start gap-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:border-blue-400/30 transition-all duration-300"
                  >
                    <div className={`rounded-xl bg-gradient-to-r ${method.color} p-3 text-white shadow-lg`}>
                      <Icon size={isMobile ? 18 : 22} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white/60 group-hover:text-blue-400 transition-colors">
                        {method.title}
                      </div>
                      <div className="text-sm sm:text-base font-semibold text-white">
                        {method.value}
                      </div>
                    </div>
                  </motion.a>
                )
              })}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <p className="text-sm font-medium text-white/60 mb-4">
                  Connect with me on social media
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.12, 
                          y: -3,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`group relative h-12 w-12 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 ${social.color}`}
                        aria-label={social.label}
                      >
                        <Icon size={isMobile ? 18 : 20} className="text-white/60 group-hover:text-white transition-colors" />
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
                          {social.label}
                        </span>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Sparkles size={16} className="text-blue-400" />
                <span className="text-sm text-white/60">
                  {isMobile ? 'Available for work' : 'Available for opportunities'}
                </span>
                <span className="relative flex h-2 w-2 ml-auto">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-3 order-1 lg:order-2"
            >
              <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-all focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      required
                    />
                  </motion.div>

                  {/* Email field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-all focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      required
                    />
                  </motion.div>

                  {/* Message field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Your Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={isMobile ? 4 : 5}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/30 resize-none transition-all focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      required
                    />
                  </motion.div>

                  {/* Error message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400"
                    >
                      {error}
                    </motion.div>
                  )}

                  {/* Submit button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading || submitted}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3.5 text-white font-semibold transition-all hover:from-blue-600 hover:to-purple-600 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending...</span>
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle size={20} />
                          <span>Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={18} />
                        </>
                      )}
                    </div>
                  </motion.button>

                  {/* Success message */}
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400"
                    >
                      {isMobile 
                        ? " Message sent! I'll get back to you soon." 
                        : "Thank you for reaching out! I'll get back to you as soon as possible."
                      }
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}