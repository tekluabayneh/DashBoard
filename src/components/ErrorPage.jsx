import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css"; // External CSS file for styling

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <div className="link-container">
        <h2 className="navigate-title">Quick Links</h2>
        <ul className="link-list">
          <li>
            <Link to="/DashBoard" className="error-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/table" className="error-link">
              Table
            </Link>
          </li>
          <li>
            <Link to="/billing" className="error-link">
              Billing
            </Link>
          </li>
          <li>
            <Link to="/profile" className="error-link">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/login" className="error-link">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="error-link">
              Regisster
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorPage;
