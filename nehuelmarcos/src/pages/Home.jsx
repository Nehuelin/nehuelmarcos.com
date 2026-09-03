import { useTranslation } from 'react-i18next'
import ProjectPreview from '../components/ui/ProjectPreview'
import { experiences } from '../data/experiences'
import { featuredProjectSlugs, projects } from '../data/projects'
import { skillGroups } from '../data/skills'

const Arrow = ({ direction = '↗' }) => <span aria-hidden="true">{direction}</span>

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean)

const toolkitIds = ['java', 'spring-boot', 'python', 'node-js', 'rest-apis', 'sql', 'postgresql', 'docker']
const toolkit = toolkitIds
  .map((id) => skillGroups.flatMap((group) => group.items).find((item) => item.id === id))
  .filter(Boolean)

function HomeProofStrip() {
  const { t } = useTranslation()
  const facts = [
    [t('home.proof.currentRole'), t('home.proof.currentRoleValue')],
    [t('home.proof.education'), t('home.proof.educationValue')],
    [t('home.proof.experience'), t('home.proof.experienceValue')],
    [t('home.proof.languages'), t('home.proof.languagesValue')],
  ]

  return (
    <section className="home-proof" aria-label={t('home.proof.ariaLabel')}>
      {facts.map(([label, value]) => (
        <div key={label}><span>{label}</span><strong>{value}</strong></div>
      ))}
    </section>
  )
}

function FeaturedProjects() {
  const { t } = useTranslation()

  return (
    <section className="home-section featured-work" id="selected-work">
      <div className="home-section-heading">
        <p className="section-label">{t('home.work.label')}</p>
        <h2>{t('home.work.title')}</h2>
      </div>
      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <article key={project.slug} className={!project.previewImage ? 'without-preview' : ''}>
            <div className="featured-project-meta">
              <span>0{index + 1}</span>
              <p>
                {t(`home.featuredProjects.${project.slug}.category`, { defaultValue: project.category })}
                <br />
                {t(`home.featuredProjects.${project.slug}.associatedTo`, { defaultValue: project.associatedTo })}
              </p>
            </div>
            <div className="featured-project-visual" aria-hidden={!project.previewImage}>
              {project.previewImage ? <ProjectPreview project={project} /> : <span>{t('home.work.backendFallback')}</span>}
            </div>
            <div className="featured-project-copy">
              <h3><a href={`#projects/${project.slug}`}>{project.title}</a></h3>
              <p>{t(`home.featuredProjects.${project.slug}.summary`, { defaultValue: project.summary })}</p>
              <div className="home-tags" aria-label={t('home.work.technologiesLabel', { title: project.title })}>
                {project.stack.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <a className="text-link" href={`#projects/${project.slug}`}>{t('home.work.viewProject')} <Arrow /></a>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link home-more-link" href="#projects">{t('home.work.viewAll')} <Arrow direction="→" /></a>
    </section>
  )
}

function ExperienceSnapshot() {
  const { t } = useTranslation()

  return (
    <section className="home-section home-experience">
      <div className="home-section-heading">
        <p className="section-label">{t('home.experience.label')}</p>
        <h2>{t('home.experience.title')}</h2>
      </div>
      <div className="home-role-list">
        {experiences.map((experience) => {
          const roleKey = `home.experience.roles.${experience.slug}`
          const translatedRole = t(`${roleKey}.title`, { defaultValue: experience.role })
          const result = t(`${roleKey}.result`, { defaultValue: '' })
          return (
            <article key={experience.slug}>
              <div>
                <span>{experience.status === 'Current role' ? t('home.experience.currentRole') : t('home.experience.previousRole')}</span>
                <p>{t(`${roleKey}.period`, { defaultValue: experience.period })}</p>
              </div>
              <div>
                <h3><a href={`#experience/${experience.slug}`}>{translatedRole} <em>— {experience.company}</em></a></h3>
                <p>{t(`${roleKey}.summary`, { defaultValue: experience.homeSummary })}</p>
                {result && <strong className="home-result">{result}</strong>}
              </div>
              <a className="role-arrow" href={`#experience/${experience.slug}`} aria-label={t('home.experience.viewRole', { role: translatedRole })}><Arrow /></a>
            </article>
          )
        })}
      </div>
      <a className="text-link home-more-link" href="#experience">{t('home.experience.viewAll')} <Arrow direction="→" /></a>
    </section>
  )
}

function HomeToolkit() {
  const { t } = useTranslation()

  return (
    <section className="home-section home-toolkit">
      <div className="home-section-heading">
        <p className="section-label">{t('home.toolkit.label')}</p>
        <div>
          <h2>{t('home.toolkit.title')}</h2>
          <p>{t('home.toolkit.description')}</p>
        </div>
      </div>
      <ul>{toolkit.map((skill, index) => <li key={skill.id}><span>0{index + 1}</span>{t(`home.toolkit.skills.${skill.id}`, { defaultValue: skill.name })}</li>)}</ul>
      <a className="text-link home-more-link" href="#stack">{t('home.toolkit.viewAll')} <Arrow direction="→" /></a>
    </section>
  )
}

function HomeContact() {
  const { t } = useTranslation()

  return (
    <section className="home-contact">
      <p className="section-label">{t('home.contact.label')}</p>
      <h2>{t('home.contact.title')} <em>{t('home.contact.emphasis')}</em></h2>
      <p>{t('home.contact.description')}</p>
      <nav aria-label={t('home.contact.navigationLabel')}>
        <a href="#contact">{t('home.contact.talk')} <Arrow /></a>
        <a href="https://github.com/Nehuelin" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
      </nav>
    </section>
  )
}

function Home() {
  const { t } = useTranslation()

  const scrollToWork = () => document.getElementById('selected-work')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  })

  return (
    <>
      <section className="hero-section">
        <div className="eyebrow"><i /> {t('home.hero.eyebrow')} <span>---</span></div>
        <h1>{t('home.hero.lineOne')}<br />{t('home.hero.lineTwo')} <em>{t('home.hero.emphasis')}</em></h1>
        <div className="hero-bottom">
          <p>{t('home.hero.description')}</p>
          <div className="hero-actions">
            <button type="button" className="text-link" onClick={scrollToWork}>{t('home.hero.selectedWork')} <Arrow direction="→" /></button>
            <a className="text-link" href="#contact">{t('home.hero.contact')} <Arrow /></a>
          </div>
        </div>
      </section>

      <HomeProofStrip />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <HomeToolkit />
      <section className="home-personal">
        <p className="section-label">{t('home.personal.label')}</p>
        <div>
          <p>{t('home.personal.description')}</p>
          <a className="text-link" href="#other">{t('home.personal.link')} <Arrow direction="→" /></a>
        </div>
      </section>
      <HomeContact />
    </>
  )
}

export default Home;
