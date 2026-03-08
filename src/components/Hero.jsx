import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-video-container">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src="/renofy_static/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <h1>
          Premium <span>Construction</span> & Renovation
        </h1>

        <p>
          Transform your home with modern design, quality craftsmanship,
          and trusted renovation services across Toronto and the GTA.
        </p>

        <div className="hero-actions">
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
