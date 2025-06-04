import { Link } from 'react-router-dom'
import '../css/modules/components.css'

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">MiSpotify</h1>
      <nav className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/items">Playlists</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  )
}