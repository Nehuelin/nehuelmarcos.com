function TechnologyDetail({ technology, projects, experiences, onClose }) {
  return (
    <div className="technology-detail" id={`technology-${technology.id}`} role="region" aria-labelledby={`technology-button-${technology.id}`}>
      <div className="technology-detail-heading">
        <div>
          <p className="section-label">{technology.context}</p>
          <h3>{technology.name}</h3>
        </div>
        <button type="button" onClick={onClose} aria-label={`Close ${technology.name} details`}>Close <span aria-hidden="true">×</span></button>
      </div>
      <p className="technology-description">{technology.description}</p>
      <div className="technology-evidence">
        <div>
          <h4>Related projects</h4>
          {projects.length ? (
            <ul>{projects.map((project) => <li key={project.slug}><a href={`#projects/${project.slug}`}>{project.title}<span aria-hidden="true">↗</span></a></li>)}</ul>
          ) : <p>No directly associated project documented yet.</p>}
        </div>
        {experiences.length > 0 && (
          <div>
            <h4>Professional experience</h4>
            <ul>{experiences.map((experience) => <li key={experience.slug}><a href={`#experiences/${experience.slug}`}>{experience.role} · {experience.company}<span aria-hidden="true">↗</span></a></li>)}</ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default TechnologyDetail