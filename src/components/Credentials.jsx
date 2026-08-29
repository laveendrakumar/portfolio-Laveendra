import { certifications, education } from '../data'

export default function Credentials() {
  return (
    <section className="section" id="credentials">
      <div className="grid-2">
        <div>
          <p className="eyebrow">Certifications</p>
          <h2 className="section-title">Certified in</h2>
          {certifications.map((c) => (
            <div className="list-row" key={c.name}>
              <i className="ti ti-certificate" aria-hidden="true" />
              <span>{c.name} — {c.issuer}, {c.year}</span>
            </div>
          ))}
        </div>

        <div>
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Studied at</h2>
          {education.map((e) => (
            <div key={e.school}>
              <p className="edu-degree">{e.degree}</p>
              <p className="edu-meta">{e.school} · {e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
