import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About MGM Classes</h2>
          <p className="about-subtitle">Quality coaching with personal attention for school students in Bundi</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              MGM Classes is a premier educational institution located in the heart of Bundi, Rajasthan.
              We are committed to providing quality education with personalized attention to each student.
            </p>
            <p>
              Our mission is to nurture young minds and build strong foundations for their future academic
              success. With experienced faculty and a comprehensive curriculum, we prepare students not just
              for exams, but for life.
            </p>
            <div className="location-info">
              <h3>Our Location</h3>
              <p className="address">
                MGM Classes, in front of Kesari Daulat,<br />
                Police Line, Bundi, Rajasthan
              </p>
              <div className="contact-buttons">
                <a href="tel:+919024202010" className="contact-btn">
                  <span className="icon">📞</span> Call Now
                </a>
                <a href="https://wa.me/919024202010" className="contact-btn" target="_blank" rel="noopener noreferrer">
                  <span className="icon">💬</span> WhatsApp
                </a>
                <a href="mailto:classesmgm@gmail.com" className="contact-btn">
                  <span className="icon">✉️</span> Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <div className="stat-number">10+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👨‍🏫</div>
              <div className="stat-number">4</div>
              <div className="stat-label">Expert Faculty</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">Focused</div>
              <div className="stat-label">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About