import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <h1>Shop Fresh Ingredients for Your Pantry and More!</h1>

        <Link to="/products" className="link-no-underline">
          <button className="button-52">Shop Your Pantry Now</button>
        </Link>
      </section>
    </div>
  );
};

export default Hero;
