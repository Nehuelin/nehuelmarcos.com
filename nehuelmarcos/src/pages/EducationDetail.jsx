import { findEducation } from '../data/education'
import uadeLogo from '../assets/images/entity-logos//logo-uade.jpg'
import coderhouseLogo from '../assets/images/entity-logos//logo-coderhouse.jpg'

function EducationDetail({ slug }) {
  const item = findEducation(slug)
  const logoSrc = item.institution && item.institution.includes('UADE') ? uadeLogo : coderhouseLogo
  
  if (!item) {
    return (
      <section className="content-page">
        <h1>Education not found.</h1>
        <a href="#education">← Back to education</a>
      </section>
    )
  }

  const details = item.facts || item.topics
  
  return (
    <section className="detail-page content-page">
      <a className="back-link" href="#education">← Education</a>
      <p className="section-label">{item.type || `${item.provider} · ${item.status}`}</p>
      <h1>{item.title}<em>.</em></h1>
      <div className="detail-meta"><img src={logoSrc} alt={item.institution || item.provider} className="school-logo" /><p>{item.institution || item.provider}</p><p>{item.period || item.status}</p></div>
      {item.summary && <p className="detail-lede">{item.summary}</p>}
      {item.certificate && (
        <div className="detail-block">
          <p className="section-label">Certificate</p>
          <div>
            <h3 style={{ color: '#182019', marginBottom: '12px' }}>Completion credential</h3>
            <p style={{ fontSize: '17px', lineHeight: '1.65', marginBottom: '20px', color: '#4e534d' }}>
              Verified certificate for the {item.title} course from {item.provider}.
            </p>
            <a href={item.certificate.url} target="_blank" rel="noopener noreferrer" className="text-link">{item.certificate.label || 'View certificate'} <span>↗</span></a>
          </div>
        </div>
      )}
      {item.project && (
        <div className="detail-block">
          <p className="section-label">Capstone project</p>
          <div>
            <h3 style={{ color: '#182019', marginBottom: '12px' }}>{item.project.title}</h3>
            <p style={{ fontSize: '17px', lineHeight: '1.65', marginBottom: '20px', color: '#4e534d' }}>{item.project.description}</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              {item.project.github && <a href={item.project.github} target="_blank" rel="noopener noreferrer" className="text-link">View on GitHub <span>↗</span></a>}
              {item.project.demo && <a href={item.project.demo} target="_blank" rel="noopener noreferrer" className="text-link">View demo <span>↗</span></a>}
            </div>
          </div>
        </div>
      )}
      <div className="detail-block"><p className="section-label">{item.facts ? 'Degree details' : 'What I studied'}</p><ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
    </section>
  )
}
export default EducationDetail