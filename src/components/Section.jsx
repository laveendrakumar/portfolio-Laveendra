export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section className={`section ${className}`} id={id}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}
