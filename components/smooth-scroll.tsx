'use client'

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    // Add smooth scroll behavior
    const html = document.documentElement
    html.style.scrollBehavior = 'smooth'

    return () => {
      html.style.scrollBehavior = 'auto'
    }
  }, [])

  return null
}
