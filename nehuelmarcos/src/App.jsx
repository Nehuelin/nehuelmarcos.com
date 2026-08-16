import { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Stack from './pages/Stack'
import Projects from './pages/Projects'
import Other from './pages/Other'
import Contact from './pages/Contact'
import './App.css'

const pages = {
  home: Home,
  about: About,
  experience: Experiences,
  stack: Stack,
  projects: Projects,
  other: Other,
  contact: Contact,
}

function App() {
  const getPage = () => window.location.hash.slice(1) || 'home'
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHashChange = () => setPage(getPage())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const Page = pages[page] || Home

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Nehuel Marcos, home">
          NM<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Stack</a>
          <a href="#other">Other</a>
        </nav>
        <a className="contact-link" href="#contact">Let's talk <span>↗</span></a>
      </header>

      <main key={page} className="page-enter">
        <Page />
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
