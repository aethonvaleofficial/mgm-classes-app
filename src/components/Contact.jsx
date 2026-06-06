import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="section-subtitle">
          We're here to assist you with any questions
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div className="contact-details">
              <h3>Location</h3>
              <p>MGM Classes, in front of Kesari Daulat,<br />Police Line, Bundi, Rajasthan</p>
            </div>
          </div>

          <div className="contact-actions">
            <a href="tel:+919024202010" className="contact-action-btn">
              <span className="icon">📞</span>
              <span>Call: +91 9024202010</span>
            </a>
            <a href="https://wa.me/919024202010" className="contact-action-btn" target="_blank" rel="noopener noreferrer">
              <span className="icon">💬</span>
              <span>WhatsApp: +91 9024202010</span>
            </a>
            <a href="mailto:classesmgm@gmail.com" className="contact-action-btn">
              <span className="icon">✉️</span>
              <span>Email: classesmgm@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact