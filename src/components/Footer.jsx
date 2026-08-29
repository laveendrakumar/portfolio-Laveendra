import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Built with React and Vite</span>
    </footer>
  )
}
