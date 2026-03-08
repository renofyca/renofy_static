import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-video-container">

      {/* Background Video */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/renofy_static/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content container">

        <h1>
          Transform Your Home with <span>Renofy</span>
        </h1>

        <p>
          Premium construction and renovation services across Toronto and the GTA.
          We deliver modern designs, quality craftsmanship, and beautiful living spaces.
        </p>

        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-gold">
            Get Free Quote
          </Link>

          <Link to="/projects" className="btn btn-secondary">
            View Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
