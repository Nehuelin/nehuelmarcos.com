import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEn from './locales/en/common.json'
import commonEs from './locales/es/common.json'
import homeEn from './locales/en/home.json'
import homeEs from './locales/es/home.json'
import aboutEn from './locales/en/about.json'
import aboutEs from './locales/es/about.json'
import projectsEn from './locales/en/projects.json'
import projectsEs from './locales/es/projects.json'
import stackEn from './locales/en/stack.json'
import stackEs from './locales/es/stack.json'
import academicEn from './locales/en/academic.json'
import academicEs from './locales/es/academic.json'
import educationEn from './locales/en/education.json'
import educationEs from './locales/es/education.json'
import experiencesEn from './locales/en/experiences.json'
import experiencesEs from './locales/es/experiences.json'

const resources = {
  en: { translation: commonEn, home: homeEn, about: aboutEn, projects: projectsEn, stack: stackEn, academic: academicEn, education: educationEn, experiences: experiencesEn },
  es: { translation: commonEs, home: homeEs, about: aboutEs, projects: projectsEs, stack: stackEs, academic: academicEs, education: educationEs, experiences: experiencesEs },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n