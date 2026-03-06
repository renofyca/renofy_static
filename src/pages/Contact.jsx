export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Renofy</h1>
          <p>
            Make it simple for potential clients to reach you for renovation enquiries, quote
            requests, and project discussions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-box">
          <div className="form-card">
            <h2 style={{ marginTop: 0 }}>Request a Free Quote</h2>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              This is the contact form layout. Later we can connect it to Formspree or EmailJS.
            </p>

            <form className="form-grid">
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Phone Number" />
              <input type="email" placeholder="Email Address" />
              <select defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                <option>Kitchen Renovation</option>
                <option>Bathroom Renovation</option>
                <option>Basement Finishing</option>
                <option>Flooring</option>
                <option>Painting</option>
                <option>Full Home Renovation</option>
              </select>
              <input type="text" placeholder="Project Location" />
              <textarea placeholder="Tell us about your project" />
              <button type="button" className="btn btn-gold">
                Send Enquiry
              </button>
            </form>

            <div className="placeholder-note">
              Replace this with your real form integration later. For now, this gives you the full
              page design and layout.
            </div>
          </div>

          <div className="info-card">
            <h2 style={{ marginTop: 0 }}>Contact Information</h2>
            <p style={{ color: '#666', lineHeight: 1.7 }}>
              Keep your phone, WhatsApp, and service area highly visible so visitors can contact you
              quickly.
            </p>

            <div className="info-list">
              <div className="info-item">
                <strong>Phone</strong>
                <span>+1 xxx xxx 7286</span>
              </div>

              <div className="info-item">
                <strong>WhatsApp</strong>
                <span>Available for quick enquiries</span>
              </div>

              <div className="info-item">
                <strong>Email</strong>
                <span>info@renofy.ca</span>
              </div>

              <div className="info-item">
                <strong>Service Area</strong>
                <span>Toronto and the GTA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
