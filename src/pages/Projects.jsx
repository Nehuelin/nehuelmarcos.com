import { useMemo, useState } from 'react'
import PageIntro from '../components/ui/PageIntro'
import { projects } from '../data/projects'
import { courses } from '../data/education'
import { academicCourses } from '../data/academicCourses'
import ProjectPreview from '../components/ui/ProjectPreview'

function getAssociatedCourseUrl(association) {
  const academicCourse = academicCourses.find((course) => course.title === association)
  if (academicCourse) return `#education/computer-engineering/${academicCourse.slug}`

  const courseName = association.split(' · ').pop()
  const course = courses.find((item) => item.title === courseName || item.title.startsWith(`${courseName} -`))
  return course ? `#education/${course.slug}` : null
}

function Projects() {
  const [query, setQuery] = useState('')
  const [association, setAssociation] = useState('all')
  const [tool, setTool] = useState('all')
  const [category, setCategory] = useState('all')
  const [collaboration, setCollaboration] = useState('all')

  const associations = useMemo(() => [...new Set(projects.map((project) => project.associatedTo))], [])
  const categories = useMemo(() => [...new Set(projects.map((project) => project.category))].sort(), [])
  const tools = useMemo(() => [...new Set(projects.flatMap((project) => project.stack))].sort(), [])
  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return projects.filter((project) => {
      const searchableText = [project.title, project.category, project.associatedTo, project.summary, ...project.stack, ...(project.contribution ?? [])].join(' ').toLowerCase()
      return (!normalizedQuery || searchableText.includes(normalizedQuery))
        && (association === 'all' || project.associatedTo === association)
        && (tool === 'all' || project.stack.includes(tool))
        && (category === 'all' || project.category === category)
        && (collaboration === 'all' || (collaboration === 'team' && project.teamProject === true) || (collaboration === 'solo' && !project.teamProject))
    })
  }, [association, category, collaboration, query, tool])

  return (
    <section className="content-page projects-page">
      <PageIntro number="04" label="Projects" title={<>Things I’ve<br /><em>made.</em></>}>
        Academic work, course milestones and personal initiatives—built to explore ideas and solve real problems.
      </PageIntro>

      <div className="project-overview" aria-label="Project overview">
        <div><strong>{projects.length}</strong><span>Projects documented</span></div>
        <div><strong>{associations.length}</strong><span>Courses & initiatives</span></div>
        <div><strong>{tools.length}</strong><span>Tools explored</span></div>
      </div>
      <div className="project-filters" aria-label="Project filter controls">
        <label className="project-field project-search">
          <span>Search</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Project, course, tool..." />
        </label>
        <label className="project-field">
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All categories</option>
            {categories.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="project-field">
          <span>Associated to</span>
          <select value={association} onChange={(event) => setAssociation(event.target.value)}>
            <option value="all">All associations</option>
            {associations.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="project-field">
          <span>Tool</span>
          <select value={tool} onChange={(event) => setTool(event.target.value)}>
            <option value="all">All tools</option>
            {tools.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="project-field">
          <span>Collaboration</span>
          <select value={collaboration} onChange={(event) => setCollaboration(event.target.value)}>
            <option value="all">All projects</option>
            <option value="team">Team projects</option>
            <option value="solo">Solo projects</option>
          </select>
        </label>
      </div>

      <div className="project-results-heading">
        <p className="section-label">Project index</p>
        <p>{filteredProjects.length} of {projects.length} projects</p>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="project-empty">No projects match this filter combination. Try widening the search or clearing a filter.</p>
      ) : (
        <div className="project-feature">
          {filteredProjects.map((project, index) => {
            const associatedCourseUrl = getAssociatedCourseUrl(project.associatedTo)

            return (
              <article key={project.slug}>
              <div className="project-visual">
                <div className="project-aside">
                   <span>{String(index + 1).padStart(2, '0')} / {project.category}{project.teamProject ? ' / Team project' : ''}</span>
                  <p>{associatedCourseUrl ? <a href={associatedCourseUrl}>{project.associatedTo} ↗</a> : project.associatedTo}</p>
                </div>
                <ProjectPreview project={project} className="project-card-preview" />
              </div>
              <div className="project-copy">
                <p className="section-label">Associated to · {associatedCourseUrl ? <a href={associatedCourseUrl}>{project.associatedTo} ↗</a> : project.associatedTo}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="project-tags" aria-label={`${project.title} tools`}>
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <a className="round-link" href={`#projects/${project.slug}`} aria-label={`View ${project.title} details`}>↗</a>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Projects