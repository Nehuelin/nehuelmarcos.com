import { useTranslation } from 'react-i18next'
import PageIntro from '../components/ui/PageIntro'
import { courses, education } from '../data/education'
import uadeLogo from '../assets/images/entity-logos//uade-logo.jpg'
import coderhouseLogo from '../assets/images/entity-logos//coderhouse-logo.jpg'

function Education() {
  const { t } = useTranslation('education')

  return <section className="content-page">
    <PageIntro number="03" label={t('pageIntro.label')} title={<>{t('pageIntro.titleLineOne')}<br /><em>{t('pageIntro.titleLineTwo')}</em></>}>
      {t('pageIntro.description')}
    </PageIntro>
    <div className="education-feature">
      {education.map((item) => <article key={item.slug}>
        <div><span>{item.type}</span><p>{item.period}</p><img src={uadeLogo} alt={item.institution} className="education-logo" /></div>
        <div><h2>{item.title}</h2><h3>{item.institution}</h3><p>{item.summary}</p></div>
        <a className="round-link" href={`#education/${item.slug}`} aria-label={t('cards.viewDetails', { title: item.title })}>↗</a>
      </article>)}
    </div>
    <div className="course-heading"><p className="section-label">{t('courseHeading.label')}</p><h2>{t('courseHeading.title')}</h2></div>
    <div className="course-grid">{courses.map((course, i) => <a href={`#education/${course.slug}`} key={course.slug} className="course-item-with-logo">
      <img src={coderhouseLogo} alt={course.provider} className="course-logo" /><span>0{i + 1}</span><p>{course.provider}</p><h3>{course.title}</h3><small>{course.certificate ? t('courseList.certificateAvailable') : course.status} ↗</small>
    </a>)}</div>
  </section>
}
export default Education