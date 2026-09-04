import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getCourseRelations } from '../../data/academicCourses'
import CourseStatusBadge from './CourseStatusBadge'

const filters = ['all', 'completed', 'in-progress', 'current-path']

export default function DependencyGraph({ courses }) {
  const { t } = useTranslation('academic')
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(() => courses.filter((course) => {
    if (filter === 'all') return true
    if (filter === 'current-path') {
      if (course.status === 'in-progress') return true

      return courses.some((current) => current.status === 'in-progress' && (
        getCourseRelations(current.slug).ancestors.has(course.slug) || getCourseRelations(current.slug).descendants.has(course.slug)
      ))
    }
    return course.status === filter
  }), [courses, filter])

  const visibleSlugs = new Set(visible.map((course) => course.slug))

  const relation = selected ? getCourseRelations(selected) : null

  const related = (slug) => !selected || slug === selected || relation.ancestors.has(slug) || relation.descendants.has(slug)

  const positions = new Map();
  
  [1, 2, 3, 4, 5].forEach((year) => visible.filter((course) => course.year === year).forEach((course, index) => positions.set(course.slug, { x: (year - 1) * 260 + 20, y: index * 92 + 55 })))
  
  const height = Math.max(620, ...Array.from(positions.values()).map((position) => position.y + 80))
  const filterLabels = {
    all: t('graph.all'),
    completed: t('statuses.completed'),
    'in-progress': t('statuses.in-progress'),
    'current-path': t('graph.currentPath'),
  }

  return (  
    <section className="dependency-view">
      <div className="graph-toolbar">
        <div>
          <h2>{t('graph.title')}</h2>
          <p>{t('graph.description')}</p>
        </div>
        <div className="graph-filters" aria-label={t('graph.filterLabel')}>
          {filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => { setFilter(item); setSelected(null) }} key={item}>{filterLabels[item]}</button>)}
        </div>
      </div>
      <div className="graph-key">
        <span><i className="completed" /> {t('statuses.completed')}</span>
        <span><i className="in-progress" /> {t('statuses.in-progress')}</span>
        <span><i className="pending" /> {t('statuses.pending')}</span>
      </div>
      <div className="graph-scroll" aria-label={t('graph.scrollAriaLabel')}>
        <svg viewBox={`0 0 1320 ${height}`} width="1240" height={height} role="img">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
          {[1, 2, 3, 4, 5].map((year) => <text x={(year - 1) * 260 + 20} y="26" className="graph-year" key={year}>{t('labels.year', { year }).toUpperCase()}</text>)}
          {visible.flatMap((course) => course.prerequisites.filter((slug) => visibleSlugs.has(slug)).map((slug) => {
            const from = positions.get(slug); const to = positions.get(course.slug)
            const dimmed = selected && !(related(slug) && related(course.slug))
            return <path key={`${slug}-${course.slug}`} className={`graph-edge ${dimmed ? 'dimmed' : ''}`} d={`M ${from.x + 210} ${from.y + 29} C ${from.x + 235} ${from.y + 29}, ${to.x - 25} ${to.y + 29}, ${to.x} ${to.y + 29}`} markerEnd="url(#arrow)" />
          }))}
          {visible.map((course) => { const position = positions.get(course.slug); return <foreignObject key={course.slug} x={position.x} y={position.y} width="210" height="70">
            <button className={`graph-node is-${course.status} ${related(course.slug) ? '' : 'dimmed'} ${selected === course.slug ? 'selected' : ''}`} onClick={() => setSelected(selected === course.slug ? null : course.slug)} onMouseEnter={() => setSelected(course.slug)}>
              <strong>{course.title}</strong><CourseStatusBadge status={course.status} />
            </button>
          </foreignObject> })}
        </svg>
      </div>
      <p className="graph-help">{t('graph.help')}</p>
    </section>
  )
}