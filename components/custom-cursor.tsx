'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Check for hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.cursor-pointer') ||
        target.closest('.hover\\:scale-\\d+') ||
        target.closest('.group')
      
      setIsHovering(!!isHoverable)
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Hide default cursor on desktop */}
      <style>{`
        @media (hover: hover) {
          * { cursor: none !important; }
        }
      `}</style>

      {/* Main cursor dot - Blue gradient */}
      <motion.div
        className="pointer-events-none fixed z-50 h-4 w-4 rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0.5 : 1,
          backgroundColor: isHovering ? '#60a5fa' : 'transparent',
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", stiffness: 500, damping: 30 },
          backgroundColor: { duration: 0.2 }
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-80" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-sm opacity-50" />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full border-2"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          borderColor: isHovering ? '#60a5fa' : 'rgba(96, 165, 250, 0.5)',
        }}
        transition={{
          opacity: { duration: 0.2 },
          width: { type: "spring", stiffness: 400, damping: 30 },
          height: { type: "spring", stiffness: 400, damping: 30 },
          borderColor: { duration: 0.2 }
        }}
      />

      {/* Cursor glow */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
          width: isHovering ? 80 : 48,
          height: isHovering ? 80 : 48,
        }}
        transition={{
          opacity: { duration: 0.3 },
          width: { type: "spring", stiffness: 400, damping: 30 },
          height: { type: "spring", stiffness: 400, damping: 30 },
        }}
      />

      {/* Click effect */}
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full border-2 border-blue-400/30"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isClicking && isVisible ? 1 : 0,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
        }}
        animate={{
          scale: isClicking ? [1, 1.2, 1] : 1,
        }}
        transition={{
          scale: { duration: 0.3, ease: "easeOut" },
          opacity: { duration: 0.1 },
        }}
      />

      {/* Trailing particles - hidden on mobile */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed z-40 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
          style={{
            x: useMotionValue(cursorXSpring.get() - (i + 1) * 6),
            y: useMotionValue(cursorYSpring.get() - (i + 1) * 6),
            opacity: isVisible && !isHovering ? 0.15 - i * 0.04 : 0,
            width: 6 - i * 1.5,
            height: 6 - i * 1.5,
          }}
          animate={{
            x: cursorXSpring.get() - (i + 1) * 6,
            y: cursorYSpring.get() - (i + 1) * 6,
          }}
          transition={{
            x: { type: "spring", stiffness: 200, damping: 20 },
            y: { type: "spring", stiffness: 200, damping: 20 },
            opacity: { duration: 0.3 }
          }}
        />
      ))}
    </>
  )
}