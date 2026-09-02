import { projects } from './projects.js'
import { experiences } from './experiences.js'
import { courses } from './education.js'
import { academicCourses } from './academicCourses.js'

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, '')

const technology = (id, name, description, context, aliases = [], experienceSlugs = [], logo = '', courseSlugs = []) => {
  const names = new Set([name, ...aliases].map(normalize))
  const mentionsTechnology = (value) => names.has(normalize(value))
  const inferredExperienceSlugs = experiences
    .filter((experience) => experience.tools.some(mentionsTechnology))
    .map((experience) => experience.slug)
  const inferredCourseSlugs = courses
    .filter((course) => [course.title, ...(course.topics || []), ...(course.technologies || [])].some(mentionsTechnology))
    .map((course) => course.slug)
  const inferredAcademicCourseSlugs = academicCourses
    .filter((course) => [...(course.technologies || []), ...(course.topics || [])].some(mentionsTechnology))
    .map((course) => course.slug)

  return {
  id,
  name,
  description,
  context,
  aliases: [name, ...aliases],
  experienceSlugs: [...new Set([...experienceSlugs, ...inferredExperienceSlugs])],
  logo,
  courseSlugs: [...new Set([...courseSlugs, ...inferredCourseSlugs])],
  academicCourseSlugs: inferredAcademicCourseSlugs,
  projects: projects.filter((project) => project.stack.some(mentionsTechnology)).map((project) => project.slug),
  }
}

