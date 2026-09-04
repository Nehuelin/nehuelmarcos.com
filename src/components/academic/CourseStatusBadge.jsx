import { useTranslation } from 'react-i18next'

const statusKeys = { completed: 'statuses.completed', 'in-progress': 'statuses.in-progress', pending: 'statuses.pending' }

export default function CourseStatusBadge({ status }) {
  const { t } = useTranslation('academic')
  return <span className={`academic-status status-${status}`}>{t(statusKeys[status] ?? status)}</span>
}