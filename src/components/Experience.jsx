import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      {experience.map((job) => (
        <div className="timeline" key={job.company}>
          <div className="timeline-head">
            <h3 className="timeline-role">{job.title}</h3>
            <span className="timeline-period">{job.period}</span>
          </div>
          <p className="timeline-company">{job.company}</p>
          <ul className="timeline-list">
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}
