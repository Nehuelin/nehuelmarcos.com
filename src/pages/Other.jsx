import { useTranslation } from 'react-i18next'
import PageIntro from '../components/ui/PageIntro'
import { personalInterests } from '../data/personalInterests'

function Other() {
  const { t } = useTranslation('other')
  const interests = personalInterests.map((interest) => ({ ...interest, ...t(`interests.${interest.id}`, { returnObjects: true }) }))
  return (
		<section className="content-page other-page">
      <PageIntro number="04" label={t('pageIntro.label')} title={<>{t('pageIntro.titleLineOne')}<br />{t('pageIntro.titleLineTwo')}</>}>
        {t('pageIntro.description')}
      </PageIntro>
      <div className="personal-stories">
        {interests.map((interest, index) => (
          <article className={`personal-story personal-story-${interest.id}`} key={interest.id}>
            <div className="story-highlight" aria-hidden="true"><span>{interest.highlight}</span><i /></div>
            <div className="story-copy"><p className="section-label">{interest.eyebrow}</p><span className="story-number">0{index + 1}</span><h2>{interest.title}</h2><p>{interest.description}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Other;