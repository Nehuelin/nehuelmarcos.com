import PageIntro from '../components/ui/PageIntro'
import { projects } from '../data/projects'

function Projects() { 
	return (
		<section className="content-page">
			<PageIntro number="04" label="Projects" title={<>Selected<br /><em>work.</em></>}>
				Tools and experiments built to solve real problems and make everyday work simpler.
			</PageIntro>
      <div className="project-list">
        {projects.map((project, i) => 
          <a href={`#projects/${project.slug}`} key={project.slug}>
            <span>0{i + 1}</span>
            <div>
              <p>{project.category}</p>
              <h2>{project.title}</h2>
              <small>{project.summary}</small>
            </div>
            <b>↗</b>
          </a>
        )}
      </div>
		</section>
	) 
}

export default Projects