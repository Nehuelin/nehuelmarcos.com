import PageIntro from '../components/ui/PageIntro'
import { courses, education } from '../data/education'

function Education() {
  return <section className="content-page">
    <PageIntro number="03" label="Education" title={<>Always<br /><em>learning.</em></>}>
      Formal engineering foundations, complemented by practical courses that turn concepts into working software.
    </PageIntro>
    <div className="education-feature">
      {education.map((item) => <article key={item.slug}>
        <div><span>{item.type}</span><p>{item.period}</p></div>
        <div><h2>{item.title}</h2><h3>{item.institution}</h3><p>{item.summary}</p></div>
        <a className="round-link" href={`#education/${item.slug}`} aria-label={`View ${item.title} details`}>↗</a>
      </article>)}
    </div>
    <div className="course-heading"><p className="section-label">Additional coursework</p><h2>Courses completed.</h2></div>
    <div className="course-grid">{courses.map((course, i) => <a href={`#education/${course.slug}`} key={course.slug}>
      <span>0{i + 1}</span><p>{course.provider}</p><h3>{course.title}</h3><small>{course.status} ↗</small>
    </a>)}</div>
  </section>
}
export default Education