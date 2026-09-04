import ProjectPreview from '../components/ui/ProjectPreview'
import { education } from '../data/education'
import { experiences } from '../data/experiences'
import { featuredProjectSlugs, projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import nasaPhoto from '../assets/images/other/nehuel-nasa.jpg'

const Arrow = ({ direction = '↗' }) => <span aria-hidden="true">{direction}</span>

const featuredProjects = featuredProjectSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean)

const toolkitIds = ['java', 'spring-boot', 'python', 'node-js', 'rest-apis', 'sql', 'postgresql', 'docker']
const toolkit = toolkitIds
  .map((id) => skillGroups.flatMap((group) => group.items).find((item) => item.id === id))
  .filter(Boolean)

function HomeProofStrip() {
  const degree = education.find((item) => item.slug === 'computer-engineering')
  const currentRole = experiences.find((item) => item.status === 'Current role')
  const facts = [
    ['Current role', `${currentRole.role} · ${currentRole.company}`],
    ['Education', `${degree.title} · UADE`],
    ['Experience', 'Operations · Atlassian · Automation'],
    ['Languages', 'Spanish · English C1'],
  ]

  return (
    <section className="home-proof" aria-label="Professional profile at a glance">
      {facts.map(([label, value]) => (
        <div key={label}><span>{label}</span><strong>{value}</strong></div>
      ))}
    </section>
  )
}

function FeaturedProjects() {
  return (
    <section className="home-section featured-work" id="selected-work">
      <div className="home-section-heading">
        <p className="section-label">01 / Selected work</p>
        <h2>Systems built for real workflows.</h2>
      </div>
      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <article key={project.slug} className={!project.previewImage ? 'without-preview' : ''}>
            <div className="featured-project-meta">
              <span>0{index + 1}</span>
              <p>{project.category}<br />{project.associatedTo}</p>
            </div>
            <div className="featured-project-visual" aria-hidden={!project.previewImage}>
              {project.previewImage ? <ProjectPreview project={project} /> : <span>Backend<br />system</span>}
            </div>
            <div className="featured-project-copy">
              <h3><a href={`#projects/${project.slug}`}>{project.title}</a></h3>
              <p>{project.summary}</p>
              <div className="home-tags" aria-label={`${project.title} technologies`}>
                {project.stack.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <a className="text-link" href={`#projects/${project.slug}`}>View project <Arrow /></a>
            </div>
          </article>
        ))}
      </div>
      <a className="text-link home-more-link" href="#projects">View all projects <Arrow direction="→" /></a>
    </section>
  )
}

function ExperienceSnapshot() {
  return (
    <section className="home-section home-experience">
      <div className="home-section-heading">
        <p className="section-label">02 / Experience</p>
        <h2>Experience at the intersection of operations and technology.</h2>
      </div>
      <div className="home-role-list">
        {experiences.map((experience) => {
          const result = experience.focus?.find((item) => item.value === '199 tickets resolved')
          return (
            <article key={experience.slug}>
              <div><span>{experience.status}</span><p>{experience.period}</p></div>
              <div>
                <h3><a href={`#experience/${experience.slug}`}>{experience.role} <em>— {experience.company}</em></a></h3>
                <p>{experience.homeSummary}</p>
                {result && <strong className="home-result">{result.value}</strong>}
              </div>
              <a className="role-arrow" href={`#experience/${experience.slug}`} aria-label={`View ${experience.role} experience`}><Arrow /></a>
            </article>
          )
        })}
      </div>
      <a className="text-link home-more-link" href="#experience">View full experience <Arrow direction="→" /></a>
    </section>
  )
}

function HomeToolkit() {
  return (
    <section className="home-section home-toolkit">
      <div className="home-section-heading">
        <p className="section-label">03 / Toolkit</p>
        <div>
          <h2>A toolkit built around backend systems and automation.</h2>
          <p>I work with technologies that help me model business problems, connect systems and replace repetitive processes with dependable tools.</p>
        </div>
      </div>
      <ul>{toolkit.map((skill, index) => <li key={skill.id}><span>0{index + 1}</span>{skill.name}</li>)}</ul>
      <a className="text-link home-more-link" href="#stack">Explore my complete stack <Arrow direction="→" /></a>
    </section>
  )
}

function HomeContact() {
  return (
    <section className="home-contact">
      <p className="section-label">05 / Contact</p>
      <h2>Have a problem worth <em>simplifying?</em></h2>
      <p>I’m interested in backend engineering, automation and opportunities where technology can improve real operational processes.</p>
      <nav aria-label="Contact links">
        <a href="#contact">Let’s talk <Arrow /></a>
        <a href="https://github.com/Nehuelin" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
      </nav>
    </section>
  )
}

function Home() {
  const scrollToWork = () => document.getElementById('selected-work')?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  })

  return (
    <>
      <section className="hero-section">
        <div className="eyebrow"><i /> Buenos Aires, Argentina · English C1 <span>---</span></div>
        <h1>Hi, I’m Nehuel.<br />I build systems that make work <em>simpler.</em></h1>
        <div className="hero-bottom">
           <p>Computer Engineering student and Operations Intern at Globant, working across backend development, Python automation, data and operational systems.</p>
          <div className="hero-actions">
            <button type="button" className="text-link" onClick={scrollToWork}>View selected work <Arrow direction="→" /></button>
            <a className="text-link" href="/resume-ed-0926.pdf" download="Nehuel-Marcos-Resume.pdf">Download résumé <Arrow direction="↓" /></a>
            <a className="text-link" href="#contact">Get in touch <Arrow /></a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src={nasaPhoto} alt="Nehuel at NASA's Kennedy Space Center" />
          <figcaption>At NASA’s Kennedy Space Center</figcaption>
        </figure>
      </section>

      <HomeProofStrip />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <HomeToolkit />
      <section className="home-personal">
        <p className="section-label">04 / Beyond work</p>
        <div>
          <p>Away from the screen, I’ve spent more than twelve years playing basketball—and I’m usually the person looking up when an aircraft passes overhead.</p>
          <a className="text-link" href="#other">More beyond the résumé <Arrow direction="→" /></a>
        </div>
      </section>
      <HomeContact />
    </>
  )
}

export default Home;