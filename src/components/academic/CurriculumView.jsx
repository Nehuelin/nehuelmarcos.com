import { useMemo, useState } from 'react'
import { filterAcademicCourses } from '../../data/courseFilters'
import CourseCard from './CourseCard'

const statusOptions = ['all', 'completed', 'in-progress', 'pending']

export default function CurriculumView({ courses }) {
  const [query, setQuery] = useState('')
  const [year, setYear] = useState('all')
  const [status, setStatus] = useState('all')
  const [technology, setTechnology] = useState('all')
  const [onlyWithDependencies, setOnlyWithDependencies] = useState(false)
  const [onlyWithProjects, setOnlyWithProjects] = useState(false)

  const availableYears = useMemo(() => Array.from(new Set(courses.map((course) => course.year))).sort((a, b) => a - b), [courses])
  const availableTechnologies = useMemo(() => Array.from(new Set(courses.flatMap((course) => course.technologies ?? []))).sort((a, b) => a.localeCompare(b)), [courses])

  const filteredCourses = useMemo(() => filterAcademicCourses(courses, {
    query,
    year,
    status,
    technology,
    onlyWithDependencies,
    onlyWithProjects,
  }), [courses, query, year, status, technology, onlyWithDependencies, onlyWithProjects])

  const visibleYearMap = useMemo(() => {
    return filteredCourses.reduce((acc, course) => {
      acc[course.year] = acc[course.year] ? [...acc[course.year], course] : [course]
      return acc
    }, {})
  }, [filteredCourses])

  return (
    <div className="curriculum-view">
      <div className="curriculum-filters" aria-label="Course filter controls">
        <label className="curriculum-field curriculum-search">
          <span>Search</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title, topic, technology, dependency..." />
        </label>

        <label className="curriculum-field">
          <span>Year</span>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            <option value="all">All years</option>
            {availableYears.map((item) => <option value={item} key={item}>Year {item}</option>)}
          </select>
        </label>

        <label className="curriculum-field">
          <span>Status</span>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="all">All statuses</option>
            {statusOptions.filter((item) => item !== 'all').map((item) => <option value={item} key={item}>{item.replace('-', ' ')}</option>)}
          </select>
        </label>

        <label className="curriculum-field">
          <span>Technology</span>
          <select value={technology} onChange={(event) => setTechnology(event.target.value)}>
            <option value="all">Any technology</option>
            {availableTechnologies.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>

        <label className="curriculum-toggle">
          <input type="checkbox" checked={onlyWithDependencies} onChange={(event) => setOnlyWithDependencies(event.target.checked)} />
          <span>Only courses with dependencies</span>
        </label>

        <label className="curriculum-toggle">
          <input type="checkbox" checked={onlyWithProjects} onChange={(event) => setOnlyWithProjects(event.target.checked)} />
          <span>Only courses with projects</span>
        </label>
      </div>

      {filteredCourses.length === 0 ? (
        <p className="academic-empty">No courses match this filter combination. Try widening the search or clearing the active filters.</p>
      ) : null}

      {[1, 2, 3, 4, 5].map((yearValue) => {
        const yearCourses = visibleYearMap[yearValue] ?? []

        if (!yearCourses.length) return null

        return (
          <section className="academic-year" key={yearValue}>
            <header>
              <p className="section-label">0{yearValue}</p>
              <h2>Year {yearValue}</h2>
              <span>{yearCourses.filter((course) => course.status === 'completed').length}/{yearCourses.length} completed</span>
            </header>
            <div>
              {yearCourses.map((course) => <CourseCard course={course} key={course.slug} />)}
            </div>
          </section>
        )
      })}
    </div>
  )
}