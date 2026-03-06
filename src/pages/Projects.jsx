import projects from '../data/projects';
import CTASection from '../components/CTASection';

export default function Projects() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>
            Showcase your renovation quality with project highlights that build confidence and help
            potential clients visualize the end result.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid cards-3">
            {projects.map((project, index) => (
              <div key={project.id} className="card project-card">
                <div
                  className="project-image"
                  style={{
                    background:
                      index === 0
                        ? 'linear-gradient(135deg, #ece6dc, #d7c6a8)'
                        : index === 1
                        ? 'linear-gradient(135deg, #efefef, #d9d9d9)'
                        : 'linear-gradient(135deg, #d9d2c5, #b8a58b)'
                  }}
                />
                <div className="project-body">
                  <span className="project-location">{project.location}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
