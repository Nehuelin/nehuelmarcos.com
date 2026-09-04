import { useEffect, useLayoutEffect, useRef, useState } from 'react'
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
import { getPageMetadata } from './utils/pageMetadata'
import { useTranslation } from 'react-i18next' 

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
  const { t, i18n } = useTranslation()
  const getPage = () => window.location.hash.slice(1) || 'home'
  const getInitialTheme = () => {
    const savedTheme = window.localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  
  const [page, setPage] = useState(getPage)
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const shouldScrollToTop = useRef(false)
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'es' : 'en'
    window.localStorage.setItem('language', nextLanguage)
    i18n.changeLanguage(nextLanguage)
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const metadata = getPageMetadata(page)
    // const icon = document.querySelector('link[rel~="icon"]') // 
    const description = document.querySelector('meta[name="description"]')

    document.title = metadata.title
    // if (icon) icon.href = metadata.icon
    if (description) description.content = metadata.description
  }, [page])

  useEffect(() => {
    const onInternalLinkClick = (event) => {
      const link = event.target.closest('a[href^="#"]')
      if (link && link.hash !== window.location.hash) shouldScrollToTop.current = true
    }

    document.addEventListener('click', onInternalLinkClick)
    return () => document.removeEventListener('click', onInternalLinkClick)
  }, [])

  useLayoutEffect(() => {
    if (!shouldScrollToTop.current) return
    shouldScrollToTop.current = false
    const previousScrollBehavior = document.documentElement.style.scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    document.documentElement.style.scrollBehavior = previousScrollBehavior
  }, [page])


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
        <a className="wordmark" href="#home" aria-label={t('navigation.homeAriaLabel')}>
          NAM<span>.</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? t('navigation.close') : t('navigation.menu')}</span><i aria-hidden="true" />
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'is-open' : ''} aria-label={t('navigation.primaryNavigation')} onClick={() => setMenuOpen(false)}>
          <a href="#about">{t('navigation.about')}</a>
          <a href="#education">{t('navigation.education')}</a>
          <a href="#experience">{t('navigation.experience')}</a>
          <a href="#projects">{t('navigation.projects')}</a>
          <a href="#stack">{t('navigation.stack')}</a>
          <a href="#other">{t('navigation.other')}</a>
          <a className="mobile-contact-link" href="#contact">{t('navigation.contact')}</a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={t(theme === 'dark' ? 'navigation.switchToLightMode' : 'navigation.switchToDarkMode')}
            title={t(theme === 'dark' ? 'navigation.switchToLightMode' : 'navigation.switchToDarkMode')}
            onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            <span className="theme-label">{t(theme === 'dark' ? 'navigation.light' : 'navigation.dark')}</span>
          </button>
          <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={language === 'en' ? 'Cambiar idioma a español' : 'Switch language to English'}>{language === 'en' ? 'ES' : 'EN'}</button>
          <a className="contact-link" href="#contact">{t('navigation.letsTalk')} <span>↗</span></a>
        </div>
      </header>

      <main key={page} className="page-enter">
        <PageContent page={page} />
      </main>

      <footer>
        <a className="wordmark wordmark-small" href="#home">NAM<span>.</span></a>
        <p>&copy; 2026 Nehuel Adolfo Marcos </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/nehuel-adolfo-marcos-834020254/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/Nehuelin" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </footer>
    </div>
  )
}

export default App
