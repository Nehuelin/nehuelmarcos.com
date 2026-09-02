import { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Stack from './pages/Stack'
import Projects from './pages/Projects'
import Other from './pages/Other'
import Contact from './pages/Contact'
import './App.css'
import Education from './pages/Education'
import EducationDetail from './pages/EducationDetail'
import ExperienceDetail from './pages/ExperienceDetail'
import ProjectDetail from './pages/ProjectDetail'
import AcademicJourney from './pages/AcademicJourney'
import AcademicCourseDetail from './pages/AcademicCourseDetail'
import { experiences } from './data/experiences'
import { projects } from './data/projects'
import { courses } from './data/education'
import { academicCourses } from './data/academicCourses'

function NotFound() {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back()
      return
    }

    window.location.hash = '#home'
  }

  return (
    <section className="content-page not-found-page">
      <p className="section-label">404 · Not found</p>
      <h1>This page doesn’t exist.</h1>
      <p>The route you followed is not supported.</p>
      <button type="button" className="text-link not-found-back" onClick={goBack}>← Go back</button>
    </section>
  )
}

function PageContent({ page }) {
  const [route, slug, courseSlug, extraSegment] = page.split('/')

  if (extraSegment) return <NotFound />
  if (courseSlug) {
    return route === 'education' && slug === 'computer-engineering' && academicCourses.some((item) => item.slug === courseSlug)
      ? <AcademicCourseDetail slug={courseSlug} />
      : <NotFound />
  }
  if (slug) {
    if (route === 'experience' && experiences.some((item) => item.slug === slug)) return <ExperienceDetail slug={slug} />
    if (route === 'projects' && projects.some((item) => item.slug === slug)) return <ProjectDetail slug={slug} />
    if (route === 'education' && slug === 'computer-engineering') return <AcademicJourney />
    if (route === 'education' && courses.some((item) => item.slug === slug)) return <EducationDetail slug={slug} />
    return <NotFound />
  }

  if (route === 'home') return <Home />
  if (route === 'about') return <About />
  if (route === 'education') return <Education />
  if (route === 'experience') return <Experiences />
  if (route === 'stack') return <Stack />
  if (route === 'projects') return <Projects />
  if (route === 'other') return <Other />
  if (route === 'contact') return <Contact />
  return <NotFound />
}

function App() {
  const getPage = () => window.location.hash.slice(1) || 'home'
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHashChange = () => setPage(getPage())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Nehuel Marcos, home">
          NM<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#other">Other</a>
        </nav>
        <a className="contact-link" href="#contact">Let's talk <span>↗</span></a>
      </header>

      <main key={page} className="page-enter">
        <PageContent page={page} />
      </main>

      <footer>
        <a className="wordmark wordmark-small" href="#home">NM<span>.</span></a>
        <p>Computer Engineering student building thoughtful software.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </div>
  )
}

export default App
