import { useTranslation } from 'react-i18next'
import { findEducation } from '../data/education'
import uadeLogo from '../assets/images/entity-logos//uade-logo.jpg'
import coderhouseLogo from '../assets/images/entity-logos//coderhouse-logo.jpg'

function EducationDetail({ slug }) {
  const { t } = useTranslation('education')
  const item = findEducation(slug)
  const logoSrc = item?.institution && item.institution.includes('UADE') ? uadeLogo : coderhouseLogo
  
  if (!item) {
    return (
      <section className="content-page">
        <h1>{t('detail.notFound')}</h1>
        <a href="#education">{t('detail.back')}</a>
      </section>
    )
  }

  const details = item.facts || item.topics
  
  return (
    <section className="detail-page content-page">
      <a className="back-link" href="#education">{t('detail.educationBack')}</a>
      <p className="section-label">{item.type || `${item.provider} · ${item.status}`}</p>
      <h1>{item.title}<em>.</em></h1>
      <div className="detail-meta"><img src={logoSrc} alt={item.institution || item.provider} className="school-logo" /><p>{item.institution || item.provider}</p><p>{item.period || item.status}</p></div>
      {item.summary && <p className="detail-lede">{item.summary}</p>}
      {item.certificate && (
        <div className="detail-block">
          <p className="section-label">{t('detail.certificate')}</p>
          <div>
            <h3 style={{ color: '#182019', marginBottom: '12px' }}>{t('detail.completionCredential')}</h3>
            <p style={{ fontSize: '17px', lineHeight: '1.65', marginBottom: '20px', color: '#4e534d' }}>
              {t('detail.certificateDescription', { title: item.title, provider: item.provider })}
            </p>
            <a href={item.certificate.url} target="_blank" rel="noopener noreferrer" className="text-link">{item.certificate.label || t('detail.viewCertificate')} <span>↗</span></a>
          </div>
        </div>
      )}
      {item.project && (
        <div className="detail-block">
          <p className="section-label">{t('detail.capstoneProject')}</p>
          <div>
            <h3 style={{ color: '#182019', marginBottom: '12px' }}>{item.project.title}</h3>
            <p style={{ fontSize: '17px', lineHeight: '1.65', marginBottom: '20px', color: '#4e534d' }}>{item.project.description}</p>
            <div style={{ display: 'flex', gap: '24px' }}>
              {item.project.github && <a href={item.project.github} target="_blank" rel="noopener noreferrer" className="text-link">{t('detail.viewOnGitHub')} <span>↗</span></a>}
              {item.project.demo && <a href={item.project.demo} target="_blank" rel="noopener noreferrer" className="text-link">{t('detail.viewDemo')} <span>↗</span></a>}
            </div>
          </div>
        </div>
      )}
      <div className="detail-block"><p className="section-label">{item.facts ? t('detail.degreeDetails') : t('detail.whatIStudied')}</p><ul>{details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
    </section>
  )
}
export default EducationDetail