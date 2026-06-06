import React, { useState } from 'react'
import './AdminLogin.css'
import AdminDashboardPreview from './AdminDashboardPreview'

function AdminLogin() {
  const [showDemo, setShowDemo] = useState(false)

  const handleDemoLogin = () => {
    setShowDemo(true)
  }

  return (
    <section className="admin">
      <div className="admin-container">
        <div className="admin-card">
          <div className="admin-icon">👨‍💼</div>
          <h2>Admin Login</h2>
          <p className="admin-subtitle">
            Secure access for authorized MGM Classes staff.
          </p>
          <div className="admin-badge-container">
            <span className="badge">Coming Soon / Frontend Preview</span> <span className="lock">🔒</span>
          </div>
          <div className="admin-action">
            <button className="btn btn-primary" onClick={handleDemoLogin}>
              Admin Login
            </button>
          </div>
          <p className="admin-note">
            Admin access will be available only to authorized MGM Classes staff.
          </p>
        </div>
        {showDemo && <AdminDashboardPreview />}
      </div>
    </section>
  )
}

export default AdminLogin