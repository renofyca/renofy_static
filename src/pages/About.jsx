import CTASection from '../components/CTASection';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Renofy</h1>
          <p>
            Renofy is positioned as a premium renovation and construction brand serving homeowners
            in Toronto and the GTA with modern design, quality craftsmanship, and dependable
            service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid cards-3">
            <div className="card">
              <h3>Our Vision</h3>
              <p>
                To create beautiful, practical, and lasting home spaces that combine elegance with
                everyday functionality.
              </p>
            </div>

            <div className="card">
              <h3>Our Approach</h3>
              <p>
                We focus on clean finishes, thoughtful planning, transparent communication, and a
                professional client experience from start to finish.
              </p>
            </div>

            <div className="card">
              <h3>Our Focus Area</h3>
              <p>
                Kitchen renovations, bathroom remodeling, basement finishing, flooring, painting,
                and full-home upgrades across Toronto and the GTA.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
