import React from "react";
import "../styles/AboutUsBody.css";

const AboutUsBody = () => {
  return (
    <div>
      <section id="about-us">
        <div className="about-container">
          <h2>About Us</h2>
          <p className="vision">
            Our mission is to provide top-quality products
          </p>
          <div className="team-section">
            <h3>Meet Our Team</h3>
            <div className="team-members">
              <div className="team-member">
                <h4>Ishimwe Mwiza Grace</h4>
                <p>CEO & Founder</p>
                <p>
                  Grace is the visionary behind our company.
                </p>
              </div>
              <div className="team-member">
                <h4>Joy Irakoze</h4>
                <p>Chief products</p>
                <p>
                  Joy leads the product development team, ensuring every product meets the highest standards of quality.
                </p>
              </div>
              <div className="team-member">
                <h4>Buntu Caleb Levy</h4>
                <p>Product Manager</p>
                <p>
                  Caleb is committed to environmental sustainability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsBody;
