import React, { useState } from 'react'
import './PortalPlaceholder.css'
import StudentDashboardPreview from './StudentDashboardPreview'

function PortalPlaceholder() {
  const [showDemo, setShowDemo] = useState(false)

  const handleLogin = () => {
    setShowDemo(true)
  }

  return (
    <section className="portal">
      <div className="portal-container">
        <div className="portal-card">
          <div className="portal-icon">🎓</div>
          <h2>Student & Parent Portal</h2>
          <p className="portal-subtitle">
            Login access for homework, attendance, announcements, and results.
          </p>
          <div className="portal-badge-container">
            <span className="badge">Coming Soon / Frontend Preview</span> <span className="lock">🔒</span>
          </div>
          <div className="portal-action">
            <button className="btn btn-primary" onClick={handleLogin}>
              Student / Parent Login
            </button>
          </div>
          <p className="portal-note">Portal access will be available for registered MGM Classes students and parents.</p>
        </div>
        {showDemo && (
          <StudentDashboardPreview type="Student/Parent" />
        )}
      </div>
    </section>
  )
}

export default PortalPlaceholder