import React from 'react'
import './StudentDashboardPreview.css'

function StudentDashboardPreview({ type = 'Student/Parent' }) {
  const title = type === 'Student/Parent' ? 'Student / Parent Dashboard Preview' : (type === 'Parent' ? 'Parent Dashboard Preview' : 'Student Dashboard Preview')
  const items = [
    { icon: '📚', label: 'Homework' },
    { icon: '📢', label: 'Announcements / Notices' },
    { icon: '🗓️', label: 'Attendance' },
    { icon: '📈', label: 'Test Results' },
    { icon: '📂', label: 'Study Materials' },
    { icon: '👤', label: type === 'Parent' ? 'Student Profile' : 'My Profile' }
  ]
  return (
    <section className="dashboard-preview">
      <h3>{title}</h3>
      <p className="preview-note">Demo Preview – real login will be connected later</p>
      <div className="preview-grid">
        {items.map((item, i) => (
          <div key={i} className="preview-card">
            <div className="preview-icon">{item.icon}</div>
            <div className="preview-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StudentDashboardPreview