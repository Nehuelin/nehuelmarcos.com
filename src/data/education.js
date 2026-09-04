import educationContent from '../i18n/locales/en/education.json'

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
  { slug: 'backend', provider: 'Coderhouse', status: 'upcoming', startsOn: { month: 9, day: 26 } },
]

export const education = educationDefinitions.map((item) => ({
  ...item,
  type: educationContent.types[item.type],
  title: educationContent.degrees[item.slug].title,
  period: educationContent.labels.period
    .replace('{{startYear}}', item.startYear)
    .replace('{{graduationDate}}', 'Dec 2027'),
  summary: educationContent.degrees[item.slug].summary,
  facts: [
    `${educationContent.labels.intermediateDegree.replace('{{degree}}', educationContent.qualifications[item.intermediateDegree])}`,
    educationContent.labels.courseProgress
      .replace('{{completed}}', item.completedCourses)
      .replace('{{total}}', item.totalCourses)
      .replace('{{percentage}}', Math.round((item.completedCourses / item.totalCourses) * 100)),
    educationContent.labels.gpa.replace('{{gpa}}', item.gpa),
  ],
}))

export const courses = courseDefinitions.map((item) => ({
  ...item,
  title: educationContent.courses[item.slug].title,
  status: item.status === 'completed' && item.completedYear
    ? educationContent.labels.completedIn.replace('{{year}}', item.completedYear)
    : item.status === 'upcoming'
      ? educationContent.labels.startingOn.replace('{{date}}', 'September 26th')
      : educationContent.statuses[item.status],
  topics: educationContent.courses[item.slug].topics,
  project: item.project ? {
    ...item.project,
    ...educationContent.projects[item.project.id],
  } : undefined,
}))

export const findEducation = (slug) => education.find((item) => item.slug === slug) || courses.find((item) => item.slug === slug)
