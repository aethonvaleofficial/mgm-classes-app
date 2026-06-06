import React from 'react'
import './WhyChoose.css'

function WhyChoose() {
  const features = [
    {
      icon: '📚',
      title: 'Personalized Attention',
      description: 'Small batch sizes ensuring individual focus on each student\'s learning needs'
    },
    {
      icon: '🏆',
      title: 'Proven Results',
      description: 'Consistent track record of academic excellence and student success stories'
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description: 'Experienced educators passionate about teaching and student development'
    },
    {
      icon: '📱',
      title: 'Modern Learning',
      description: 'Interactive teaching methods combined with traditional values for holistic growth'
    }
  ]

  return (
    <section className="why-choose">
      <div className="why-choose-container">
        <h2>Why Choose MGM Classes?</h2>
        <p className="section-subtitle">
          Discover what makes us the preferred choice for parents and students in Bundi
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose