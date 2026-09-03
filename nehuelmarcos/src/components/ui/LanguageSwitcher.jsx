import { useTranslation } from 'react-i18next'

const languages = ['en', 'es']

function LanguageSwitcher() {
  const { i18n, t } = useTranslation('common')
  const activeLanguage = i18n.resolvedLanguage

  return (
    <div className="language-switcher" role="group" aria-label={t('app.languageLabel')}>
      {languages.map((language) => (
        <button
          type="button"
          key={language}
          className={activeLanguage === language ? 'is-active' : ''}
          aria-pressed={activeLanguage === language}
          onClick={() => i18n.changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher