import { profile } from '../data'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <p className="eyebrow">Contact</p>
      <h2 className="contact-title">Let's build something</h2>
      <p className="contact-meta">{profile.email} · {profile.phone}</p>
      <a className="cta cta-solid" href={`mailto:${profile.email}`}>Send a message</a>
    </section>
  )
}
