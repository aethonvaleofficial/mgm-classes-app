import React from 'react'
import './Faculty.css'

const facultyData = [
  {
    name: 'Sangeeta Ma\'am',
    role: 'Owner & Head Teacher',
    expertise: 'English, Hindi, Sanskrit, Class 11-12 English & Arts Support',
    image: '👩‍🏫',
    color: 'from-pink-100 to-pink-200'
  },
  {
    name: 'Gaurav Sir',
    role: 'Senior Faculty',
    expertise: 'Mathematics, Science, EVS (Below Class 8)',
    image: '👨‍🏫',
    color: 'from-blue-100 to-blue-200'
  },
  {
    name: 'Jitendra Sir',
    role: 'Subject Matter Expert',
    expertise: 'Science and Social Science',
    image: '👨‍🏫',
    color: 'from-green-100 to-green-200'
  },
  {
    name: 'Ashwinder Sir',
    role: 'Senior Mathematics & Science Faculty',
    expertise: 'Mathematics and Science (Class 9-10)',
    image: '👨‍🏫',
    color: 'from-purple-100 to-purple-200'
  }
]

function Faculty() {
  return (
    <section className="faculty">
      <div className="faculty-container">
        <h2>Meet Our Faculty</h2>
        <p className="section-subtitle">
          Experienced educators dedicated to your child's success
        </p>

        <div className="faculty-grid">
          {facultyData.map((member, index) => (
            <div key={index} className="faculty-card">
              <div className={`faculty-avatar bg-gradient ${member.color}`}>
                {member.image}
              </div>
              <div className="faculty-info">
                <h3 className="faculty-name">{member.name}</h3>
                <p className="faculty-role">{member.role}</p>
                <p className="faculty-expertise">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faculty