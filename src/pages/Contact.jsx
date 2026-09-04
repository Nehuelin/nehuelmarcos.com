import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation('translation')

  return (
    <section className="contact-page">
      <p className="section-label">{t('contact.label')}</p>
      <h1>{t('contact.headingLineOne')}<br />{t('contact.headingLineTwo')} <em>{t('contact.headingEmphasis')}</em></h1>
      <p>{t('contact.description')}</p>
      <a href="mailto:nehuelmarcos2005@gmail.com">nehuelmarcos2005@gmail.com <span>↗</span></a>
    </section>
  )
}

export default Contact;