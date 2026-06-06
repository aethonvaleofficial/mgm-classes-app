import React from 'react'
import './AdminDashboardPreview.css'

function AdminDashboardPreview() {
  const items = [
    { icon: '👥', label: 'Student Management' },
    { icon: '📅', label: 'Attendance Tracking' },
    { icon: '📊', label: 'Report Generation' },
    { icon: '📝', label: 'Post Homework' },
    { icon: '📢', label: 'Post Announcement' },
    { icon: '🔐', label: 'Reset Student Access Code' },
    { icon: '📚', label: 'View Students by Class' }
  ]
  return (
    <section className="admin-dashboard-preview">
      <h3>Administrator Dashboard</h3>
      <p className="preview-note">Demo Preview – real admin login will be connected later</p>
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

export default AdminDashboardPreview