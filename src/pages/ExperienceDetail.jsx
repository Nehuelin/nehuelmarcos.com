import { useTranslation } from 'react-i18next'
import { experiences } from '../data/experiences'
import globantLogo from '../assets/images/entity-logos//globant-logo.png'

function ExperienceDetail({ slug }) {
  const { t } = useTranslation('experiences')
  const item = experiences.find((experience) => experience.slug === slug)
  
  if (!item) {
    return (
      <section className="content-page">
        <h1>{t('detail.notFound')}</h1>
        <a href="#experience">{t('detail.back')}</a>
      </section>
    )
  } 

  return (
    <section className="detail-page content-page experience detail">
      <a className="back-link" href="#experience">{t('detail.experienceBack')}</a>
      <div className="academic-detail-kicker">
        <p className="section-label">{item.status}</p>
        <p className="section-label">{item.period}</p>
      </div>
      <h1>{item.role}<em>.</em></h1>
      <div className="detail-meta">
        <img src={globantLogo} alt={`${item.company} logo`} className="company-logo" />
        <p>{item.company}</p>
        <p>{item.location}</p>
      </div>
      <p className="detail-lede">{item.summary}</p>

      <div className="experience-focus-grid">
        {item.focus.map((fact) => (
          <article key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></article>
        ))}
      </div>
      <div className="detail-block">
        <p className="section-label">{t('detail.responsibilities')}</p>
        <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
      </div>
      <div className="detail-columns experience-capabilities">
        <article>
          <p className="section-label">{t('detail.toolsPlatforms')}</p>
          <div className="tag-list">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        </article>
        <article>
          <p className="section-label">{t('detail.skillsDeveloped')}</p>
          <div className="tag-list">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </article>
      </div>
    </section>
  )
}


export default ExperienceDetail