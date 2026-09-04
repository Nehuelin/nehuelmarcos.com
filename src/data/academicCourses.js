import i18n from '../i18n'

const courseDefinitions = [
  {
    "slug": "fundamentals-of-computer-science",
    "year": 1,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Python"
    ],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "information-systems-i",
    "year": 1,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "critical-thinking-and-communication",
    "year": 1,
    "semester": 1,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "systems-theory",
    "year": 1,
    "semester": 1,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "algebra-and-geometry",
    "year": 1,
    "semester": 1,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "algorithms-and-data-structures-i",
    "year": 1,
    "semester": 2,
    "status": "completed",
    "technologies": [
      "Python"
    ],
    "prerequisites": [
      "fundamentals-of-computer-science"
    ],
    "projects": []
  },
  {
    "slug": "systems-of-representation",
    "year": 1,
    "semester": 2,
    "status": "completed",
    "technologies": [
      "AutoCAD"
    ],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "fundamentals-of-chemistry",
    "year": 1,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "computer-architecture",
    "year": 1,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "discrete-mathematics",
    "year": 1,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "linear-algebra",
    "year": 1,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [
      "algebra-and-geometry"
    ],
    "projects": []
  },
  {
    "slug": "algorithms-and-data-structures-ii",
    "year": 2,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Java"
    ],
    "prerequisites": [
      "algorithms-and-data-structures-i"
    ],
    "projects": []
  },
  {
    "slug": "information-systems-ii",
    "year": 2,
    "semester": 1,
    "status": "completed",
    "technologies": [],
    "prerequisites": [
      "information-systems-i"
    ],
    "projects": []
  },
  {
    "slug": "operating-systems",
    "year": 2,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Linux"
    ],
    "prerequisites": [
      "computer-architecture"
    ],
    "projects": []
  },
  {
    "slug": "physics-i",
    "year": 2,
    "semester": 1,
    "status": "completed",
    "technologies": [],
    "prerequisites": [
      "linear-algebra"
    ],
    "projects": []
  },
  {
    "slug": "calculus-i",
    "year": 2,
    "semester": 1,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "algorithm-design-and-analysis",
    "year": 2,
    "semester": 2,
    "status": "completed",
    "technologies": [
      "Pseudo-code"
    ],
    "prerequisites": [
      "algorithms-and-data-structures-ii"
    ],
    "projects": []
  },
  {
    "slug": "object-oriented-programming",
    "year": 2,
    "semester": 2,
    "status": "completed",
    "technologies": [
      "Java"
    ],
    "prerequisites": [
      "algorithms-and-data-structures-i"
    ],
    "projects": [
      {
        "id": "snake-ii",
        "technologies": [
          "Java"
        ],
        "url": "https://github.com/marcosvillar4/TP-OOP"
      }
    ]
  },
  {
    "slug": "fundamentals-of-telecommunications",
    "year": 2,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "data-engineering-i",
    "year": 2,
    "semester": 2,
    "status": "completed",
    "technologies": [
      "SQL"
    ],
    "prerequisites": [
      "discrete-mathematics"
    ],
    "projects": []
  },
  {
    "slug": "calculus-ii",
    "year": 2,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [
      "calculus-i"
    ],
    "projects": []
  },
  {
    "slug": "object-oriented-design",
    "year": 3,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "StarUML",
      "Java"
    ],
    "prerequisites": [
      "object-oriented-programming"
    ],
    "projects": [
      {
        "id": "restaurant-order-app",
        "technologies": [
          "Java",
          "JSON"
        ],
        "url": "https://github.com/marcosvillar4/TP-Proceso-desarollo-de-software"
      }
    ]
  },
  {
    "slug": "professional-integration-seminar",
    "year": 3,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Figma",
      "Miro",
      "Trello",
      "GitHub",
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Google Firebase"
    ],
    "prerequisites": [
      "algorithms-and-data-structures-ii",
      "information-systems-ii",
      "data-engineering-i"
    ],
    "projects": [
      {
        "id": "dental-practice-management-system-sago",
        "technologies": [
          "ReactJS",
          "Google Firebase",
          "HTML",
          "CSS"
        ],
        "url": "https://github.com/Nehuelin/UADE-SIP-SAGO"
      }
    ]
  },
  {
    "slug": "data-communications-and-networks",
    "year": 3,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Cisco Packet Tracer"
    ],
    "prerequisites": [
      "fundamentals-of-telecommunications"
    ],
    "projects": []
  },
  {
    "slug": "data-engineering-ii",
    "year": 3,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Java",
      "Hadoop",
      "MongoDB",
      "CassandraDB",
      "Neo4j",
      "Redis"
    ],
    "prerequisites": [
      "data-engineering-i"
    ],
    "projects": [
      {
        "id": "e-commerce-in-java-s-terminal",
        "technologies": [
          "Java",
          "MongoDB",
          "Cassandra",
          "Redis",
          "Neo4j"
        ],
        "url": "https://github.com/XxMrentxX/Base-de-datos-2"
      }
    ]
  },
  {
    "slug": "general-statistics",
    "year": 3,
    "semester": 1,
    "status": "completed",
    "technologies": [],
    "prerequisites": [
      "calculus-i"
    ],
    "projects": []
  },
  {
    "slug": "english-exam",
    "year": 3,
    "semester": 1,
    "status": "completed",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "interactive-applications",
    "year": 3,
    "semester": 2,
    "status": "completed",
    "technologies": [
      "Java",
      "Spring Boot",
      "Hibernate",
      "JavaScript",
      "ReactJS",
      "Redux",
      "SQL"
    ],
    "prerequisites": [
      "object-oriented-programming"
    ],
    "projects": [
      {
        "id": "szafrankus-clothing-backend",
        "technologies": [
          "Java",
          "Spring Boot",
          "SQL"
        ],
        "url": "https://github.com/SantiMussi/TPO-APIs"
      },
      {
        "id": "szafrankus-clothing-frontend",
        "technologies": [
          "JavaScript",
          "ReactJS"
        ],
        "url": "https://github.com/SantiMussi/Front-apis"
      }
    ]
  },
  {
    "slug": "software-engineering",
    "year": 3,
    "semester": 2,
    "status": "completed",
    "technologies": [
      "Python"
    ],
    "prerequisites": [
      "information-systems-ii"
    ],
    "projects": []
  },
  {
    "slug": "physics-ii",
    "year": 3,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [
      "physics-i"
    ],
    "projects": []
  },
  {
    "slug": "theory-of-computation",
    "year": 3,
    "semester": 2,
    "status": "completed",
    "technologies": [
      "Java"
    ],
    "prerequisites": [
      "discrete-mathematics",
      "algorithm-design-and-analysis"
    ],
    "projects": [
      {
        "id": "automaton-machine-codes",
        "technologies": [
          "Java"
        ],
        "url": "https://github.com/Nehuelin/Automaton-Sanctuary"
      }
    ]
  },
  {
    "slug": "applied-statistics",
    "year": 3,
    "semester": 2,
    "status": "completed",
    "technologies": [],
    "prerequisites": [
      "general-statistics"
    ],
    "projects": []
  },
  {
    "slug": "application-development-i",
    "year": 4,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Android Studio",
      "React Native",
      "Java",
      "JavaScript"
    ],
    "prerequisites": [
      "object-oriented-design"
    ],
    "projects": [
      {
        "id": "tic-tac-toe-mobile-app",
        "technologies": [
          "Java",
          "Android Studio"
        ],
        "url": "https://github.com/Nehuelin/TicTacToe_mobile_app"
      },
      {
        "id": "math-reaction-mobile-app",
        "technologies": [
          "JavaScript",
          "React Native"
        ],
        "url": "https://github.com/Nehuelin/Reaction-Challenge-Mobile-App"
      },
      {
        "id": "vantage-live-auction-app",
        "technologies": [
          "Java",
          "Spring Boot",
          "SQL",
          "JavaScript",
          "React Native"
        ],
        "url": "https://github.com/SantiMussi/AppMovilSubastas"
      }
    ]
  },
  {
    "slug": "it-project-management",
    "year": 4,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Jira"
    ],
    "prerequisites": [
      "information-systems-ii"
    ],
    "projects": []
  },
  {
    "slug": "data-science",
    "year": 4,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Google Cloud"
    ],
    "prerequisites": [
      "applied-statistics",
      "data-engineering-ii"
    ],
    "projects": []
  },
  {
    "slug": "information-security-and-integrity",
    "year": 4,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "OWASP"
    ],
    "prerequisites": [
      "data-communications-and-networks"
    ],
    "projects": []
  },
  {
    "slug": "modeling-and-simulation",
    "year": 4,
    "semester": 1,
    "status": "completed",
    "technologies": [
      "Python"
    ],
    "prerequisites": [
      "calculus-ii"
    ],
    "projects": [
      {
        "id": "aerial-pursuit-simulation",
        "technologies": [
          "TypeScript",
          "HTML",
          "CSS"
        ],
        "url": "https://github.com/matiasfelau/persecucion-aerea"
      }
    ]
  },
  {
    "slug": "application-integration",
    "year": 4,
    "semester": 2,
    "status": "in-progress",
    "technologies": [
      "JavaScript",
      "ReactJS",
      "Java",
      "Spring Boot",
      "SQL",
      "Docker"
    ],
    "prerequisites": [
      "interactive-applications",
      "object-oriented-design"
    ],
    "projects": [
      {
        "id": "uade-city-app-module-ii-citizen-help-frontend",
        "technologies": [
          "JavaScript",
          "ReactJS"
        ],
        "url": "https://github.com/SantiMussi/front-desarrollo-apps-2"
      },
      {
        "id": "uade-city-app-module-ii-citizen-help-backend",
        "technologies": [
          "Java",
          "Spring Boot",
          "SQL"
        ],
        "url": "https://github.com/JuanmaGuida/Backend-DAMII"
      },
      {
        "id": "uade-city-app-module-ii-citizen-help-docker-infrastructure",
        "technologies": [
          "Docker",
          "AWS"
        ],
        "url": "https://github.com/AgustinNari/DA2-m2-infra"
      }
    ]
  },
  {
    "slug": "it-project-evaluation",
    "year": 4,
    "semester": 2,
    "status": "in-progress",
    "technologies": [
      "Excel"
    ],
    "prerequisites": [
      "general-statistics"
    ],
    "projects": []
  },
  {
    "slug": "artificial-intelligence",
    "year": 4,
    "semester": 2,
    "status": "in-progress",
    "technologies": [
      "Python"
    ],
    "prerequisites": [
      "applied-statistics"
    ],
    "projects": []
  },
  {
    "slug": "technology-and-environment",
    "year": 4,
    "semester": 2,
    "status": "in-progress",
    "technologies": [],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "supervised-professional-practice",
    "year": 4,
    "semester": 2,
    "status": "pending",
    "technologies": [],
    "prerequisites": [
      "38 completed courses"
    ],
    "projects": []
  },
  {
    "slug": "application-architecture",
    "year": 5,
    "semester": 1,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [
      "information-systems-ii"
    ],
    "projects": []
  },
  {
    "slug": "technology-trends",
    "year": 5,
    "semester": 1,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "final-engineering-project",
    "year": 5,
    "semester": 1,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [
      "38 completed courses"
    ],
    "projects": []
  },
  {
    "slug": "software-quality",
    "year": 5,
    "semester": 1,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [
      "software-engineering"
    ],
    "projects": []
  },
  {
    "slug": "technology-business",
    "year": 5,
    "semester": 2,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "technology-and-innovation",
    "year": 5,
    "semester": 2,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "information-technology-law",
    "year": 5,
    "semester": 2,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "bioinformatics",
    "year": 4,
    "semester": 2,
    "status": "in-progress",
    "technologies": [
      "Linux",
      "NCBI",
      "BLAST",
      "Pfam",
      "InterProScan"
    ],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "elective-2",
    "year": 5,
    "semester": 1,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [],
    "projects": []
  },
  {
    "slug": "elective-3",
    "year": 5,
    "semester": 2,
    "status": "pending",
    "technologies": [
      "TBD"
    ],
    "prerequisites": [],
    "projects": []
  }
]

export const academicCourses = courseDefinitions.map((course) => ({
  ...course,
  get title() { return i18n.t(`academic:courses.${course.slug}.title`, { defaultValue: course.slug }) },
  get description() { return i18n.t(`academic:courses.${course.slug}.description`, { defaultValue: '' }) },
  get topics() { return i18n.t(`academic:courses.${course.slug}.topics`, { returnObjects: true, defaultValue: [] }) },
  get projects() {
    return course.projects.map((project) => ({
      ...project,
      title: i18n.t(`academic:courseProjects.${project.id}.title`, { defaultValue: project.id }),
      description: i18n.t(`academic:courseProjects.${project.id}.description`, { defaultValue: '' }),
    }))
  },
}))

export const degree = {
  get title() { return i18n.t('academic:degree.title') },
  get university() { return i18n.t('academic:degree.university') },
  get period() { return i18n.t('academic:degree.period') },
  get status() { return i18n.t('academic:degree.status') },
  completed: academicCourses.filter((course) => course.status === 'completed').length,
  total: academicCourses.length,
}

export const findAcademicCourse = (slug) => academicCourses.find((item) => item.slug === slug)
export const getUnlockedCourses = (slug) => academicCourses.filter((item) => item.prerequisites.includes(slug))

export const getCourseRelations = (slug) => {
  const ancestors = new Set()
  const descendants = new Set()
  const visitPrerequisites = (id) => findAcademicCourse(id)?.prerequisites.forEach((parent) => {
    if (!ancestors.has(parent)) { ancestors.add(parent); visitPrerequisites(parent) }
  })
  const visitUnlocked = (id) => getUnlockedCourses(id).forEach((next) => {
    if (!descendants.has(next.slug)) { descendants.add(next.slug); visitUnlocked(next.slug) }
  })
  visitPrerequisites(slug)
  visitUnlocked(slug)
  return { ancestors, descendants }
}
