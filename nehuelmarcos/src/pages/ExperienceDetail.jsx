import { experiences } from '../data/experiences'

function ExperienceDetail({ slug }) {
  const item = experiences.find((experience) => experience.slug === slug)
  
  if (!item){
    return (
      <section className="content-page">
        <h1>Experience not found.</h1>
        <a href="#experience">← Back</a>
      </section>
    )
  } 

  return (
    <section className="detail-page content-page">
      <a className="back-link" href="#experience">← Experience</a>
      <p className="section-label">{item.period}</p>
      <h1>{item.role}<em>.</em></h1>
      <div className="detail-meta">
        <p>{item.company}</p>
        <p>Buenos Aires, Argentina</p>
      </div>
      <p className="detail-lede">Supporting people and systems through thoughtful administration, reliable service and practical automation.</p>
      <div className="detail-block">
        <p className="section-label">Responsibilities & impact</p>
        <ul>
          {item.points.map((point) => 
            <li key={point}>{point}</li>
          )}
        </ul>
      </div>
    </section>
  )
}
export default ExperienceDetail