import { academicCourses } from '../data/academicCourses.js'
import { courses } from '../data/education.js'
import { experiences } from '../data/experiences.js'
import { projects } from '../data/projects.js'

const siteName = 'Nehuel Marcos'

const sections = {
  home: {
    label: 'NM',
    title: 'Home',
    description: 'Software developer and Computer Engineering student in Buenos Aires, focused on backend systems, automation and data. Explore my projects and experience.',
  },
  about: { label: 'A', title: 'About', description: 'Background, capabilities and profile of Nehuel Marcos.' },
  education: { label: 'E', title: 'Education', description: 'Degrees, courses and the Computer Engineering journey of Nehuel Marcos.' },
  experience: { label: 'X', title: 'Experience', description: 'Professional experience across operations, automation and software development.' },
  projects: { label: 'P', title: 'Projects', description: 'Software projects built for academic, professional and personal challenges.' },
  stack: { label: '</>', title: 'Technology Stack', description: 'Languages, frameworks, platforms and workflows used by Nehuel Marcos.' },
  other: { label: '+', title: 'Beyond Work', description: 'Interests and experiences beyond software engineering and university.' },
  contact: { label: '@', title: 'Contact', description: 'Ways to get in touch with Nehuel Marcos.' },
}

const escapeSvgText = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

export function createFavicon(label) {
  const fontSize = label.length > 2 ? 19 : label.length === 2 ? 24 : 30
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="15" fill="#c9f449"/><text x="32" y="33" fill="#182019" font-family="Arial,sans-serif" font-size="${fontSize}" font-weight="700" text-anchor="middle" dominant-baseline="middle">${escapeSvgText(label)}</text></svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

const findDetail = (route, slug, courseSlug) => {
  if (route === 'projects') return projects.find((item) => item.slug === slug)?.title
  if (route === 'experience') return experiences.find((item) => item.slug === slug)?.role
  if (route !== 'education') return null
  if (courseSlug) {
    return slug === 'computer-engineering'
      ? academicCourses.find((item) => item.slug === courseSlug)?.title
      : null
  }
  if (slug === 'computer-engineering') return 'Computer Engineering Journey'
  return courses.find((item) => item.slug === slug)?.title
}

export function getPageMetadata(page) {
  const [route, slug, courseSlug, extraSegment] = page.split('/')
  const section = sections[route]
  const detailTitle = !extraSegment && slug ? findDetail(route, slug, courseSlug) : null

  if (!section || (slug && !detailTitle) || extraSegment) {
    return {
      title: `Page Not Found | ${siteName}`,
      description: 'The requested page could not be found.',
      icon: createFavicon('!'),
    }
  }

  return {
    title: `${detailTitle || section.title} | ${siteName}`,
    description: detailTitle ? `${detailTitle} — ${section.description}` : section.description,
    icon: createFavicon(section.label),
  }
}