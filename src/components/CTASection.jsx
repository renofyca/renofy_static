import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <div>
            <h2>Ready to Transform Your Space?</h2>
            <p>
              Let Renofy help you turn ideas into a polished, modern, and functional home
              renovation. Make it easy for customers to reach you and request a quote.
            </p>
          </div>

          <div className="cta-actions">
            <Link to="/contact" className="btn btn-gold">
              Get Free Quote
            </Link>
            <Link to="/services" className="btn btn-secondary">
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
