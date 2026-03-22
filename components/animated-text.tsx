'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  type?: 'word' | 'char'
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  type = 'word',
}: AnimatedTextProps) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  }

  const items = type === 'word' ? text.split(' ') : text.split('')

  return (
    <motion.div className={`flex ${type === 'char' ? 'flex-wrap' : ''}`}>
      {items.map((item, i) => (
        <motion.span
          key={`${item}-${i}`}
          custom={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          className={type === 'word' ? 'mr-2' : ''}
        >
          {item}
          {type === 'word' && i < items.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  )
}
