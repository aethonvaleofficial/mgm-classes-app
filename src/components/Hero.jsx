import React from 'react'
import heroImg from '../assets/hero.png'
import './Hero.css'

function Hero() {
  const handleScrollToAdmission = () => {
    const element = document.getElementById('admission')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-container">
        {/* 1. Logo badge centered at top */}
        <div className="logo-badge">
          <img src="/mgm-logo.png" alt="MGM Classes Bundi Logo" />
        </div>

        {/* 2. Title */}
        <h2 className="hero-title">MGM Classes Bundi</h2>

        {/* 3. Subtitle */}
        <p className="hero-subtitle">
          Quality coaching with personal attention for school students in Bundi.
        </p>

        {/* 4. Study Dashboard preview card */}
        <div className="learning-space">
          {/* Main study dashboard card */}
          <div className="dashboard-card">
            <h4>Study Dashboard</h4>
            <div className="mini-cards">
              <div className="mini-card"><span role="img" aria-label="homework">📚</span><span className="label">Homework</span></div>
              <div className="mini-card"><span role="img" aria-label="attendance">🗓️</span><span className="label">Attendance</span></div>
              <div className="mini-card"><span role="img" aria-label="results">📈</span><span className="label">Results</span></div>
              <div className="mini-card"><span role="img" aria-label="notices">📢</span><span className="label">Notices</span></div>
            </div>
          </div>
          {/* Floating study objects */}
          <div className="floating-object book">📖</div>
          <div className="floating-object pencil">✏️</div>
          <div className="floating-object notebook">📓</div>
          <div className="floating-object star">⭐️</div>
          <div className="floating-object trophy">🏆</div>
        </div>

        {/* 5 & 6. Large action buttons */}
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={handleScrollToAdmission}>
            Apply Now
          </button>
          <button className="btn btn-secondary" onClick={() => window.open('https://wa.me/919024202010', '_blank')}>
            WhatsApp Us
          </button>
        </div>

        {/* Desktop-only hero image (hidden in CSS on app shell layouts) */}
        <div className="hero-image">
          <img src={heroImg} alt="MGM Classes" />
        </div>
      </div>
    </section>
  )
}

export default Hero
