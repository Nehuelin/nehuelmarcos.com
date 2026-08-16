import PageIntro from '../components/ui/PageIntro'

function Other() { 
  return (
		<section className="content-page">
			<PageIntro number="04" label="Other" title={<>Beyond the<br />job title.</>}>
				A few details that don’t fit neatly into a résumé, but are part of who I am.
			</PageIntro>
			<div className="fact-grid">
				<article>
					<span>Language</span>
					<h2>Spanish</h2>
					<p>Native speaker</p>
				</article>
				<article>
					<span>Language</span>
					<h2>English</h2>
					<p>Cambridge C1 · Advanced</p>
				</article>
				<article>
					<span>Based in</span>
					<h2>Buenos Aires</h2>
					<p>Argentina</p>
				</article>
				<article>
					<span>Learning now</span>
					<h2>AI systems</h2>
					<p>Automation and machine learning</p>
				</article>
			</div>
		</section>
	)
}

export default Other;