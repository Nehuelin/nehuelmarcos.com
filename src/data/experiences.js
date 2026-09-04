import i18n from '../i18n'

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
  statusCode: experience.status,
  get role() { return i18n.t(`experiences:items.${experience.slug}.role`) },
  get period() { return i18n.t(`experiences:items.${experience.slug}.period`) },
  get summary() { return i18n.t(`experiences:items.${experience.slug}.summary`) },
  get homeSummary() { return i18n.t(`experiences:items.${experience.slug}.homeSummary`, experience.metrics) },
  get points() { return i18n.t(`experiences:items.${experience.slug}.points`, { ...experience.metrics, returnObjects: true }) },
  get skills() { return i18n.t(`experiences:items.${experience.slug}.skills`, { returnObjects: true }) },
  get focus() { return i18n.t(`experiences:items.${experience.slug}.focus`, { ...experience.metrics, workModel: i18n.t(`experiences:workModels.${experience.workModel}`), returnObjects: true }) },
  get status() { return i18n.t(`experiences:statuses.${experience.status}`) },
  get location() { return i18n.t('experiences:labels.location', { location: i18n.t(`experiences:items.${experience.slug}.location`), workModel: i18n.t(`experiences:workModels.${experience.workModel}`) }) },
}))
