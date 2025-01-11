import React from "react";
import "../styles/header.css";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div>
      <nav className="header-nav">
        <div id="logo">
          <Link to="/" className="logo-text">GROCERY STORE</Link>
        </div>

        <ul className="navigation-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div id="search-cart">
          <input
            type="text"
            placeholder="Search for products..."
            className="search-bar"
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
          <Link to="/products" className="cart-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </div>

        <div id="utility">
          {/* <Link to="/register" className="link-no-underline">
            <button className="button-86">
              <FontAwesomeIcon icon={faUserPlus} /> Get Started
            </button>
          </Link> */}

          <Link to="/login" className="link-no-underline">
            <button className="button-86">
              <FontAwesomeIcon icon={faSignInAlt} /> Get Started
            </button>
          </Link>

          {/* <div className="dropdown">
            <button className="dropdown-button">Account ▼</button>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/logout">Logout</Link>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
  );
};

export default Header;
