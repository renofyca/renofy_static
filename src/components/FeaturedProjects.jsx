import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function FeaturedProjects() {
  return (
    <section className="section" style={{ background: '#fafafa' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '42px' }}>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Project showcases help visitors trust your work before they contact you.
          </p>
        </div>

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

        <div className="text-center" style={{ marginTop: '28px' }}>
          <Link to="/projects" className="btn btn-primary">
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
