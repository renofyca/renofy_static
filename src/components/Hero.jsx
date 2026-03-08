import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="video-hero">
      <video autoPlay muted loop playsInline className="video-hero__video">
        <source src="/renofy_static/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="video-hero__overlay"></div>

      <div className="video-hero__inner container">
        <div className="video-hero__content">
          <div className="video-hero__badge">
            Toronto • GTA • Premium Renovation Services
          </div>

          <h1 className="video-hero__title">
            Build Your Dream Home with <span>Renofy</span>
          </h1>

          <p className="video-hero__text">
            Premium construction and renovation services across Toronto and the GTA.
            We create modern, functional, and beautiful living spaces with trusted workmanship.
          </p>

          <div className="video-hero__buttons">
            <Link to="/contact" className="btn btn-gold">
              Get Free Quote
            </Link>

            <Link to="/projects" className="video-hero__outline-btn">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
