import { useTranslation } from 'react-i18next'

function TechnologyDetail({ technology, projects, experiences, courses, academicCourses, onClose }) {
  const { t } = useTranslation('stack')

  return (
    <div className="technology-detail" id={`technology-${technology.id}`} role="region" aria-labelledby={`technology-button-${technology.id}`}>
      <div className="technology-detail-heading">
        <div>
          <p className="section-label">{technology.context}</p>
          <h3>{technology.name}</h3>
        </div>
        <button type="button" onClick={onClose} aria-label={t('detail.closeAriaLabel', { name: technology.name })}>{t('detail.close')} <span aria-hidden="true">×</span></button>
      </div>
      <p className="technology-description">{technology.description}</p>
      <div className="technology-evidence">
        <div>
          <h4>{t('detail.relatedProjects')}</h4>
          {projects.length ? (
            <ul>{projects.map((project) => <li key={project.slug}><a href={`#projects/${project.slug}`}>{project.title}<span aria-hidden="true">↗</span></a></li>)}</ul>
          ) : <p>{t('detail.noProjects')}</p>}
        </div>
        {experiences.length > 0 && (
          <div>
            <h4>{t('detail.professionalExperience')}</h4>
            <ul>{experiences.map((experience) => <li key={experience.slug}><a href={`#experience/${experience.slug}`}>{experience.role} · {experience.company}<span aria-hidden="true">↗</span></a></li>)}</ul>
          </div>
        )}
        {courses.length > 0 && (
          <div>
            <h4>{t('detail.relatedEducation')}</h4>
            <ul>{courses.map((course) => <li key={course.slug}><a href={`#education/${course.slug}`}>{course.title} · {course.provider}<span aria-hidden="true">↗</span></a></li>)}</ul>
          </div>
        )}
        {academicCourses.length > 0 && (
          <div>
            <h4>{t('detail.academicJourney')}</h4>
            <ul>{academicCourses.map((course) => <li key={course.slug}><a href={`#education/computer-engineering/${course.slug}`}>{course.title}<span aria-hidden="true">↗</span></a></li>)}</ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default TechnologyDetail