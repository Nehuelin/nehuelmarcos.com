const statusLabels = { completed: 'Completed', 'in-progress': 'In progress', pending: 'Pending' }

export default function CourseStatusBadge({ status }) {
  return <span className={`academic-status status-${status}`}>{statusLabels[status]}</span>
}