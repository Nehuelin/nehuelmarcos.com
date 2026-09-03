import { projects } from '../data/projects'
import { courses } from '../data/education'
import { academicCourses } from '../data/academicCourses'
import ProjectPreview from '../components/ui/ProjectPreview'

function getAssociatedCourse(association) {
  const academicCourse = academicCourses.find((course) => course.title === association)
  if (academicCourse) return `#education/computer-engineering/${academicCourse.slug}`

  const courseName = association.split(' · ').pop()
  const course = courses.find((item) => item.title === courseName || item.title.startsWith(`${courseName} -`))
  return course ? `#education/${course.slug}` : null
}

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

  const associatedCourseUrl = getAssociatedCourse(project.associatedTo)

  return (
    <section className="detail-page content-page">
      <a className="back-link" href="#projects">← Projects</a>
      <div className="project-kicker">
        <p className="section-label">{project.category}</p>
        <p className="section-label">Associated to {associatedCourseUrl ? <a href={associatedCourseUrl}>{project.associatedTo} ↗</a> : project.associatedTo}</p>
      </div>
      <h1>{project.title}<em>.</em></h1>
      <div className={`project-detail-layout ${project.previewImage ? '' : 'without-preview'}`}>
        <ProjectPreview project={project} className={project.associatedTo} />
        <div className="project-detail-copy">
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
        </div>
      </div>
      <div className="project-source">
        <p className="section-label">Explore the work</p>
        <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer">View source on GitHub <span>↗</span></a>
      </div>
    </section>
  )
}

export default ProjectDetail