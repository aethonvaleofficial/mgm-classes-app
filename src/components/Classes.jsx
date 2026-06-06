import React from 'react'
import './Classes.css'

const classesData = [
  {
    title: 'Nursery',
    description: 'Play-based learning foundation for ages 3-4',
    subjects: ['Basic Literacy', 'Numeracy', 'Motor Skills', 'Social Development']
  },
  {
    title: 'Jr. KG',
    description: 'Building confidence and curiosity for ages 4-5',
    subjects: ['Alphabet Recognition', 'Number Concepts', 'Environmental Studies', 'Creative Arts']
  },
  {
    title: 'Sr. KG',
    description: 'Preparation for formal schooling ages 5-6',
    subjects: ['Reading Readiness', 'Writing Skills', 'Basic Math', 'General Awareness']
  },
  {
    title: 'Class 1-5',
    description: 'Strong foundation in core subjects',
    subjects: ['English', 'Mathematics', 'Environmental Studies', 'Hindi', 'General Knowledge']
  },
  {
    title: 'Class 6-8',
    description: 'Concept building and analytical thinking',
    subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi', 'Computer Basics']
  },
  {
    title: 'Class 9-10',
    description: 'Board exam preparation with conceptual clarity',
    subjects: ['English', 'Mathematics', 'Science', 'Social Science', 'Hindi/Sanskrit']
  },
  {
    title: 'Class 11-12',
    description: 'English & Arts Stream Support',
    subjects: ['English Core', 'English Elective', 'History', 'Political Science', 'Economics', 'Sociology', 'Psychology']
  }
]

function Classes() {
  return (
    <section className="classes">
      <div className="classes-container">
        <h2>Classes & Subjects Offered</h2>
        <p className="section-subtitle">
          Comprehensive curriculum from Nursery to Class 12 with specialized support
        </p>

        <div className="classes-grid">
          {classesData.map((cls, index) => (
            <div key={index} className="class-card">
              <h3 className="class-title">{cls.title}</h3>
              <p className="class-description">{cls.description}</p>
              <div className="class-subjects">
                {cls.subjects.map((subject, subIndex) => (
                  <span key={subIndex} className="subject-tag">{subject}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes