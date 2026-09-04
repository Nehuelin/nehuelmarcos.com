import projectContent from '../i18n/locales/en/projects.json'

export const featuredProjectSlugs = [
  'jira-people-report-generator',
  'robot-live-dashboard',
  'municipal-help-center-frontend',
]

const projectDefinitions = [
  { slug: 'robot-live-dashboard', category: 'academic', teamProject: true, associatedTo: 'application-integration', previewImage: 'robodog.jpeg', stack: ['JavaScript', 'React', 'WebSockets', 'REST APIs'], sourceUrl: 'https://github.com/Nehuelin/robot-live-dashboard' },
  { slug: 'municipal-help-center-frontend', category: 'academic', teamProject: true, associatedTo: 'application-integration', previewImage: 'atencion-ciudadana.png', stack: ['JavaScript', 'React', 'REST APIs', 'Docker'], sourceUrl: 'https://github.com/SantiMussi/front-desarrollo-apps-2' },
  { slug: 'municipal-help-center-backend', category: 'academic', teamProject: true, associatedTo: 'application-integration', previewImage: '', stack: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL', 'Layered architecture', 'API integration'], sourceUrl: 'https://github.com/JuanmaGuida/Backend-DAMII' },
  { slug: 'mobile-auctions', category: 'academic', teamProject: true, associatedTo: 'mobile-application-development', previewImage: 'Vantage.png', stack: ['JavaScript', 'React Native', 'Expo', 'Mobile UI', 'Java', 'Spring Boot'], sourceUrl: 'https://github.com/SantiMussi/AppMovilSubastas' },
  { slug: 'mental-math-challenge', category: 'academic', associatedTo: 'mobile-application-development', previewImage: 'mental-math-challenge.png', stack: ['JavaScript', 'React Native', 'Expo', 'Mobile UI'], sourceUrl: 'https://github.com/Nehuelin/mental-math-challenge' },
  { slug: 'reaction-challenge', category: 'academic', associatedTo: 'mobile-application-development', previewImage: 'reaction-challenge.png', stack: ['Java', 'Android Studio', 'Mobile UI', 'Game Logic'], sourceUrl: 'https://github.com/Nehuelin/Reaction-Challenge-Mobile-App' },
  { slug: 'tic-tac-toe-mobile', category: 'academic', associatedTo: 'mobile-application-development', previewImage: 'tic-tac-toe.png', stack: ['Java', 'Android Studio', 'Mobile UI', 'Game Logic'], sourceUrl: 'https://github.com/Nehuelin/TicTacToe_mobile_app' },
  { slug: 'aerial-pursuit-simulation', category: 'academic', teamProject: true, associatedTo: 'modeling-and-simulation', previewImage: 'air-pursue-sim.png', stack: ['TypeScript', 'Simulation', 'Mathematical modeling', 'Data visualization'], sourceUrl: 'https://github.com/matiasfelau/persecucion-aerea' },
  { slug: 'szafrankus-store-frontend', category: 'academic', teamProject: true, associatedTo: 'interactive-applications', previewImage: 'szafrankus-front', stack: ['JavaScript', 'React', 'REST APIs', 'CSS'], sourceUrl: 'https://github.com/SantiMussi/Front-apis' },
  { slug: 'szafrankus-store-backend', category: 'academic', teamProject: true, associatedTo: 'interactive-applications', previewImage: '', stack: ['Java', 'Spring Boot', 'Spring Data JPA', 'JWT', 'Layered architecture'], sourceUrl: 'https://github.com/SantiMussi/TPO-APIs' },
  { slug: 'polyglot-persistence-system', category: 'academic', teamProject: true, associatedTo: 'data-engineering-ii', previewImage: 'bdd2.png', stack: ['Java', 'MongoDB', 'Neo4j', 'Redis', 'Cassandra'], sourceUrl: 'https://github.com/XxMrentxX/Base-de-datos-2' },
  { slug: 'sago-dental-management', category: 'academic', teamProject: true, associatedTo: 'professional-integration-seminar', previewImage: 'sago.png', stack: ['JavaScript', 'React', 'Firebase', 'Cloud Functions'], sourceUrl: 'https://github.com/Nehuelin/UADE-SIP-SAGO' },
  { slug: 'restaurant-ordering-system', category: 'academic', teamProject: true, associatedTo: 'object-oriented-design', previewImage: 'ood.png', stack: ['Java', 'UML', 'Design patterns', 'Jackson'], sourceUrl: 'https://github.com/marcosvillar4/TP-Proceso-desarollo-de-software' },
  { slug: 'snake-game', category: 'academic', teamProject: true, associatedTo: 'object-oriented-programming', previewImage: 'snake2.png', stack: ['Java', 'Swing', 'Object-oriented programming', 'File I/O'], sourceUrl: 'https://github.com/marcosvillar4/TP-OOP' },
  { slug: 'coderhouse-react-final', category: 'course', associatedTo: 'coderhouse-react-js', previewImage: 'ch-react.png', stack: ['JavaScript', 'React', 'Firebase', 'CSS'], sourceUrl: 'https://github.com/Nehuelin/ProyectoFinalMarcos' },
  { slug: 'coderhouse-backend-one', category: 'course', associatedTo: 'coderhouse-backend-i', previewImage: 'NehueNet.png', stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB'], sourceUrl: 'https://github.com/Nehuelin/ProyectoFinalBE1Coderhouse' },
  { slug: 'coderhouse-backend-two', category: 'course', associatedTo: 'coderhouse-backend-ii', previewImage: 'ch-backend2-png', stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB'], sourceUrl: 'https://github.com/Nehuelin/ProyectoFinalBE2Coderhouse' },
  { slug: 'electives-filtrator-2000', category: 'independent', associatedTo: 'personal-project', previewImage: 'filtrator-2000.png', stack: ['JavaScript', 'HTML', 'Data filtering', 'CSS'], sourceUrl: 'https://github.com/Nehuelin/UADE-ING-INFOR-Optativas-Filtrator-2000' },
  { slug: 'forecast-assignment-validator', category: 'independent', associatedTo: 'personal-project', previewImage: 'forecast-val.png', stack: ['Python', 'Data validation', 'Automation', 'Reporting'], sourceUrl: 'https://github.com/Nehuelin/forecast_assignment_validator' },
  { slug: 'jira-people-report-generator', category: 'independent', associatedTo: 'personal-project', previewImage: 'jira-report.png', stack: ['Python', 'Jira API', 'Data processing', 'Automation'], sourceUrl: 'https://github.com/Nehuelin/jira-people-report-generator' },
  { slug: 'nehuelmarcos-portfolio', category: 'independent', associatedTo: 'personal-project', previewImage: 'nehuelmarcos.png', stack: ['React', 'Vite', 'JavaScript', 'CSS'], sourceUrl: 'https://github.com/Nehuelin/nehuelmarcos.com' },
]

export const projects = projectDefinitions.map((project) => ({
  ...project,
  category: projectContent.categories[project.category],
  associatedTo: projectContent.associations[project.associatedTo],
  ...projectContent.items[project.slug],
}))
