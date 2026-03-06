import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="container navbar">
        <Link to="/" className="brand">
          <div className="brand-name">
            Reno<span>fy</span>
          </div>
          <div className="brand-tag">Construction & Renovation</div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn-gold">
            Get Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
