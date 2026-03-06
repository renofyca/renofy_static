import testimonials from '../data/testimonials';

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '42px' }}>
          <h2 className="section-title">What Clients Value</h2>
          <p className="section-subtitle">
            Testimonials strengthen trust and make your website feel established.
          </p>
        </div>

        <div className="cards-grid cards-3 testimonials-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="card testimonial-card">
              <div className="quote-mark">“</div>
              <p>{item.quote}</p>
              <strong className="client-name">{item.name}</strong>
              <div className="client-role">{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
