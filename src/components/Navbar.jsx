import { nav, profile } from '../data'

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <nav className="nav">
      <a href="#home" className="logo">
        LAVEENDRA<span>.DEV</span>
      </a>

      <div className="nav-links">
        {nav.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="nav-link" title={item.label} aria-label={item.label}>
            <i className={`ti ${item.icon}`} aria-hidden="true" />
          </a>
        ))}
      </div>

      <div className="nav-right">
        <button
          type="button"
          className="theme-btn"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          <i className={isDark ? 'ti ti-sun' : 'ti ti-moon'} aria-hidden="true" />
        </button>

        <a className="cv-btn" href={profile.resume} download>
          <i className="ti ti-download" aria-hidden="true" />
          CV
        </a>
      </div>
    </nav>
  )
}
