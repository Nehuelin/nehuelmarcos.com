import { useState } from 'react'
import AcademicOverview from '../components/academic/AcademicOverview'
import CurriculumView from '../components/academic/CurriculumView'
import DependencyGraph from '../components/academic/DependencyGraph'
import { academicCourses } from '../data/academicCourses'

export default function AcademicJourney() {
  const [view, setView] = useState('curriculum')
  return (
    <section className="content-page academic-journey">
      <a className="back-link" href="#education">← Education</a>
      <AcademicOverview />
      <div className="academic-tabs" role="tablist" aria-label="Academic journey views">
        <button role="tab" aria-selected={view === 'curriculum'} onClick={() => setView('curriculum')}>Curriculum</button>
        <button role="tab" aria-selected={view === 'graph'} onClick={() => setView('graph')}>Dependency graph</button>
      </div>
      {view === 'curriculum' ? <CurriculumView courses={academicCourses} /> : <DependencyGraph courses={academicCourses} />}
    </section>
  )
}