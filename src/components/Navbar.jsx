import React, { useEffect } from 'react'
import './Navbar.css'

function Navbar({ activeSection, setActiveSection }) {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'classes', label: 'Classes' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'why-choose', label: 'Why Us' },
    { id: 'admission', label: 'Admission' },
    { id: 'portal', label: 'Portal' },
    { id: 'admin', label: 'Admin Login' },
    { id: 'contact', label: 'Contact' }
  ]

  // Mobile menu toggle handler
  useEffect(() => {
    const toggleBtn = document.querySelector('.navbar-toggle')
    const menu = document.querySelector('.navbar-menu')
    if (!toggleBtn || !menu) return

    const handleToggle = () => {
      toggleBtn.classList.toggle('active')
      menu.classList.toggle('active')
    }
    toggleBtn.addEventListener('click', handleToggle)
    return () => toggleBtn.removeEventListener('click', handleToggle)
  }, [])

  const handleNavClick = (id) => {
    setActiveSection(id)
    // Close mobile menu after navigation
    const toggleBtn = document.querySelector('.navbar-toggle')
    const menu = document.querySelector('.navbar-menu')
    if (toggleBtn && toggleBtn.classList.contains('active')) {
      toggleBtn.classList.remove('active')
      menu.classList.remove('active')
    }
    // Scroll to section
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <div className="navbar-brand-wrapper"><img src="/mgm-logo.png" alt="MGM Classes Bundi Logo" className="navbar-logo" /><h1>MGM Classes Bundi</h1></div>
        </div>
        <ul className="navbar-menu">
          {sections.map(section => (
            <li
              key={section.id}
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => handleNavClick(section.id)}
            >
              {section.label}
            </li>
          ))}
        </ul>
        <button className="navbar-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar