import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>
              Reno<span style={{ color: '#d4af37' }}>fy</span>
            </h3>
            <p>
              Premium construction and renovation services in Toronto and the GTA, focused on
              quality workmanship, modern finishes, and dependable service.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/services">Services</Link></p>
            <p><Link to="/projects">Projects</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/contact">Contact</Link></p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Toronto, Ontario, Canada</p>
            <p>Phone: +1 xxx xxx xxxx</p>
            <p>WhatsApp: Available</p>
            <p>Email: info@renofy.ca</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Renofy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
