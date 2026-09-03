import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './locales/en/common'
import enHome from './locales/en/home'
import enContact from './locales/en/contact'

import esCommon from './locales/es/common'
import esHome from './locales/es/home'
import esContact from './locales/es/contact'

const supportedLanguages = ['en', 'es']
const namespaces = ['common', 'home', 'contact']

const getInitialLanguage = () => {
  const urlLanguage = new URLSearchParams(window.location.search).get('lang')

  if (supportedLanguages.includes(urlLanguage)) {
    return urlLanguage
  }

  const savedLanguage = window.localStorage.getItem('language')

  if (supportedLanguages.includes(savedLanguage)) {
    return savedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith('es')
    ? 'es'
    : 'en'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        contact: enContact,
      },
      es: {
        common: esCommon,
        home: esHome,
        contact: esContact,
      },
    },

    lng: getInitialLanguage(),
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,

    ns: namespaces,
    defaultNS: 'common',
    fallbackNS: 'common',

    interpolation: {
      escapeValue: false,
    },
  })

const persistLanguage = (language) => {
  document.documentElement.lang = language
  window.localStorage.setItem('language', language)

  const url = new URL(window.location.href)
  url.searchParams.set('lang', language)

  window.history.replaceState(
    null,
    '',
    `${url.pathname}${url.search}${url.hash}`,
  )
}

persistLanguage(i18n.resolvedLanguage)
i18n.on('languageChanged', persistLanguage)

export default i18n