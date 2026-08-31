import CourseStatusBadge from './CourseStatusBadge'

export default function CourseCard({ course }) {
  return (
    <a className={`academic-course-card is-${course.status}`} href={`#education/computer-engineering/${course.slug}`}>
      <div>
        <span>Year {course.year}{course.semester ? ` · Semester ${course.semester}` : ''}</span><span aria-hidden="true">↗</span>
      </div>
      <h3>{course.title}</h3>
      <div className="academic-card-footer">
        <CourseStatusBadge status={course.status} />
        <div className="academic-tags">
          {course.technologies.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </a>
  )
}