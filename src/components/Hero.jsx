import { profile } from '../data'

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-copy">
        <p className="hero-hello">
          Hello, this is <strong>{profile.short}</strong>
        </p>
        <h1 className="hero-role">{profile.role}</h1>
        <p className="hero-tag">{profile.tagline}</p>

        <div className="cta-row">
          <a className="cta cta-solid" href="#projects">View my works</a>
          <a className="cta cta-ghost" href={`mailto:${profile.email}`}>Hire me</a>
        </div>

        <div className="socials">
          <a className="social" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="ti ti-brand-github" aria-hidden="true" />
          </a>
          <a className="social" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="ti ti-brand-linkedin" aria-hidden="true" />
          </a>
          <a className="social" href={`mailto:${profile.email}`} aria-label="Email">
            <i className="ti ti-mail" aria-hidden="true" />
          </a>
          <a className="social" href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone">
            <i className="ti ti-phone" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="photo-frame">
        <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
      </div>
    </header>
  )
}
