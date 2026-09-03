export const education = [
  {
    slug: 'computer-engineering',
    type: 'Bachelor’s degree',
    title: 'Computer Engineering',
    institution: 'Universidad Argentina de la Empresa (UADE)',
    period: '2023 — Expected Dec 2027',
    summary: 'A broad engineering program covering software, computing systems and the foundations behind modern technology.',
    facts: ['Intermediate degree: Computer Science Analyst', '38 of 52 courses completed (73%)', 'Current GPA: 7.24'],
  },
]

export const courses = [
  {
    slug: 'python',
    title: 'Python',
    provider: 'Coderhouse',
    status: 'Completed (2021)',
    topics: [
      'Python fundamentals and control flow',
      'Data structures and collections',
      'Functions and modular programming',
      'Debugging and exception handling',
      'Object-oriented programming',
      'Inheritance, encapsulation, and polymorphism',
      'Modules, packages, and file handling',
      'JSON and CSV data processing',
      'Git and GitHub workflows',
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    provider: 'Coderhouse',
    status: 'Completed (2021)',
    topics: [
      'HTML5 and semantic markup',
      'CSS styling and the Box Model',
      'Flexbox and CSS Grid',
      'Responsive design and media queries',
      'Bootstrap',
      'SCSS and reusable styles',
      'CSS animations and transforms',
      'Git and GitHub workflows',
      'SEO fundamentals',
      'Web hosting, domains, and servers',
      'Building responsive static websites'
    ]
  },
  {
    slug: 'javascript',
    title: 'JavaScript',
    provider: 'Coderhouse',
    status: 'Completed (2022)',
    topics: [
      'JavaScript fundamentals and control flow',
      'Functions, objects, and arrays',
      'Array methods and higher-order functions',
      'DOM manipulation',
      'Event handling',
      'JSON and Local Storage',
      'Advanced JavaScript syntax',
      'Libraries and third-party tools',
      'Asynchronous programming and promises',
      'Fetch API and AJAX',
      'External API consumption',
      'Building interactive web applications'
    ]
  },
  {
    slug: 'sql',
    title: 'SQL',
    provider: 'Coderhouse',
    status: 'Completed (2022)',
    topics: [
      'Relational database design and normalization',
      'PostgreSQL',
      'DDL and DML',
      'SQL queries and advanced filtering',
      'Joins and multi-table queries',
      'Aggregation, GROUP BY, and HAVING',
      'Subqueries and CTEs',
      'Window functions',
      'CASE WHEN and date manipulation',
      'Transactions and data integrity',
      'Query optimization and indexes',
      'Execution plans with EXPLAIN',
      'JSONB and full-text search',
      'Users, roles, and permissions',
      'Data analysis and business reporting'
    ]
  },
  {
    slug: 'react-js',
    title: 'React JS',
    provider: 'Coderhouse',
    status: 'Completed (2023)',
    topics: [
      'React fundamentals and component-based architecture',
      'JSX and functional components',
      'Props and reusable components',
      'State management with useState',
      'Side effects and lifecycle with useEffect',
      'Refs with useRef',
      'Event handling in React',
      'Asynchronous programming and promises',
      'API consumption with Fetch',
      'REST API fundamentals',
      'Dynamic rendering and list rendering',
      'React Router and SPA navigation',
      'Dynamic routes and useParams',
      'Context API and global state management',
      'Custom Providers',
      'React rendering and optimization concepts',
      'Firebase and Firestore integration',
      'Firestore collections, documents, and queries',
      'Vite, Node.js, and NPM',
      'Building complete single-page applications'
    ],
    project: {
      title: 'React E-Commerce',
      description: 'E-commerce SPA built with React, React Router, Context API, and Firebase, featuring product browsing, product details, cart management, and checkout.',
      github: 'https://github.com/Nehuelin/ProyectoFinalMarcos',
      demo: 'https://proyecto-final-marcos.vercel.app/'
    }
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    provider: 'Coderhouse',
    status: 'Completed',

    topics: [
      'AI automation and autonomous agents with n8n',
      'Agentic workflows and ReAct reasoning',
      'System prompt design and LLM selection',
      'Tool calling, guardrails, and human-in-the-loop workflows',
      'Multi-agent systems and specialized agents',
      'Manager-Worker and Planner-Executor architectures',
      'Sub-workflows and modular agent design',
      'Memory, context, and persistence',
      'Semantic search and shared agent memory',
      'Webhooks and third-party integrations',
      'RAG and document knowledge bases with LlamaCloud',
      'Voice AI with Whisper and ElevenLabs',
      'Industry-specific agentic workflows',
      'Automated evaluation and AI-as-a-Judge',
      'Prompt evaluation and continuous improvement',
      'AI governance, security, and privacy',
      'Token cost management and optimization',
      'Observability, logging, and agent auditing',
      'Production-ready agentic system design'
    ]
  },
  {
    slug: 'backend-i',
    title: 'Backend I - Node.js, APIs & Databases',
    provider: 'Coderhouse',
    status: 'Completed (2026)',
    certificate: {
      url: 'https://app.coderhouse.com/certificates/CERT-MS4P29S7-00E3B1E2',
      label: 'View certificate'
    },

    topics: [
      'Node.js and server-side JavaScript',
      'Asynchronous programming',
      'REST APIs and HTTP',
      'Express.js and routing',
      'Controllers and request handling',
      'Validation and centralized error handling',
      'Handlebars and server-side rendering',
      'WebSockets and Socket.IO',
      'MongoDB and NoSQL data modeling',
      'CRUD operations',
      'Mongoose schemas, models, and validation',
      'Document relationships and population',
      'Pagination, filtering, and sorting',
      'MongoDB query optimization',
      'Data access with DAO patterns',
      'Environment configuration with dotenv'
    ],

    project: {
      title: 'NehueNet E-Commerce Backend',
      description: 'E-commerce backend built with Node.js, Express, MongoDB, Mongoose, Handlebars, and Socket.IO. Includes REST APIs for products and carts, persistent data storage, filtering and pagination, server-rendered views, validation, centralized error handling, and real-time product updates.',
      github: 'https://github.com/Nehuelin/ProyectoFinalBE1Coderhouse'
    }
  },
  {
    slug: 'backend-ii',
    title: 'Backend II - Design & Architecture',
    provider: 'Coderhouse',
    status: 'In Progress',

    topics: [
      'Layered backend architecture',
      'Controllers, services, repositories, and DAOs',
      'DTOs and separation of concerns',
      'Dependency injection and decoupling',
      'JWT authentication and secure cookies',
      'Passport.js and OAuth',
      'Password hashing with bcrypt',
      'Role-based access control (RBAC)',
      'Authorization and protected routes',
      'Business rules and domain validation',
      'Centralized error handling',
      'MongoDB and Mongoose',
      'REST API design',
      'Secure and maintainable backend development'
    ],

    project: {
      title: 'ParkEvent Solutions',
      status: 'In Progress',
      description:
        'Backend API for managing events within a theme park, built with Node.js, Express, MongoDB, and Mongoose using a layered architecture. Currently implements user authentication with JWT and Passport, GitHub OAuth, role-based authorization, event and category management, business rules, DTOs, repositories, DAOs, and centralized error handling.',
      github: 'https://github.com/Nehuelin/ProyectoFinalBE2Coderhouse'
    }
  },
  { slug: 'backend', title: 'Backend III — Testing & Scalability', provider: 'Coderhouse', status: 'Starting on September 26th', topics: ['TBD'] },
]

export const findEducation = (slug) => education.find((item) => item.slug === slug) || courses.find((item) => item.slug === slug)