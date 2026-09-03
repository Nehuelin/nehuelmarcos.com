function PageIntro({ number, label, title, children }) {
  
  return (
    <header className="page-intro">
      <p className="section-label">{number} / {label}</p>
      <h1>{title}</h1>
      {children && <p className="page-summary">{children}</p>}
    </header>
  )
}

export default PageIntro