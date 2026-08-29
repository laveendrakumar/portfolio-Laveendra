import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid-2">
        {skills.map((s) => (
          <div className="card" key={s.title}>
            <div className="card-head">
              <i className={`ti ${s.icon}`} aria-hidden="true" />
              {s.title}
            </div>
            <p className="card-body">{s.items}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
