import Section from "./Section";
import { projects } from "../data";

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

            {(p.live || p.code) && (
              <div className="project-links">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <i className="ti ti-external-link" aria-hidden="true" />
                    Live demo
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    <i className="ti ti-brand-github" aria-hidden="true" />
                    Source code
                  </a>
                )}
              </div>
            )}

            <div className="tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
