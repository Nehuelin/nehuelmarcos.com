import { useTranslation } from 'react-i18next'
import { degree } from '../../data/academicCourses'

export default function AcademicOverview() {
  const { t } = useTranslation('academic')
  const progress = Math.round((degree.completed / degree.total) * 100)
  return (
		<header className="academic-overview">
			<div>
				<p className="section-label">{t('overview.label')}</p>
				<h1>{degree.title}<em>.</em></h1>
				<p>{degree.university}</p>
			</div>
			<div className="academic-progress-copy">
				<span>{degree.period} · {degree.status}</span><strong>{progress}%</strong>
				<p>{t('overview.progress', { completed: degree.completed, total: degree.total })}</p>
				<div className="academic-progress" role="progressbar" aria-label={t('overview.progressAriaLabel')} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
					<i style={{ width: `${progress}%` }} />
				</div>
			</div>
		</header>
	)
}