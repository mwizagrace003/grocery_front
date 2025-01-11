import React from "react";
import "../styles/styles.css";
import img1 from "../assets/img/kuwa.jpg";
import img2 from "../assets/img/sam.jpg";
import img3 from "../assets/img/dudu.jpg";

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials">
        <h2>What Our Clients Say</h2>
        <p class="section-description">
          Hear from our satisfied customers who have transformed their spaces
          with our Grocery services.
        </p>
        <div class="testimonial-container">
          <div class="testimonial-card">
            <div class="testimonial-image">
              <img src={img1} alt="Client 1" />
            </div>
            <div class="testimonial-content">
              <p class="quote">
                "T."
              </p>
              <h4 class="client-name">Himbazimana Samuel</h4>
              <span class="client-role">Client</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-image">
              <img src={img2} alt="Client 2" />
            </div>
            <div class="testimonial-content">
              <p class="quote">
                "Custom."
              </p>
              <h4 class="client-name">Kayigamba Aime Dukunde</h4>
              <span class="client-role">Client</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-image">
              <img src={img3} alt="Client 3" />
            </div>
            <div class="testimonial-content">
              <p class="quote">
                "I."
              </p>
              <h4 class="client-name">Bizimungu Aristide</h4>
              <span class="client-role">Client</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
