import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { filterAcademicCourses } from '../../data/courseFilters'
import CourseCard from './CourseCard'

const statusOptions = ['all', 'completed', 'in-progress', 'pending']

export default function CurriculumView({ courses }) {
  const { t } = useTranslation('academic')
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
      <div className="curriculum-filters" aria-label={t('filters.ariaLabel')}>
        <label className="curriculum-field curriculum-search">
          <span>{t('filters.searchLabel')}</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('filters.searchPlaceholder')} />
        </label>

        <label className="curriculum-field">
          <span>{t('filters.yearLabel')}</span>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            <option value="all">{t('filters.yearAll')}</option>
            {availableYears.map((item) => <option value={item} key={item}>{t('filters.yearValue', { year: item })}</option>)}
          </select>
        </label>

        <label className="curriculum-field">
          <span>{t('filters.statusLabel')}</span>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="all">{t('filters.statusAll')}</option>
            {statusOptions.filter((item) => item !== 'all').map((item) => <option value={item} key={item}>{item.replace('-', ' ')}</option>)}
          </select>
        </label>

        <label className="curriculum-field">
          <span>{t('filters.technologyLabel')}</span>
          <select value={technology} onChange={(event) => setTechnology(event.target.value)}>
            <option value="all">{t('filters.technologyAll')}</option>
            {availableTechnologies.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>

        <label className="curriculum-toggle">
          <input type="checkbox" checked={onlyWithDependencies} onChange={(event) => setOnlyWithDependencies(event.target.checked)} />
          <span>{t('filters.dependenciesOnly')}</span>
        </label>

        <label className="curriculum-toggle">
          <input type="checkbox" checked={onlyWithProjects} onChange={(event) => setOnlyWithProjects(event.target.checked)} />
          <span>{t('filters.projectsOnly')}</span>
        </label>
      </div>

      {filteredCourses.length === 0 ? (
        <p className="academic-empty">{t('filters.empty')}</p>
      ) : null}

      {[1, 2, 3, 4, 5].map((yearValue) => {
        const yearCourses = visibleYearMap[yearValue] ?? []

        if (!yearCourses.length) return null

        return (
          <section className="academic-year" key={yearValue}>
            <header>
              <p className="section-label">0{yearValue}</p>
              <h2>{t('filters.yearValue', { year: yearValue })}</h2>
              <span>{yearCourses.filter((course) => course.status === 'completed').length}/{yearCourses.length} {t('filters.completedSuffix')}</span>
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