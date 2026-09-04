import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageIntro from '../components/ui/PageIntro'
import TechnologyDetail from '../components/ui/TechnologyDetail'
import { experiences } from '../data/experiences'
import { projects } from '../data/projects'
import { currentFocus, skillGroups } from '../data/skills'
import { courses } from '../data/education'
import { academicCourses } from '../data/academicCourses'

const toolLogos = import.meta.glob('../assets/images/tool-logos/*', {
  eager: true,
  import: 'default',
  query: '?url',
})

const getRelatedProjects = (technology) => {
  return projects.filter((project) => technology.projects.includes(project.slug))
}

const getToolLogo = (filename) => filename ? toolLogos[`../assets/images/tool-logos/${filename}`] : null

function Stack() {
  const { t } = useTranslation('stack')
  const [selectedId, setSelectedId] = useState(null)
  const technologyButtonRefs = useRef(new Map())

  const closeTechnologyDetail = (technologyId) => {
    setSelectedId(null)
    requestAnimationFrame(() => technologyButtonRefs.current.get(technologyId)?.focus())
  }

  return (
    <section className="content-page stack-page">
      <PageIntro number="03" label={t('pageIntro.label')} title={<>{t('pageIntro.titleLineOne')}<br />{t('pageIntro.titleLineTwo')}</>}>
        {t('pageIntro.description')}
      </PageIntro>
      <section className="current-focus" aria-labelledby="current-focus-title">
        <p className="section-label">{t('focusSection.label')}</p>
        <div>
          <h2 id="current-focus-title">{t('focusSection.heading')}</h2>
          <ul>{currentFocus.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <div className="skill-list">
        {skillGroups.map((group, index) => (
          <article key={group.id}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <div className="skill-heading">
              <h2>{group.title}</h2>
              <div className="skill-logos" aria-label={t('group.logoAriaLabel', { title: group.title })}>
                {group.items.filter((item) => item.logo).map((item) => (
                  <img key={item.id} src={getToolLogo(item.logo)} alt={item.name} aria-hidden="true"/>
                ))}
              </div>
            </div>
            <div className="technology-list">
              {group.items.map((item) => {
                const isSelected = selectedId === item.id
                return (
                  <button
                    type="button"
                    id={`technology-button-${item.id}`}
                    className={isSelected ? 'selected' : ''}
                    aria-expanded={isSelected}
                    aria-controls={`technology-${item.id}`}
                    onClick={() => setSelectedId(isSelected ? null : item.id)}
                    ref={(button) => {
                      if (button) technologyButtonRefs.current.set(item.id, button)
                      else technologyButtonRefs.current.delete(item.id)
                    }}
                    key={item.id}
                  >
                    {item.name}<span aria-hidden="true">{isSelected ? '−' : '+'}</span>
                  </button>
                )
              })}
              {group.items.map((item) => selectedId === item.id && (
                <TechnologyDetail
                  key={`${item.id}-detail`}
                  technology={item}
                  projects={getRelatedProjects(item)}
                  experiences={experiences.filter((experience) => item.experienceSlugs.includes(experience.slug))}
                  courses={courses.filter((course) => item.courseSlugs.includes(course.slug))}
                  academicCourses={academicCourses.filter((course) => item.academicCourseSlugs.includes(course.slug))}
                  onClose={() => closeTechnologyDetail(item.id)}
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  ) 
}

export default Stack;