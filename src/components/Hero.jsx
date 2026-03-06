import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">Toronto • GTA • Premium Renovation Services</div>
          <h1>
            Build Better Spaces with <span>Renofy</span>
          </h1>
          <p>
            We help homeowners transform kitchens, bathrooms, basements, and living spaces with
            modern design, dependable workmanship, and refined finishes tailored to real homes.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Free Quote
            </Link>
            <Link to="/projects" className="btn btn-secondary">
              View Projects
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-box">
              <h3>Premium</h3>
              <p>Elegant renovation finishes for modern homes.</p>
            </div>
            <div className="stat-box">
              <h3>Trusted</h3>
              <p>Professional execution with clear communication.</p>
            </div>
            <div className="stat-box">
              <h3>Toronto</h3>
              <p>Focused on local renovation and construction leads.</p>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <div className="hero-card-label">Why homeowners choose Renofy</div>
            <h3>Modern renovation solutions with a premium brand feel.</h3>
            <p>
              A website built to showcase your work, earn trust, and turn visitors into real quote
              requests.
            </p>
          </div>

          <div className="hero-feature-list">
            <div className="hero-feature-item">
              <strong>Quality Craftsmanship</strong>
              <span>Built around detail, finish quality, and visual appeal.</span>
            </div>
            <div className="hero-feature-item">
              <strong>Transparent Process</strong>
              <span>Simple communication from enquiry to project completion.</span>
            </div>
            <div className="hero-feature-item">
              <strong>Lead-Focused Website</strong>
              <span>Structured to drive calls, WhatsApp messages, and quote requests.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
