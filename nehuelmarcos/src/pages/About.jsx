import PageIntro from '../components/ui/PageIntro'

function About() {
  return <section className="content-page">
    <PageIntro number="01" label="About" title={<>A little bit<br />about me.</>}>
      I like understanding how things work, then finding a simpler way to make them work better.
    </PageIntro>
    
    <div className="two-column-copy">
      <h2>Engineering with<br /><em>intention.</em></h2>
      <div>
        <p>I’m a Computer Engineering student with hands-on experience in Atlassian administration, technical support, workflow automation and Python development.</p>
        <p>My work sits between people and technology: listening to a problem, breaking it down, and building a dependable solution. I’m especially interested in backend engineering, AI and machine learning.</p>
        <p>Outside of work, I’m always learning something new and looking for small systems I can improve.</p>
      </div>
    </div>
  </section>
}
export default About