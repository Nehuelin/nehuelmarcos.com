import PageIntro from '../components/ui/PageIntro'

const capabilities = [
  { title: 'Backend thinking', description: 'I enjoy modeling business problems, defining clear responsibilities and building maintainable services through APIs, layered architectures and structured persistence.' },
  { title: 'Automation and improvement', description: 'I look for repetitive or unreliable processes that can be transformed into consistent workflows, validations and reporting tools.' },
  { title: 'People and systems', description: 'My experience has taught me to move between technical implementation, operational requirements and communication with different stakeholders.' },
]

const profile = [
  { label: 'Current role', value: 'Operations Intern at Globant', href: '#experience' },
  { label: 'Previous role', value: 'Atlassian Engineer Intern at Globant', href: '#experience' },
  { label: 'Education', value: 'Computer Engineering at UADE', href: '#education' },
  { label: 'Based in', value: 'Buenos Aires, Argentina' },
  { label: 'Spanish', value: 'Native' },
  { label: 'English', value: 'Cambridge C1 Advanced' },
  { label: 'Professional interests', value: 'Backend engineering, automation, AI and machine learning', href: '#stack' },
]


function About() {
return (
    <section className="content-page">
      <PageIntro number="01" label="About" title={<>A little bit<br />about me.</>}>
        I like understanding how things work, then finding a simpler way to make them work better.
      </PageIntro>
      <section className="two-column-copy" aria-labelledby="about-profile-heading">
        <h2 id="about-profile-heading">Engineering with<br /><em>intention.</em></h2>
        <div>
          <p>I’m a Computer Engineering student at UADE with professional experience spanning operations, Atlassian administration, technical support, workflow automation and Python development.</p>
          <p>My work often sits between people, processes and technology. I enjoy understanding a problem, breaking it into manageable parts and building a solution that makes the underlying process clearer, faster or more dependable.</p>
          <p>I’m currently developing toward backend engineering, automation and data-driven systems, with a growing interest in artificial intelligence and machine learning.</p>
        </div>
      </section>
      <section className="about-section" aria-labelledby="capabilities-heading">
        <header className="about-section-heading"><p className="section-label">Capabilities</p><h2 id="capabilities-heading">What I bring</h2></header>
        <div className="capability-list">
          {capabilities.map((capability, index) => <article key={capability.title}><span>0{index + 1}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>)}
        </div>
      </section>
      <section className="about-section" aria-labelledby="profile-heading">
        <header className="about-section-heading"><p className="section-label">At a glance</p><h2 id="profile-heading">Profile</h2></header>
        <dl className="profile-list">
          {profile.map((item) => <div key={item.label}><dt>{item.label}</dt><dd>{item.href ? <a href={item.href}>{item.value} <span aria-hidden="true">↗</span></a> : item.value}</dd></div>)}
        </dl>
        <a className="text-link profile-project-link" href="#projects">Explore selected projects <span>↗</span></a>
      </section>
      <aside className="about-cta" aria-labelledby="about-cta-heading">
        <p className="section-label">Keep exploring</p>
        <div><h2 id="about-cta-heading">See what I’ve been working on.</h2><nav aria-label="Continue through the portfolio"><a href="#experience">Experience <span>↗</span></a><a href="#projects">Projects <span>↗</span></a><a href="#stack">Technical stack <span>↗</span></a><a href="#contact">Contact <span>↗</span></a></nav></div>
      </aside>
    </section>
  )
}

export default About