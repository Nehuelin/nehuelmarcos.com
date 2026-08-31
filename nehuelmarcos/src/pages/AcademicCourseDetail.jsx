import CourseStatusBadge from '../components/academic/CourseStatusBadge'
import { findAcademicCourse, getUnlockedCourses } from '../data/academicCourses'

const List = ({ items = [], empty = 'Details ready to be added in academicCourses.js.' }) => {
  if (!items.length) return <p className="academic-empty">{empty}</p>
  return <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

export default function AcademicCourseDetail({ slug }) {
  const course = findAcademicCourse(slug)

  if (!course) return <section className="content-page"><h1>Course not found.</h1><a href="#education/computer-engineering">← Academic journey</a></section>

  const topics = Array.isArray(course.topics) ? course.topics : []
  const technologies = Array.isArray(course.technologies) ? course.technologies : []
  const prerequisiteItems = Array.isArray(course.prerequisites) ? course.prerequisites : []
  const prerequisites = prerequisiteItems.map((item) => {
    if (typeof item === 'string') {
      const normalized = item.trim()
      if (normalized === '38 completed courses') return <p key={normalized}>{normalized}</p>
      const relatedCourse = findAcademicCourse(item)
      if (relatedCourse) {
        return <a key={relatedCourse.slug} href={`#education/computer-engineering/${relatedCourse.slug}`}>{relatedCourse.title} ↗</a>
      }
      return <span key={normalized}>{normalized}</span>
    }

    if (item && typeof item === 'object' && item.slug) {
      return <a key={item.slug} href={`#education/computer-engineering/${item.slug}`}>{item.title} ↗</a>
    }

    return null
  }).filter(Boolean)
  const unlocked = getUnlockedCourses(course.slug)
  const relatedProjects = Array.isArray(course.projects) ? course.projects : []

  return (
    <section className="detail-page content-page academic-detail">
      <a className="back-link" href="#education/computer-engineering">← Academic journey</a>
      <div className="academic-detail-kicker">
        <p className="section-label">Year {course.year}{course.semester ? ` · Semester ${course.semester}` : ''}</p>
        <CourseStatusBadge status={course.status} />
      </div>
      <h1>{course.title}<em>.</em></h1>
      <p className="detail-lede">{course.description}</p>
      <div className="detail-block">
        <p className="section-label">Main topics</p>
        <List items={topics} />
      </div>
      <div className="detail-block">
        <p className="section-label">Technologies & tools</p>
        <div className="academic-detail-tags">
          {technologies.length ? technologies.map((item) => 
            <span key={item}>{item}</span>) : <p className="academic-empty">No technologies used</p>
          }
        </div>
      </div>
      <div className="detail-block">
        <p className="section-label">Learning path</p>
        <div className="relation-columns">
          <div>
            <h2>Prerequisites</h2>
            {prerequisites.length ? prerequisites : <p>None listed</p>}
          </div>
          <div>
            <h2>Unlocks</h2>
            {unlocked.length ? unlocked.map((item) => 
            <a key={item.slug} href={`#education/computer-engineering/${item.slug}`}>{item.title} ↗</a>) : <p>None listed</p>
            }
          </div>
        </div>
      </div>
      <div className="detail-block">
        <p className="section-label">Related projects</p>
        <div>{relatedProjects.length ? relatedProjects.map((project) => 
          <article className="related-project" key={project.title}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="academic-tags">
              {project.technologies?.map((item) => <span key={item}>{item}</span>)}
            </div>
            <a className="text-link" href={project.url} target="_blank" rel="noreferrer">View project ↗</a>
          </article>
          ) : <p className="academic-empty">No related project has been added.</p>}
        </div>
      </div>
    </section>
  )
}