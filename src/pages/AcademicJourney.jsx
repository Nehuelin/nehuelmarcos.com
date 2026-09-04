import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AcademicOverview from '../components/academic/AcademicOverview'
import CurriculumView from '../components/academic/CurriculumView'
import DependencyGraph from '../components/academic/DependencyGraph'
import { academicCourses } from '../data/academicCourses'

export default function AcademicJourney() {
  const { t } = useTranslation('academic')
  const [view, setView] = useState('curriculum')
  return (
    <section className="content-page academic-journey">
      <a className="back-link" href="#education">{t('journey.back')}</a>
      <AcademicOverview />
      <div className="academic-tabs" role="tablist" aria-label={t('journey.tabsAriaLabel')}>
        <button role="tab" aria-selected={view === 'curriculum'} onClick={() => setView('curriculum')}>{t('journey.curriculum')}</button>
        <button role="tab" aria-selected={view === 'graph'} onClick={() => setView('graph')}>{t('journey.dependencyGraph')}</button>
      </div>
      {view === 'curriculum' ? <CurriculumView courses={academicCourses} /> : <DependencyGraph courses={academicCourses} />}
    </section>
  )
}