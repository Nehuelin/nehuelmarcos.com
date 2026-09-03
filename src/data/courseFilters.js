import { getUnlockedCourses } from './academicCourses.js'

const normalize = (value = '') => value.trim().toLowerCase()

export function filterAcademicCourses(courses, filters = {}) {
  const {
    query = '',
    year = 'all',
    status = 'all',
    technology = 'all',
    onlyWithDependencies = false,
    onlyWithProjects = false,
  } = filters

  const searchTerms = normalize(query)
    .split(/\s+/)
    .filter(Boolean)

  return courses.filter((course) => {
    const searchableText = [
      course.title,
      course.slug,
      course.description,
      ...(Array.isArray(course.topics) ? course.topics : []),
      ...(Array.isArray(course.technologies) ? course.technologies : []),
      ...(Array.isArray(course.prerequisites) ? course.prerequisites : []),
    ]
      .join(' ')
      .toLowerCase()

    const matchesText = searchTerms.length === 0 || searchTerms.some((term) => searchableText.includes(term))
    const matchesYear = year === 'all' || String(course.year) === String(year)
    const matchesStatus = status === 'all' || course.status === status

    const matchesTechnology = technology === 'all'
      || (Array.isArray(course.technologies) && course.technologies.some((item) => item.toLowerCase() === technology.toLowerCase()))

    const hasDependencies = Boolean(
      (Array.isArray(course.prerequisites) && course.prerequisites.length > 0)
      || (getUnlockedCourses(course.slug)?.length > 0)
    )

    const hasProjects = Array.isArray(course.projects) && course.projects.length > 0
    const matchesDependencies = !onlyWithDependencies || hasDependencies
    const matchesProjects = !onlyWithProjects || hasProjects

    return matchesText && matchesYear && matchesStatus && matchesTechnology && matchesDependencies && matchesProjects
  })
}
