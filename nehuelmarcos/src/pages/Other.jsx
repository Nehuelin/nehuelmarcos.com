import PageIntro from '../components/ui/PageIntro'
import { personalInterests } from '../data/personalInterests'

function Other() {
  return (
		<section className="content-page other-page">
      <PageIntro number="04" label="Other" title={<>Things that<br />make me, me.</>}>
        Not everything worth knowing belongs on a résumé. These are a few things that have shaped who I am beyond work and university.
      </PageIntro>
      <div className="personal-stories">
        {personalInterests.map((interest, index) => (
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