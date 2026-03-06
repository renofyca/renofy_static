import services from '../data/services';
import CTASection from '../components/CTASection';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Renofy offers premium construction and renovation services designed to improve
            functionality, aesthetics, and long-term value for modern homes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid cards-3">
            {services.map((service, index) => (
              <div key={service.id} className="card service-card">
                <div className="card-icon">{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
