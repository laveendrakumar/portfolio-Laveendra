import Section from './Section'
import { projects } from '../data'

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid-2">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <div className="project-thumb">
              <i className={`ti ${p.icon}`} aria-hidden="true" />
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-location">{p.location}</p>
            <p className="card-body">{p.blurb}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
