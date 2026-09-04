import skillContent from '../i18n/locales/en/stack.json'
import { projects } from './projects.js'
import { experiences } from './experiences.js'
import { courses } from './education.js'
import { academicCourses } from './academicCourses.js'

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

const technology = ({ id, context, aliases = [], experienceSlugs = [], logo = '', courseSlugs = [] }) => {
  const { name, description } = skillContent.technologies[id]
  const names = new Set([name, ...aliases].map(normalize))
  const mentionsTechnology = (value) => names.has(normalize(value))
  const inferredExperienceSlugs = experiences.filter((experience) => experience.tools.some(mentionsTechnology)).map((experience) => experience.slug)
  const inferredCourseSlugs = courses.filter((course) => [course.title, ...(course.topics || []), ...(course.technologies || [])].some(mentionsTechnology)).map((course) => course.slug)
  const inferredAcademicCourseSlugs = academicCourses.filter((course) => [...(course.technologies || []), ...(course.topics || [])].some(mentionsTechnology)).map((course) => course.slug)

  return {
    id,
    name,
    description,
    context: skillContent.contexts[context],
    aliases: [name, ...aliases],
    experienceSlugs: [...new Set([...experienceSlugs, ...inferredExperienceSlugs])],
    logo,
    courseSlugs: [...new Set([...courseSlugs, ...inferredCourseSlugs])],
    academicCourseSlugs: inferredAcademicCourseSlugs,
    projects: projects.filter((project) => project.stack.some(mentionsTechnology)).map((project) => project.slug),
  }
}

const skillDefinitions = [
  ['backend', [
    ['java', 'multiple-projects', [], [], 'java-logo.png'], 
    ['spring-boot', 'multiple-projects', [], [], 'spring-logo.png'], 
    ['javascript-backend', 'multiple-projects', ['JS'], [], 'javascript-logo.png', ['javascript', 'backend-i']], 
    ['node-js', 'multiple-projects', [], [], 'nodejs-logo.png', ['react-js', 'backend-i', 'backend-ii']], 
    ['express', 'multiple-projects', ['Express.js'], [], '', ['backend-i', 'backend-ii']], 
    ['rest-apis', 'professional', [], ['atlassian-engineer-intern'], '', ['react-js', 'backend-i', 'backend-ii']], 
    ['jwt', 'academic', [], [], '', ['backend-ii']], 
    ['websockets', 'academic', ['Websockets'], [], '', ['backend-i']],
  ]],
  ['frontend-mobile', [
    ['javascript', 'multiple-projects', ['JS'], [], 'javascript-logo.png', ['javascript', 'backend-i']], 
    ['typescript', 'academic'], 
    ['react', 'multiple-projects', ['ReactJS'], [], 'react-logo.png', ['react-js']], 
    ['html', 'multiple-projects', ['HTML & CSS'], [], '', ['web-development']], 
    ['css', 'multiple-projects', ['HTML & CSS'], [], '', ['web-development']], 
    ['react-native', 'academic'], 
    ['expo', 'academic'], 
    ['android', 'academic', ['Android Studio', 'Android SDK']]
  ]],
  ['data', [
    ['sql', 'developing', ['PostgreSQL', 'MySQL', 'Postgre'], [], '', ['sql']], 
    ['postgresql', 'academic', ['Postgre'], [], 'postgre-logo.png', ['sql']], 
    ['mongodb', 'multiple-projects', [], [], 'mongodb-logo.png', ['backend-i', 'backend-ii']], 
    ['firebase', 'multiple-projects', ['Google Firebase'], [], '', ['react-js']], 
    ['redis', 'academic'], ['neo4j', 'academic'], ['cassandra', 'academic']
  ]],
  ['automation-operations', [
    ['python', 'professional', [], ['operations-intern', 'atlassian-engineer-intern'], 'python-logo.png', ['python']], 
    ['jira', 'professional', ['Jira API'], ['atlassian-engineer-intern'], 'jira-logo.png'], 
    ['confluence', 'professional', [], ['atlassian-engineer-intern']], 
    ['atlassian-apis', 'professional', ['Atlassian Administration API', 'Atlassian Directory API', 'Jira API'], ['atlassian-engineer-intern']], 
    ['google-sheets', 'professional', [], ['operations-intern', 'atlassian-engineer-intern']], 
    ['microsoft-excel', 'professional', [], ['operations-intern']], 
    ['power-bi', 'professional', ['PowerBI'], ['operations-intern']]
  ]],
  ['practices', [
    ['docker', 'multiple-projects', [], [], 'docker-logo.png'], 
    ['git-github', 'professional', ['Git', 'GitHub', 'Git / GitHub'], ['atlassian-engineer-intern'], 'github-logo.png'], 
    ['uml', 'academic'], 
    ['design-patterns', 'academic'], 
    ['layered-architecture', 'multiple-projects'], 
    ['oop', 'multiple-projects'], 
    ['api-integration', 'professional', [], ['atlassian-engineer-intern']]
  ]],
]

export const skillGroups = skillDefinitions.map(([id, items]) => ({
  id,
  title: skillContent.groups[id],
  items: items.map(([technologyId, context, aliases, experienceSlugs, logo, courseSlugs]) => technology({ id: technologyId, context, aliases, experienceSlugs, logo, courseSlugs })),
}))

export const currentFocus = ['java-spring', 'python-automation', 'node-apis', 'sql-persistence', 'docker-integrations'].map((id) => skillContent.focus[id])

export const workflows = ['backend', 'automation', 'interactive'].map((id) => ({ id, ...skillContent.workflows[id] }))
