export const education = [
  {
    slug: 'computer-engineering',
    type: 'Bachelor’s degree',
    title: 'Computer Engineering',
    institution: 'Universidad Argentina de la Empresa (UADE)',
    period: '2023 — Expected Dec 2027',
    summary: 'A broad engineering program covering software, computing systems and the foundations behind modern technology.',
    facts: ['Intermediate degree: Computer Science Analyst', '38 of 52 courses completed (73%)', 'GPA: 7.24 / 10'],
    subjects: ['Python', 'SQL', 'ReactJS', 'Backend Development', 'AI Automation', 'HTML / CSS'],
  },
]

export const courses = [
  { slug: 'python', title: 'Python', provider: 'Coderhouse', status: 'Completed', topics: ['Programming fundamentals', 'Object-oriented programming', 'APIs and automation'] },
  { slug: 'web-development', title: 'Web Development', provider: 'Coderhouse', status: 'Completed', topics: ['HTML', 'CSS', 'Responsive design'] },
  { slug: 'javascript', title: 'JavaScript', provider: 'Coderhouse', status: 'Completed', topics: ['Modern JavaScript', 'DOM', 'Asynchronous programming'] },
  { slug: 'sql', title: 'SQL', provider: 'Coderhouse', status: 'Completed', topics: ['Relational modeling', 'Queries', 'Data management'] },
  { slug: 'reactjs', title: 'ReactJS', provider: 'Coderhouse', status: 'Completed', topics: ['Components', 'State management', 'Single-page applications'] },
  { slug: 'ai-automation', title: 'AI Automation', provider: 'Coderhouse', status: 'Completed', topics: ['AI workflows', 'Integrations', 'Process automation'] },
  { slug: 'backend', title: 'Backend I — Backend Development', provider: 'Coderhouse', status: 'Completed', topics: ['Node.js', 'Express', 'REST APIs'] },
]

export const findEducation = (slug) => education.find((item) => item.slug === slug) || courses.find((item) => item.slug === slug)