export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    items: [
      technology('java', 'Java', 'Used to model object-oriented domains and build maintainable backend and Android applications.', 'Multiple projects', [], [], 'java-logo.png'),
      technology('spring-boot', 'Spring Boot', 'Used to build layered REST APIs and persistence-backed backend services.', 'Multiple projects', [], [], 'spring-logo.png'),
      technology('javascript-backend', 'JavaScript', 'Used across component-based web interfaces, mobile applications and Node.js services.', 'Multiple projects', ['JS'], [], 'javascript-logo.png', ['javascript', 'backend-i']),
      technology('node-js', 'Node.js', 'Used as the runtime for modular APIs and server-side commerce applications.', 'Multiple projects', [], [], 'nodejs-logo.png', ['react-js', 'backend-i', 'backend-ii']),
      technology('express', 'Express', 'Used to organize routes, request handling and middleware in Node.js APIs.', 'Multiple projects', ['Express.js'], [], '', ['backend-i', 'backend-ii']),
      technology('rest-apis', 'REST APIs', 'Used to define service contracts and connect frontend, backend and automation workflows.', 'Professional use', [], ['atlassian-engineer-intern'], '', ['react-js', 'backend-i', 'backend-ii']),
      technology('jwt', 'JWT', 'Used to protect backend endpoints and support role-aware application flows.', 'Academic experience', [], [], '', ['backend-ii']),
      technology('websockets', 'WebSockets', 'Used to deliver live operational events and telemetry to interactive dashboards.', 'Academic experience', ['Websockets'], [], '', ['backend-i']),
    ],
  },
  {
    id: 'frontend-mobile',
    title: 'Frontend & Mobile',
    items: [
      technology('javascript', 'JavaScript', 'Used across component-based web interfaces, mobile applications and Node.js services.', 'Multiple projects', ['JS'], [], 'javascript-logo.png', ['javascript', 'backend-i']),
      technology('typescript', 'TypeScript', 'Used for typed interactive modeling and simulation work.', 'Academic experience'),
      technology('react', 'React', 'Used to build data-driven interfaces with reusable components and predictable UI state.', 'Multiple projects', ['ReactJS'], [], 'react-logo.png', ['react-js']),
      technology('html', 'HTML', 'Used to create semantic, accessible structures for responsive web experiences.', 'Multiple projects', ['HTML & CSS'], [], '', ['web-development']),
      technology('css', 'CSS', 'Used to build responsive layouts and distinctive interface systems without a UI framework.', 'Multiple projects', ['HTML & CSS'], [], '', ['web-development']),
      technology('react-native', 'React Native', 'Used to translate reusable React patterns into touch-first mobile experiences.', 'Academic experience'),
      technology('expo', 'Expo', 'Used to develop and run React Native applications across mobile environments.', 'Academic experience'),
      technology('android', 'Android', 'Used to build native Java applications with touch interactions and game-state logic.', 'Academic experience', ['Android Studio', 'Android SDK']),
    ],
  },
  {
    id: 'data',
    title: 'Data & Persistence',
    items: [
      technology('sql', 'SQL', 'Used to query, validate and reason about structured operational and application data.', 'Currently developing', ['PostgreSQL', 'MySQL', 'Postgre'], [], '', ['sql']),
      technology('postgresql', 'PostgreSQL', 'Used as relational persistence behind Spring Boot application services.', 'Academic experience', ['Postgre'], [], 'postgre-logo.png', ['sql']),
      technology('mongodb', 'MongoDB', 'Used for document persistence in Node.js APIs and polyglot data systems.', 'Multiple projects', [], [], 'mongodb-logo.png', ['backend-i', 'backend-ii']),
      technology('firebase', 'Firebase', 'Used for hosted application data and cloud-backed web workflows.', 'Multiple projects', ['Google Firebase'], [], '', ['react-js']),
      technology('redis', 'Redis', 'Used as the key-value component of a polyglot persistence architecture.', 'Academic experience'),
      technology('neo4j', 'Neo4j', 'Used to represent relationship-oriented data in a polyglot persistence system.', 'Academic experience'),
      technology('cassandra', 'Cassandra', 'Used to explore wide-column storage within a multi-database application.', 'Academic experience'),
    ],
  },
  {
    id: 'automation-operations',
    title: 'Automation & Operations',
    items: [
      technology('python', 'Python', 'Used to automate validation, reporting and Atlassian administration workflows.', 'Professional use', [], ['operations-intern', 'atlassian-engineer-intern'], 'python-logo.png', ['python']),
      technology('jira', 'Jira', 'Used to administer projects, workflows, permissions and technical support requests.', 'Professional use', ['Jira API'], ['atlassian-engineer-intern'], 'jira-logo.png'),
      technology('confluence', 'Confluence', 'Used to administer spaces and create durable technical and operational documentation.', 'Professional use', [], ['atlassian-engineer-intern']),
      technology('atlassian-apis', 'Atlassian APIs', 'Used to automate user-management, governance and reporting tasks that lack native workflows.', 'Professional use', ['Atlassian Administration API', 'Atlassian Directory API', 'Jira API'], ['atlassian-engineer-intern']),
      technology('google-sheets', 'Google Sheets', 'Used for operational records, collaborative analysis and recurring reporting.', 'Professional use', [], ['operations-intern', 'atlassian-engineer-intern']),
      technology('microsoft-excel', 'Microsoft Excel', 'Used to analyze operational data and support financial and KPI follow-up.', 'Professional use', [], ['operations-intern']),
      technology('power-bi', 'Power BI', 'Used to support data-driven operational reporting and visibility.', 'Professional use', ['PowerBI'], ['operations-intern']),
    ],
  },
  {
    id: 'practices',
    title: 'Engineering Practices',
    items: [
      technology('docker', 'Docker', 'Used to package services and coordinate application integration environments.', 'Multiple projects', [], [], 'docker-logo.png'),
      technology('git-github', 'Git and GitHub', 'Used for version control, collaboration and maintaining project history.', 'Professional use', ['Git', 'GitHub', 'Git / GitHub'], ['atlassian-engineer-intern'], 'github-logo.png'),
      technology('uml', 'UML', 'Used to communicate domain structure, responsibilities and object interactions before implementation.', 'Academic experience'),
      technology('design-patterns', 'Design patterns', 'Used to keep domain models extensible through explicit, reusable object collaborations.', 'Academic experience'),
      technology('layered-architecture', 'Layered architecture', 'Used to separate API, business and persistence responsibilities in backend services.', 'Multiple projects'),
      technology('oop', 'Object-oriented programming', 'Used to model behavior and responsibilities in Java domains, games and services.', 'Multiple projects'),
      technology('api-integration', 'API integration', 'Used to connect independent services, interfaces and operational automation reliably.', 'Professional use', [], ['atlassian-engineer-intern']),
    ],
  },
]

export const currentFocus = [
  'Java + Spring Boot',
  'Python automation',
  'Node.js APIs',
  'SQL and persistence',
  'Docker and integrations',
]

export const workflows = [
  { title: 'Backend systems', path: 'Java → Spring Boot → PostgreSQL → Docker' },
  { title: 'Automation tools', path: 'Python → APIs → Validation → Reporting' },
  { title: 'Interactive applications', path: 'React → REST APIs / WebSockets → Responsive interfaces' },
]