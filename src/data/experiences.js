import experienceContent from '../i18n/locales/en/experiences.json'

const experienceDefinitions = [
  {
    "slug": "operations-intern",
    "company": "Globant",
    "startDate": {
      "year": 2026,
      "month": 8
    },
    "endDate": null,
    "status": "current",
    "workModel": "remote",
    "tools": [
      "Google Sheets",
      "Microsoft Excel",
      "Globant Internal Tools",
      "Python",
      "Power BI"
    ]
  },
  {
    "slug": "atlassian-engineer-intern",
    "company": "Globant",
    "startDate": {
      "year": 2025,
      "month": 12
    },
    "endDate": {
      "year": 2026,
      "month": 7
    },
    "status": "previous",
    "workModel": "hybrid",
    "metrics": {
      "ticketsResolved": 199
    },
    "tools": [
      "Jira",
      "Confluence",
      "Atlassian User Management",
      "Atlassian Assets",
      "Jira Automation",
      "Python",
      "Atlassian Administration API",
      "Atlassian Directory API",
      "REST APIs",
      "Google Sheets",
      "Loom",
      "Git"
    ]
  }
]

export const experiences = experienceDefinitions.map((experience) => ({
  ...experience,
  ...experienceContent.items[experience.slug],
  status: experienceContent.statuses[experience.status],
  location: experienceContent.labels.location
    .replace('{{location}}', experienceContent.items[experience.slug].location)
    .replace('{{workModel}}', experienceContent.workModels[experience.workModel]),
}))
