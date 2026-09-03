import { degree } from '../../data/academicCourses'

export default function AcademicOverview() {
  const progress = Math.round((degree.completed / degree.total) * 100)
  return (
		<header className="academic-overview">
			<div>
				<p className="section-label">Academic journey</p>
				<h1>{degree.title}<em>.</em></h1>
				<p>{degree.university}</p>
			</div>
			<div className="academic-progress-copy">
				<span>{degree.period} · {degree.status}</span><strong>{progress}%</strong>
				<p>{degree.completed} of {degree.total} courses completed</p>
				<div className="academic-progress" role="progressbar" aria-label="Degree progress" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
					<i style={{ width: `${progress}%` }} />
				</div>
			</div>
		</header>
	)
}