import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-video-container">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/renofy_static/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content-wrapper">
        <div className="container hero-content">
          <div className="hero-badge">Toronto • GTA • Premium Renovation Services</div>

          <h1>
            Build Your Dream Home with <span>Renofy</span>
          </h1>

          <p>
            Premium construction and renovation services across Toronto and the GTA.
            We create modern, functional, and beautiful living spaces with trusted workmanship.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-gold">
              Get Free Quote
            </Link>

            <Link to="/projects" className="btn btn-secondary hero-outline-btn">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
