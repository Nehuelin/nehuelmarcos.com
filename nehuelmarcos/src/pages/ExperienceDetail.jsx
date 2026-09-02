import { experiences } from '../data/experiences'
import globantLogo from '../assets/images/logo-globant.png'

function ExperienceDetail({ slug }) {
  const item = experiences.find((experience) => experience.slug === slug)
  
  if (!item) {
    return (
      <section className="content-page">
        <h1>Experience not found.</h1>
        <a href="#experience">← Back</a>
      </section>
    )
  } 

  return (
    <section className="detail-page content-page experience detail">
      <a className="back-link" href="#experience">← Experience</a>
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
        <p className="section-label">Responsibilities & impact</p>
        <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
      </div>
      <div className="detail-columns experience-capabilities">
        <article>
          <p className="section-label">Tools & platforms</p>
          <div className="tag-list">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
        </article>
        <article>
          <p className="section-label">Skills developed</p>
          <div className="tag-list">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </article>
      </div>
    </section>
  )
}


export default ExperienceDetail