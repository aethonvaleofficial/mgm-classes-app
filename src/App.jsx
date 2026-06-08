import StudyJourney from './components/StudyJourney'
import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Classes from './components/Classes'
import Faculty from './components/Faculty'
import WhyChoose from './components/WhyChoose'
import AdmissionForm from './components/AdmissionForm'
import PortalPlaceholder from './components/PortalPlaceholder'
import AdminLogin from './components/AdminLogin'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import MobileBottomNav from './components/MobileBottomNav'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const mainElement = document.querySelector('main')
    const observerOptions = {
      root: mainElement || null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.05
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll('main > section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="classes">
          <Classes />
        </section>
        <section id="faculty">
          <Faculty />
        </section>
        <section id="why-choose">
          <WhyChoose />
        </section>
        <section id="admission">
          <AdmissionForm />
        </section>
        <section id="portal">
          <PortalPlaceholder />
        </section>
        <section id="admin">
          <AdminLogin />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <MobileBottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  )
}

export default App