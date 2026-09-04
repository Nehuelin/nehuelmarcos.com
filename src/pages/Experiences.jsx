import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import PageIntro from '../components/ui/PageIntro'
import { experiences } from '../data/experiences'
import globantLogo from '../assets/images/entity-logos//globant-logo.png'

function Experiences() {
  const { t } = useTranslation('experiences')
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')
  const [tool, setTool] = useState('all')
  const [skill, setSkill] = useState('all')

  const availableTools = useMemo(() => [...new Set(experiences.flatMap((item) => item.tools))].sort(), [])
  const availableSkills = useMemo(() => [...new Set(experiences.flatMap((item) => item.skills))].sort(), [])
  const filteredExperiences = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return experiences.filter((item) => {
      const searchableText = [item.role, item.company, item.location, item.status, item.summary, ...item.skills, ...item.tools].join(' ').toLowerCase()

      return (!normalizedQuery || searchableText.includes(normalizedQuery))
        && (status === 'all' || item.status === status)
        && (tool === 'all' || item.tools.includes(tool))
        && (skill === 'all' || item.skills.includes(skill))
    })
        }, [query, skill, status, tool])

  const tools = [...new Set(experiences.flatMap((item) => item.tools))]

  return (
    <section className="content-page experience-page">
      <PageIntro number="02" label={t('pageIntro.label')} title={<>{t('pageIntro.titleLineOne')}<br />{t('pageIntro.titleLineTwo')}</>}>
        {t('pageIntro.description')}
      </PageIntro>
      <div className="experience-filters" aria-label={t('filters.ariaLabel')}>
        <label className="experience-field experience-search">
          <span>{t('filters.searchLabel')}</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('filters.searchPlaceholder')} />
        </label>
        <label className="experience-field">
          <span>{t('filters.statusLabel')}</span>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="all">{t('filters.statusAll')}</option>
            {[...new Set(experiences.map((item) => item.status))].map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="experience-field">
          <span>{t('filters.toolLabel')}</span>
          <select value={tool} onChange={(event) => setTool(event.target.value)}>
            <option value="all">{t('filters.toolAll')}</option>
            {availableTools.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
        <label className="experience-field">
          <span>{t('filters.skillLabel')}</span>
          <select value={skill} onChange={(event) => setSkill(event.target.value)}>
            <option value="all">{t('filters.skillAll')}</option>
            {availableSkills.map((item) => <option value={item} key={item}>{item}</option>)}
          </select>
        </label>
      </div>
      {filteredExperiences.length === 0 ? (
        <p className="experience-empty">{t('filters.empty')}</p>
      ) : null}
      <div className="experience-feature">
        {filteredExperiences.map((item, index) => (
          <article key={item.slug}>
            <div className="experience-aside">
              <span>0{index + 1} / {item.status}</span>
              <p>{item.period}</p>
              <img src={globantLogo} alt={`${item.company} logo`} className="experience-logo" />
            </div>
            <div className="experience-copy">
              <p className="section-label">{item.company} · {item.location}</p>
              <h2>{item.role}</h2>
              <p>{item.summary}</p>
              <div className="experience-tags" aria-label={t('cards.skillsAriaLabel', { role: item.role })}>
                {item.skills.slice(0, 4).map((skill) => <span key={skill}>{skill}</span>)}
              </div> 
            </div>
          <a className="round-link" href={`#experience/${item.slug}`} aria-label={t('cards.viewDetails', { role: item.role })}>↗</a>
          </article>
        ))}
      </div>

      <div className="experience-toolkit-heading">
        <p className="section-label">{t('toolkit.label')}</p>
        <div>
          <h2>{t('toolkit.title')}</h2>
          <p>{t('toolkit.description')}</p>
        </div>
      </div>
      <div className="experience-toolkit">
        {tools.map((tool, index) => (
          <div key={tool}><span>{String(index + 1).padStart(2, '0')}</span><p>{tool}</p></div>
        ))}
      </div>
    </section>
  ) 
}

export default Experiences