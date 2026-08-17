import { findEducation } from '../data/education'

function EducationDetail({ slug }) {
  const item = findEducation(slug)
  
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
      <div className="detail-meta"><p>{item.institution || item.provider}</p><p>{item.period || item.status}</p></div>
      {item.summary && <p className="detail-lede">{item.summary}</p>}
      <div className="detail-block"><p className="section-label">{item.facts ? 'Degree details' : 'What I studied'}</p><ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
    </section>
  )
}
export default EducationDetail