import { useTranslation } from 'react-i18next'
import PageIntro from '../components/ui/PageIntro'

function About() {
  const { t } = useTranslation('about')
  const capabilities = t('capabilities.items', { returnObjects: true })
  const profile = Object.values(t('profile.items', { returnObjects: true }))
  const paragraphs = t('engineering.paragraphs', { returnObjects: true })

  return (
    <section className="content-page">
      <PageIntro number="01" label={t('intro.label')} title={<>{t('intro.titleLineOne')}<br />{t('intro.titleLineTwo')}</>}>
        {t('intro.description')}
      </PageIntro>
      <section className="two-column-copy" aria-labelledby="about-profile-heading">
        <h2 id="about-profile-heading">{t('engineering.headingLineOne')}<br /><em>{t('engineering.headingEmphasis')}</em></h2>
        <div>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      </section>
      <section className="about-section" aria-labelledby="capabilities-heading">
        <header className="about-section-heading"><p className="section-label">{t('capabilities.label')}</p><h2 id="capabilities-heading">{t('capabilities.heading')}</h2></header>
        <div className="capability-list">
          {capabilities.map((capability, index) => <article key={capability.title}><span>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>)}
        </div>
      </section>
      <section className="about-section" aria-labelledby="profile-heading">
        <header className="about-section-heading"><p className="section-label">{t('profile.label')}</p><h2 id="profile-heading">{t('profile.heading')}</h2></header>
        <dl className="profile-list">
          {profile.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.href ? <a href={item.href}>{item.value} <span aria-hidden="true">↗</span></a> : item.value}</dd></div>)}
        </dl>
        <a className="text-link profile-project-link" href="#projects">{t('profile.exploreProjects')} <span>↗</span></a>
      </section>
      <aside className="about-cta" aria-labelledby="about-cta-heading">
        <p className="section-label">{t('cta.label')}</p>
        <div><h2 id="about-cta-heading">{t('cta.heading')}</h2><nav aria-label={t('cta.navigationLabel')}><a href="#experience">{t('cta.experience')} <span>↗</span></a><a href="#projects">{t('cta.projects')} <span>↗</span></a><a href="#stack">{t('cta.technicalStack')} <span>↗</span></a><a href="#contact">{t('cta.contact')} <span>↗</span></a></nav></div>
      </aside>
    </section>
  )
}

export default About