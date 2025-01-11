import React from "react";
import "../styles/adminnav.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ active, language, onLanguageChange }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
    console.log("Logout");
  };
  return (
    <nav className="navbar">
      <a href="/admin" className="brand">
        Grocery Store Admin
      </a>

      <div className="nav-links">
        <a
          href="/usermgt"
          className={`nav-link ${active === "users" ? "active" : ""}`}
        >
          <i className=""></i>
          <span>Users</span>
        </a>
        <a
          href="/admin"
          className={`nav-link ${active === "furniture" ? "active" : ""}`}
        >
          <i className=""></i>
          <span>Product</span>
        </a>

        <a
          href="/admin/notifications"
          className={`nav-link ${active === "notifications" ? "active" : ""}`}
        >
          <i className=""></i>
          <span>Notifications</span>
        </a>
        <a
          href="/admin/user-role-stats"
          className={`nav-link ${active === "analytics" ? "active" : ""}`}
        >
          <i className=""></i>
          <span>User Statistics</span>
        </a>
      </div>

      <div className="right-section">
        {/* <select
          className="language-switch"
          id="languageSelect"
          value={language}
          onChange={(e) => onLanguageChange(e.target.value)}
        >
          <option value="en" selected={language === "en"}>
            English
          </option>
          <option value="es" selected={language === "es"}>
            Español
          </option>
          <option value="fr" selected={language === "fr"}>
            Français
          </option>
        </select> */}

        <a className="dropdown-item" onClick={handleLogout}>
          <i className=""></i>
          Logout
        </a>
        {/* <div className="profile-section">
          <div className="profile-dropdown">
            <div className="profile-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="dropdown-content">
              <a href="#" className="dropdown-item">
                <i className="fas fa-user-circle"></i>
                My Profile
              </a>
              <a href="#" className="dropdown-item">
                <i className="fas fa-cog"></i>
                Settings
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
