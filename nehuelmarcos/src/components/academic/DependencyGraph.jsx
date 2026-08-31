import { useMemo, useState } from 'react'
import { getCourseRelations } from '../../data/academicCourses'
import CourseStatusBadge from './CourseStatusBadge'

const filters = ['all', 'completed', 'in-progress', 'current-path']

export default function DependencyGraph({ courses }) {
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

  return (  
    <section className="dependency-view">
      <div className="graph-toolbar">
        <div>
          <h2>Course dependencies</h2>
          <p>Select a course to trace everything that leads to it—and what it unlocks.</p>
        </div>
        <div className="graph-filters" aria-label="Filter graph">
          {filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => { setFilter(item); setSelected(null) }} key={item}>{item.replace('-', ' ')}</button>)}
        </div>
      </div>
      <div className="graph-key">
        <span><i className="completed" /> Completed</span>
        <span><i className="in-progress" /> In progress</span>
        <span><i className="pending" /> Pending</span>
      </div>
      <div className="graph-scroll" aria-label="Interactive course prerequisite graph">
        <svg viewBox={`0 0 1320 ${height}`} width="1320" height={height} role="img">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>
          {[1, 2, 3, 4, 5].map((year) => <text x={(year - 1) * 260 + 20} y="26" className="graph-year" key={year}>YEAR {year}</text>)}
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
      <p className="graph-help">The graph is horizontally scrollable on smaller screens. Select a node, then open its curriculum card for full details.</p>
    </section>
  )
}