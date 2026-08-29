import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Section from './components/Section'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { profile } from './data'

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="shell">
      <div className="frame">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <Hero />
        <Stats />

        <Section id="about" eyebrow="About" title="Who I am">
          <p className="prose">{profile.about}</p>
        </Section>

        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
