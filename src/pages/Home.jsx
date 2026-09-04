import { useTranslation } from 'react-i18next'
import ProjectPreview from '../components/ui/ProjectPreview'
import { education } from '../data/education'
import { experiences } from '../data/experiences'
import { featuredProjectSlugs, projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import nasaPhoto from '../assets/images/other/nehuel-nasa.jpg'

const Arrow = ({ direction = '↗' }) => <span aria-hidden="true">{direction}</span>

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean)

const toolkitIds = ['java', 'spring-boot', 'python', 'node-js', 'rest-apis', 'sql', 'postgresql', 'docker']
const toolkit = toolkitIds
  .map((id) => skillGroups.flatMap((group) => group.items).find((item) => item.id === id))
  .filter(Boolean)

function HomeProofStrip() {
  const { t } = useTranslation('home')
  const degree = education.find((item) => item.slug === 'computer-engineering')
  const currentRole = experiences.find((item) => item.statusCode === 'current')
  const facts = [
    [t('proof.currentRole'), `${currentRole.role} · ${currentRole.company}`],
    [t('proof.education'), `${degree.title} · UADE`],
    [t('proof.experience'), t('proof.experienceValue')],
    [t('proof.languages'), t('proof.languagesValue')],
  ]

  return (
    <section className="home-proof" aria-label={t('proof.ariaLabel')}>
      {facts.map(([label, value]) => (
        <div key={label}><span>{label}</span><strong>{value}</strong></div>
      ))}
    </section>
  )
}

function FeaturedProjects() {
  const { t } = useTranslation('home')
  return (
    <section className="home-section featured-work" id="selected-work">
      <div className="home-section-heading">
        <p className="section-label">{t('featuredWork.sectionLabel')}</p>
        <h2>{t('featuredWork.heading')}</h2>
      </div>
      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <article key={project.slug} className={!project.previewImage ? 'without-preview' : ''}>
            <div className="featured-project-meta">
              <span>0{index + 1}</span>
              <p>{project.category}<br />{project.associatedTo}</p>
            </div>
            <div className="featured-project-visual" aria-hidden={!project.previewImage}>
              {project.previewImage ? <ProjectPreview project={project} /> : <span>{t('featuredWork.backendSystem')}<br /></span>}
            </div>
            <div className="featured-project-copy">
              <h3><a href={`#projects/${project.slug}`}>{project.title}</a></h3>
              <p>{project.summary}</p>
              <div className="home-tags" aria-label={`${project.title} technologies`}>
                {project.stack.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <a className="text-link" href={`#projects/${project.slug}`}>{t('featuredWork.viewProject')} <Arrow /></a>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link home-more-link" href="#projects">{t('featuredWork.viewAllProjects')} <Arrow direction="→" /></a>
    </section>
  )
}

function ExperienceSnapshot() {
  const { t } = useTranslation('home')
  return (
    <section className="home-section home-experience">
      <div className="home-section-heading">
        <p className="section-label">{t('experience.sectionLabel')}</p>
        <h2>{t('experience.heading')}</h2>
      </div>
      <div className="home-role-list">
        {experiences.map((experience) => {
          const result = experience.focus?.find((item) => item.value === '199 tickets resolved')
          return (
            <article key={experience.slug}>
              <div><span>{experience.status}</span><p>{experience.period}</p></div>
              <div>
                <h3><a href={`#experience/${experience.slug}`}>{experience.role} <em>— {experience.company}</em></a></h3>
                <p>{experience.homeSummary}</p>
                {result && <strong className="home-result">{result.value}</strong>}
              </div>
              <a className="role-arrow" href={`#experience/${experience.slug}`} aria-label={`View ${experience.role} experience`}><Arrow /></a>
            </article>
          )
        })}
      </div>
      <a className="text-link home-more-link" href="#experience">{t('experience.viewFullExperience')} <Arrow direction="→" /></a>
    </section>
  )
}

function HomeToolkit() {
  const { t } = useTranslation('home')
  return (
    <section className="home-section home-toolkit">
      <div className="home-section-heading">
        <p className="section-label">{t('toolkit.sectionLabel')}</p>
        <div>
          <h2>{t('toolkit.heading')}</h2>
          <p>{t('toolkit.description')}</p>
        </div>
      </div>
      <ul>{toolkit.map((skill, index) => <li key={skill.id}><span>0{index + 1}</span>{skill.name}</li>)}</ul>
      <a className="text-link home-more-link" href="#stack">{t('toolkit.exploreStack')} <Arrow direction="→" /></a>
    </section>
  )
}

function HomeContact() {
  const { t } = useTranslation('home')
  return (
    <section className="home-contact">
      <p className="section-label">{t('contact.sectionLabel')}</p>
      <h2>{t('contact.heading')} <em>{t('contact.headingEmphasis')}</em></h2>
      <p>{t('contact.description')}</p>
      <nav aria-label={t('contact.linksAriaLabel')}>
        <a href="#contact">{t('contact.letsTalk')} <Arrow /></a>
        <a href="https://github.com/Nehuelin" target="_blank" rel="noreferrer">{t('contact.github')} <Arrow /></a>
      </nav>
    </section>
  )
}

function Home() {
  const { t } = useTranslation('home')
  const scrollToWork = () => document.getElementById('selected-work')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  })

  return (
    <>
      <section className="hero-section">
        <div className="eyebrow"><i /> {t('hero.location')} · {t('hero.language')} <span>---</span></div>
        <h1>{t('hero.introduction')}<br />{t('hero.headline')} <em>{t('hero.headlineEmphasis')}</em></h1>
        <div className="hero-bottom">
          <p>{t('hero.description')}</p>
          <div className="hero-actions">
            <button type="button" className="text-link" onClick={scrollToWork}>{t('hero.viewSelectedWork')} <Arrow direction="→" /></button>
            <a className="text-link" href="/resume-ed-0926.pdf" download="Nehuel-Marcos-Resume.pdf">{t('hero.downloadResume')} <Arrow direction="↓" /></a>
            <a className="text-link" href="#contact">{t('hero.getInTouch')} <Arrow /></a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={nasaPhoto} alt={t('hero.imageAlt')} />
          <figcaption>{t('hero.imageCaption')}</figcaption>
        </figure>
      </section>

      <HomeProofStrip />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <HomeToolkit />
      <section className="home-personal">
        <p className="section-label">{t('beyondWork.sectionLabel')}</p>
        <div>
          <p>{t('beyondWork.description')}</p>
          <a className="text-link" href="#other">{t('beyondWork.more')} <Arrow direction="→" /></a>
        </div>
      </section>
      <HomeContact />
    </>
  )
}

export default Home;