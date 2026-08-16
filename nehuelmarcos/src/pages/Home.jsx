const Arrow = () => <span aria-hidden="true">↗</span>

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="eyebrow"><i /> Buenos Aires, Argentina <span>Available for opportunities</span></div>
        <h1>Hi, I’m Nehuel.<br />I build things for the <em>web.</em></h1>
        <div className="hero-bottom">
          <p>I’m a Computer Engineering student focused on backend development, automation and useful, human-centered software.</p>
          <a className="round-link" href="#about" aria-label="Learn more about me">↓</a>
        </div>
      </section>
      <section className="snapshot-section">
        <p className="section-label">01 / Snapshot</p>
        <div className="snapshot-copy">
          <h2>Curious by nature.<br />Practical by choice.</h2>
          <p>Currently supporting Atlassian operations while completing my B. Eng. in Computer Engineering at UADE.</p>
          <a className="text-link" href="#about">More about me <Arrow /></a>
        </div>
        <div className="status-card">
          <p>Right now</p>
          <strong>Operations Intern</strong>
          <span>Globant</span>
          <hr />
          <p>Exploring</p>
          <strong>AI automation</strong>
          <span>Python · APIs · Workflows</span>
        </div>
      </section>

      <section className="work-section">
        <div>
          <p className="section-label">02 / Selected work</p>
          <h2>Projects are<br />coming soon.</h2>
        </div>
        <div className="coming-soon">
          <span>In progress</span>
          <p>I’m currently preparing a selection of projects. In the meantime, take a look at my experience and technical stack.</p>
          <div><a className="text-link" href="#experience">Experience <Arrow /></a><a className="text-link" href="#stack">My stack <Arrow /></a></div>
        </div>
      </section>
    </>
  )
}

export default Home;