import PageIntro from '../components/ui/PageIntro'
import { skillGroups } from '../data/skills'

function Stack() { 
  return (
    <section className="content-page">
      <PageIntro number="03" label="Stack" title={<>Tools I use<br />to build.</>}>
        A practical toolkit that keeps evolving with every problem I solve.
      </PageIntro>
      <div className="skill-list">{skillGroups.map((group, i) => 
        <article key={group.title}>
          <span>0{i + 1}</span>
          <h2>{group.title}</h2>
          <div>
            {group.items.map(item => <p key={item}>{item}</p>)}
          </div>
        </article>)}
      </div>
    </section>
  ) 
}

export default Stack;