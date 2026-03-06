import { Link } from 'react-router-dom';
import services from '../data/services';

export default function ServicesPreview() {
  const previewServices = services.slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '42px' }}>
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            From single-room upgrades to full home transformations, Renofy is positioned to present
            your brand as premium and dependable.
          </p>
        </div>

        <div className="cards-grid cards-3">
          {previewServices.map((service, index) => (
            <div key={service.id} className="card service-card">
              <div className="card-icon">{index + 1}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '28px' }}>
          <Link to="/services" className="btn btn-secondary">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
