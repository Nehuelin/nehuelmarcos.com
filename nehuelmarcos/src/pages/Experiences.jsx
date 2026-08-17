import PageIntro from '../components/ui/PageIntro'
import { experiences } from '../data/experiences'

function Experiences() { 
    return (
    <section className="content-page">
      <PageIntro number="02" label="Experience" title={<>Where I’ve<br />been working.</>}>
        A growing career shaped by curiosity, ownership and a drive to make everyday work smoother.
      </PageIntro>
      <div className="timeline">{experiences.map((item, i) => 
        <article key={item.role}>
          <span className="timeline-number">0{i + 1}</span>
          <div>
            <p>{item.period}</p>
            <h2>{item.role}</h2>
            <h3>{item.company}</h3>
          </div>
          <div>
            <ul>{item.points.map(point => 
              <li key={point}>{point}</li>
              )}
            </ul>
            <a className="text-link timeline-link" href={`#experience/${item.slug}`}>View role <span>↗</span></a>
          </div>
        </article>)}
      </div>
    </section>
  ) 
}

export default Experiences