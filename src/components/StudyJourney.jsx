import React, { useState, useEffect, useRef } from 'react'
import './StudyJourney.css'

const StudyJourney = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const containerRef = useRef(null)

  useEffect(() => {
    let requestAnimationFrameId = null
    let currentScrollProgress = 0

    const updateScrollProgress = () => {
      if (!containerRef.current) return

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      currentScrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0

      // Clamp progress between 0 and 1
      currentScrollProgress = Math.min(1, Math.max(0, currentScrollProgress))
      setScrollProgress(currentScrollProgress)

      requestAnimationFrameId = requestAnimationFrame(updateScrollProgress)
    }

    // Initial calculation
    updateScrollProgress()

    // Listen for scroll events
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    return () => {
      if (requestAnimationFrameId) {
        cancelAnimationFrame(requestAnimationFrameId)
      }
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  // Section detection using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll('main > section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Calculate journey position based on scroll progress
  const journeyY = scrollProgress * 100
  const journeyX = Math.sin(scrollProgress * Math.PI * 2) * 20
  const journeyRotate = scrollProgress * 5

  // Section-specific themes
  const getThemeClass = () => {
    switch (activeSection) {
      case 'home':
        return 'theme-hero'
      case 'classes':
        return 'theme-classes'
      case 'faculty':
        return 'theme-faculty'
      case 'portal':
        return 'theme-portal'
      case 'admission':
        return 'theme-admission'
      case 'contact':
        return 'theme-contact'
      default:
        return 'theme-hero'
    }
  }

  // Parallax layer positions
  const getLayerStyle = (speed, zIndex) => ({
    transform: `translateY(${journeyY * speed}px)`,
    zIndex
  })

  return (
    <div className={`study-journey ${getThemeClass()}`} ref={containerRef}>
      {/* Background gradient layers */}
      <div className="journey-layer journey-bg" style={getLayerStyle(0.2, 1)}>
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
      </div>

      {/* Parallax academic symbols */}
      <div className="journey-layer journey-symbols" style={getLayerStyle(0.4, 2)}>
        <div className="symbol symbol-1" style={{ transform: `translate(${journeyX * 2}px, ${journeyY * 0.5}px) rotate(${journeyRotate}deg)` }}>
          ∑
        </div>
        <div className="symbol symbol-2" style={{ transform: `translate(${journeyX * -1.5}px, ${journeyY * 0.3}px) rotate(${journeyRotate * 0.5}deg)` }}>
          ∞
        </div>
        <div className="symbol symbol-3" style={{ transform: `translate(${journeyX * 3}px, ${journeyY * 0.7}px) rotate(${journeyRotate * -0.3}deg)` }}>
          π
        </div>
        <div className="symbol symbol-4" style={{ transform: `translate(${journeyX * -2}px, ${journeyY * 0.4}px) rotate(${journeyRotate * 0.7}deg)` }}>
          √
        </div>
      </div>

      {/* Floating books */}
      <div className="journey-layer journey-books" style={getLayerStyle(0.6, 3)}>
        <div className="floating-book book-1" style={{ transform: `translate(${journeyX * 4}px, ${journeyY * 0.8}px) rotate(${journeyRotate * 0.2}deg)` }}>
          📖
        </div>
        <div className="floating-book book-2" style={{ transform: `translate(${journeyX * -3}px, ${journeyY * 1.2}px) rotate(${journeyRotate * -0.4}deg)` }}>
          📚
        </div>
        <div className="floating-book book-3" style={{ transform: `translate(${journeyX * 5}px, ${journeyY * 0.9}px) rotate(${journeyRotate * 0.1}deg)` }}>
          🗒️
        </div>
      </div>

      {/* Main journey object - Paper Plane */}
      <div className="journey-layer journey-main" style={{ zIndex: 10 }}>
        <div
          className="journey-plane"
          style={{
            transform: `translate(${journeyX * 8}px, ${journeyY * 1.5}px) rotateX(${journeyRotate}deg) rotateY(${journeyRotate * 0.5}deg) rotateZ(${journeyRotate * 2}deg)`
          }}
        >
          <div className="plane-body">
            <div className="plane-wing wing-left"></div>
            <div className="plane-wing wing-right"></div>
            <div className="plane-nose"></div>
            <div className="plane-trail"></div>
          </div>
          <div className="plane-shadow"></div>
        </div>
      </div>

      {/* Floating pencils and notes */}
      <div className="journey-layer journey-academic" style={getLayerStyle(0.8, 4)}>
        <div className="floating-pencil pencil-1" style={{ transform: `translate(${journeyX * 6}px, ${journeyY * 1.1}px) rotate(${journeyRotate * 3}deg)` }}>
          ✏️
        </div>
        <div className="floating-pencil pencil-2" style={{ transform: `translate(${journeyX * -4}px, ${journeyY * 1.3}px) rotate(${journeyRotate * -2}deg)` }}>
          🖊️
        </div>
        <div className="floating-note note-1" style={{ transform: `translate(${journeyX * 7}px, ${journeyY * 0.6}px) rotate(${journeyRotate * 0.8}deg)` }}>
          📓
        </div>
        <div className="floating-note note-2" style={{ transform: `translate(${journeyX * -5}px, ${journeyY * 0.8}px) rotate(${journeyRotate * -1.2}deg)` }}>
          📒
        </div>
      </div>

      {/* Stars/sparkles */}
      <div className="journey-layer journey-stars" style={getLayerStyle(1.2, 5)}>
        <div className="star star-1">✨</div>
        <div className="star star-2">⭐</div>
        <div className="star star-3">✨</div>
        <div className="star star-4">⭐</div>
        <div className="star star-5">✨</div>
        <div className="star star-6">⭐</div>
      </div>
    </div>
  )
}

export default StudyJourney