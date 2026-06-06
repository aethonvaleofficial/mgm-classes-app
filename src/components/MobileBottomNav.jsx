import React from 'react'
import './MobileBottomNav.css'

function MobileBottomNav({ activeSection, setActiveSection }) {
  const items = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'classes', label: 'Classes', icon: '🎓' },
    { id: 'admission', label: 'Enquiry', icon: '📝' },
    { id: 'portal', label: 'Portal', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ]

  const getHighlightedId = (sectionId) => {
    if (sectionId === 'about') return 'home'
    if (sectionId === 'faculty' || sectionId === 'why-choose') return 'classes'
    if (sectionId === 'admin') return 'portal'
    return sectionId
  }

  const handleNavClick = (id) => {
    setActiveSection(id)
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="mobile-bottom-nav">
      {items.map((item) => (
        <button
          key={item.id}
          className={`nav-item ${getHighlightedId(activeSection) === item.id ? 'active' : ''}`}
          onClick={() => handleNavClick(item.id)}
          aria-label={item.label}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}

export default MobileBottomNav
