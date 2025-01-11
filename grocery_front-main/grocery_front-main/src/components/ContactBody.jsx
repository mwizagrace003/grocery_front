import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <div style={styles.contactInfo}>
        <h3 style={styles.contactTitle}>Get in Touch</h3>
        <div style={styles.contactDetails}>
          <p>
            <FaUser style={styles.icon} /> <strong>Name:</strong> Ishimwe Mwiza Grace
          </p>
          <p>
            <FaEnvelope style={styles.icon} /> <strong>Email:</strong> gracemwiza003@gmail.com
          </p>
          <p>
            <FaPhone style={styles.icon} /> <strong>Phone:</strong> +250 788 888 999
          </p>
          <p>
            <FaMapMarkerAlt style={styles.icon} /> <strong>Address:</strong> Kigali, Rwanda
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    fontFamily: "'Arial', sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f4f4f4",
    borderRadius: "12px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  title: {
    fontSize: "2em",
    color: "#2c3e50",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  contactInfo: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  contactTitle: {
    fontSize: "1.8em",
    color: "#34495e",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  contactDetails: {
    fontSize: "1.2em",
    color: "#555",
    textAlign: "left",
  },
  icon: {
    color: "#3498db",
    marginRight: "10px",
  },
};

export default ContactUs;
