import i18n from '../i18n'

const educationDefinitions = [
  { slug: 'computer-engineering', type: 'bachelors-degree', institution: 'Universidad Argentina de la Empresa (UADE)', startYear: 2023, expectedGraduation: { year: 2027, month: 12 }, intermediateDegree: 'computer-science-analyst', completedCourses: 38, totalCourses: 52, gpa: 7.24 },
]

const courseDefinitions = [
  { slug: 'python', provider: 'Coderhouse', status: 'completed', completedYear: 2021 },
  { slug: 'web-development', provider: 'Coderhouse', status: 'completed', completedYear: 2021 },
  { slug: 'javascript', provider: 'Coderhouse', status: 'completed', completedYear: 2022 },
  { slug: 'sql', provider: 'Coderhouse', status: 'completed', completedYear: 2022 },
  { slug: 'react-js', provider: 'Coderhouse', status: 'completed', completedYear: 2023, project: { id: 'react-ecommerce', github: 'https://github.com/Nehuelin/ProyectoFinalMarcos', demo: 'https://proyecto-final-marcos.vercel.app/' } },
  { slug: 'ai-automation', provider: 'Coderhouse', status: 'completed' },
  { slug: 'backend-i', provider: 'Coderhouse', status: 'completed', completedYear: 2026, certificate: { url: 'https://app.coderhouse.com/certificates/CERT-MS4P29S7-00E3B1E2' }, project: { id: 'nehue-net-backend', github: 'https://github.com/Nehuelin/ProyectoFinalBE1Coderhouse' } },
  { slug: 'backend-ii', provider: 'Coderhouse', status: 'in-progress', project: { id: 'park-event-solutions', status: 'in-progress', github: 'https://github.com/Nehuelin/ProyectoFinalBE2Coderhouse' } },
  { slug: 'backend-iii', provider: 'Coderhouse', status: 'upcoming', startsOn: { month: 9, day: 26 } },
]

export const education = educationDefinitions.map((item) => ({
  ...item,
  get type() { return i18n.t(`education:types.${item.type}`) },
  get title() { return i18n.t(`education:degrees.${item.slug}.title`, { defaultValue: item.slug }) },
  get period() {
    const graduationDate = i18n.language.startsWith('es') ? 'dic 2027' : 'Dec 2027'
    return i18n.t('education:labels.period', { startYear: item.startYear, graduationDate })
  },
  get summary() { return i18n.t(`education:degrees.${item.slug}.summary`, { defaultValue: '' }) },
  get facts() { return [
    i18n.t('education:labels.intermediateDegree', { degree: i18n.t(`education:qualifications.${item.intermediateDegree}`) }),
    i18n.t('education:labels.courseProgress', { completed: item.completedCourses, total: item.totalCourses, percentage: Math.round((item.completedCourses / item.totalCourses) * 100) }),
    i18n.t('education:labels.gpa', { gpa: item.gpa }),
  ] },
}))

export const courses = courseDefinitions.map((item) => ({
  ...item,
  get title() { return i18n.t(`education:courses.${item.slug}.title`, { defaultValue: item.slug }) },
  get status() {
    if (item.status === 'completed' && item.completedYear) return i18n.t('education:labels.completedIn', { year: item.completedYear })
    if (item.status === 'upcoming') {
      const date = i18n.language.startsWith('es') ? '26 de septiembre' : 'September 26th'
      return i18n.t('education:labels.startingOn', { date })
    }
    return i18n.t(`education:statuses.${item.status}`)
  },
  get topics() { return i18n.t(`education:courses.${item.slug}.topics`, { returnObjects: true, defaultValue: [] }) },
  get project() {
    if (!item.project) return undefined
    return {
      ...item.project,
      title: i18n.t(`education:projects.${item.project.id}.title`, { defaultValue: item.project.id }),
      description: i18n.t(`education:projects.${item.project.id}.description`, { defaultValue: '' }),
    }
  },
}))

export const findEducation = (slug) => education.find((item) => item.slug === slug) || courses.find((item) => item.slug === slug)
