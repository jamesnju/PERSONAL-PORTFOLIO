'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export function GlowButton({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}: GlowButtonProps) {
  const baseStyles =
    'relative px-8 py-3 font-semibold rounded-lg overflow-hidden transition-all duration-300'

  const variantStyles = {
    primary:
      'bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 shadow-lg hover:shadow-xl hover:shadow-neon-cyan/50',
    secondary:
      'bg-dark-secondary border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-lg hover:shadow-neon-cyan/30',
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  const content = (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: variant === 'primary' ? 0 : 0.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  )
}
