import React, { useState } from 'react'
import './AdmissionForm.css'

function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    className: '',
    phone: '',
    subjects: [],
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const subjectOptions = [
    'English', 'Mathematics', 'Science', 'Social Science',
    'Hindi', 'Sanskrit', 'Computer Basics', 'Environmental Studies',
    'History', 'Political Science', 'Economics', 'Sociology', 'Psychology'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubjectToggle = (subject) => {
    setFormData(prev => {
      const subjects = prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
      return { ...prev, subjects }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const data = new FormData()
    data.append('studentName', formData.studentName)
    data.append('parentName', formData.parentName)
    data.append('className', formData.className)
    data.append('phone', formData.phone)
    data.append('subjects', formData.subjects.join(', '))
    data.append('message', formData.message)

    try {
      const response = await fetch('https://formspree.io/f/xwvzllaz', {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          studentName: '',
          parentName: '',
          className: '',
          phone: '',
          subjects: [],
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="admission-form">
      <div className="admission-container">
        <h2>Admission Enquiry</h2>
        <p className="section-subtitle">
          Fill out the form below and we'll contact you shortly
        </p>

        {submitStatus === 'success' && (
          <div className="alert alert-success">
            Thank you! Your admission enquiry has been sent. MGM Classes will contact you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="alert alert-error">
            Something went wrong. Please try again or contact us on WhatsApp.
          </div>
        )}

        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="studentName">Student Name *</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="parentName">Parent Name *</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="className">Class *</label>
              <select
                id="className"
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
              >
                <option value="">Select Class</option>
                <option value="Nursery">Nursery</option>
                <option value="Jr. KG">Jr. KG</option>
                <option value="Sr. KG">Sr. KG</option>
                <option value="Class 1">Class 1</option>
                <option value="Class 2">Class 2</option>
                <option value="Class 3">Class 3</option>
                <option value="Class 4">Class 4</option>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="Class 11">Class 11</option>
                <option value="Class 12">Class 12</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Selected Subjects</label>
            <div className="subjects-grid">
              {subjectOptions.map(subject => (
                <label key={subject} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.subjects.includes(subject)}
                    onChange={() => handleSubjectToggle(subject)}
                  />
                  {subject}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Any specific requirements or questions..."
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default AdmissionForm