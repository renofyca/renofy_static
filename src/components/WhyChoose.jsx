const items = [
  {
    title: 'Quality Workmanship',
    description:
      'Every renovation should feel clean, durable, and professionally finished from start to end.'
  },
  {
    title: 'Modern Design Approach',
    description:
      'We focus on elegant spaces that balance style, usability, and long-term value.'
  },
  {
    title: 'Transparent Communication',
    description:
      'Clients value clear updates, realistic expectations, and a smooth renovation experience.'
  },
  {
    title: 'Local Service Focus',
    description:
      'Built for homeowners across Toronto and the GTA seeking trusted renovation professionals.'
  }
];

export default function WhyChoose() {
  return (
    <section className="section dark-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '42px' }}>
          <h2 className="section-title">Why Choose Renofy</h2>
          <p className="section-subtitle">
            A strong renovation brand should feel premium, reliable, and easy to trust from the
            first visit.
          </p>
        </div>

        <div className="cards-grid cards-4">
          {items.map((item, index) => (
            <div key={item.title} className="card card-dark why-card">
              <div className="card-icon">{index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
