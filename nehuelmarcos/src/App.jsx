import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
import LanguageSwitcher from './components/ui/LanguageSwitcher'

function NotFound() {
  const { t } = useTranslation()

  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back()
      return
    }

    window.location.hash = '#home'
  }

  return (
    <section className="content-page not-found-page">
      <p className="section-label">{t('app.notFound.label')}</p>
      <h1>{t('app.notFound.title')}</h1>
      <p>{t('app.notFound.description')}</p>
      <button type="button" className="text-link not-found-back" onClick={goBack}>{t('app.notFound.back')}</button>
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
  const { t } = useTranslation()
  const getPage = () => window.location.hash.slice(1) || 'home'
  const getInitialTheme = () => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  
  const [page, setPage] = useState(getPage)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage())
      setMenuOpen(false)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={t('app.homeLabel')}>
          NAM<span>.</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? t('app.close') : t('app.menu')}</span><i aria-hidden="true" />
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'is-open' : ''} aria-label={t('app.navigationLabel')} onClick={() => setMenuOpen(false)}>
          <a href="#about">{t('app.navigation.about')}</a>
          <a href="#education">{t('app.navigation.education')}</a>
          <a href="#experience">{t('app.navigation.experience')}</a>
          <a href="#projects">{t('app.navigation.projects')}</a>
          <a href="#stack">{t('app.navigation.stack')}</a>
          <a href="#other">{t('app.navigation.other')}</a>
          <a className="mobile-contact-link" href="#contact">{t('app.navigation.contact')}</a>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <button
            className="theme-toggle"
            type="button"
            aria-label={theme === 'dark' ? t('app.theme.switchToLight') : t('app.theme.switchToDark')}
            title={theme === 'dark' ? t('app.theme.switchToLight') : t('app.theme.switchToDark')}
            onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            <span className="theme-label">{theme === 'dark' ? t('app.theme.light') : t('app.theme.dark')}</span>
          </button>
          <a className="contact-link" href="#contact">{t('app.letsTalk')} <span>↗</span></a>
        </div>
      </header>

      <main key={page} className="page-enter">
        <PageContent page={page} />
      </main>

      <footer>
        <a className="wordmark wordmark-small" href="#home" aria-label={t('app.homeLabel')}>NAM<span>.</span></a>
        <p>{t('app.footer')}</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/nehuel-adolfo-marcos-834020254/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/Nehuelin" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </div>
  )
}

export default App
