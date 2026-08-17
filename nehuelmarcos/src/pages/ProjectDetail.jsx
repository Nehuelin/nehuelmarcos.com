import { projects } from '../data/projects'

function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug)
  
  if (!project) {
    return (
      <section className="content-page">
        <h1>Project not found.</h1>
        <a href="#projects">← Back</a>
      </section>
    )
  }

  return (
    <section className="detail-page content-page">
      <a className="back-link" href="#projects">← Projects</a>
      <p className="section-label">{project.category} · {project.year}</p>
      <h1>{project.title}<em>.</em></h1>
      <p className="detail-lede">{project.summary}</p>
      <div className="detail-columns">
        <article>
          <p className="section-label">The challenge</p>
          <p>{project.challenge}</p>
        </article>
        <article>
          <p className="section-label">The solution</p>
          <p>{project.solution}</p>
        </article>
      </div>
      <div className="detail-block">
        <p className="section-label">Built with</p>
        <div className="tag-list">
          {project.stack.map((item) => 
            <span key={item}>{item}</span>
          )}
        </div>
      </div>
    </section>
  )
}
export default ProjectDetail