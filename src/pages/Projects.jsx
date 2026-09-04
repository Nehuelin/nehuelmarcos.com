import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('projects')
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
      <PageIntro number="04" label={t('pageIntro.label')} title={<>{t('pageIntro.titleLineOne')}<br /><em>{t('pageIntro.titleLineTwo')}</em></>}>
        {t('pageIntro.description')}
      </PageIntro>

      <div className="project-overview" aria-label={t('overview.ariaLabel')}>
        <div><strong>{projects.length}</strong><span>{t('overview.documented')}</span></div>
        <div><strong>{associations.length}</strong><span>{t('overview.associations')}</span></div>
        <div><strong>{tools.length}</strong><span>{t('overview.tools')}</span></div>
      </div>
      <div className="project-filters" aria-label={t('filters.ariaLabel')}>
        <label className="project-field project-search">
          <span>{t('filters.searchLabel')}</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('filters.searchPlaceholder')} />
        </label>
        <label className="project-field">
          <span>{t('filters.categoryLabel')}</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">{t('filters.categoryAll')}</option>
            {categories.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="project-field">
          <span>{t('filters.associatedLabel')}</span>
          <select value={association} onChange={(event) => setAssociation(event.target.value)}>
            <option value="all">{t('filters.associationAll')}</option>
            {associations.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="project-field">
          <span>{t('filters.toolLabel')}</span>
          <select value={tool} onChange={(event) => setTool(event.target.value)}>
            <option value="all">{t('filters.toolAll')}</option>
            {tools.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="project-field">
          <span>{t('filters.collaborationLabel')}</span>
          <select value={collaboration} onChange={(event) => setCollaboration(event.target.value)}>
            <option value="all">{t('filters.collaborationAll')}</option>
            <option value="team">{t('filters.collaborationTeam')}</option>
            <option value="solo">{t('filters.collaborationSolo')}</option>
          </select>
        </label>
      </div>

      <div className="project-results-heading">
        <p className="section-label">{t('results.heading')}</p>
        <p>{t('results.count', { count: filteredProjects.length, total: projects.length })}</p>
      </div>

      {filteredProjects.length === 0 ? (
        <p className="project-empty">{t('results.empty')}</p>
      ) : (
        <div className="project-feature">
          {filteredProjects.map((project, index) => {
            const associatedCourseUrl = getAssociatedCourseUrl(project.associatedTo)

            return (
              <article key={project.slug}>
              <div className="project-visual">
                <div className="project-aside">
                   <span>{String(index + 1).padStart(2, '0')} / {project.category}{project.teamProject ? ` / ${t('card.teamProject')}` : ''}</span>
                  <p>{associatedCourseUrl ? <a href={associatedCourseUrl}>{project.associatedTo} ↗</a> : project.associatedTo}</p>
                </div>
                <ProjectPreview project={project} className="project-card-preview" />
              </div>
              <div className="project-copy">
                <p className="section-label">{t('card.associatedTo')} · {associatedCourseUrl ? <a href={associatedCourseUrl}>{project.associatedTo} ↗</a> : project.associatedTo}</p>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="project-tags" aria-label={`${project.title} ${t('card.toolsAriaLabel')}`}>
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
              <a className="round-link" href={`#projects/${project.slug}`} aria-label={t('card.viewDetails', { title: project.title })}>↗</a>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Projects