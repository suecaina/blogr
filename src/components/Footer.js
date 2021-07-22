import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2 className="blogr">Blogr</h2>
          </div>

          <div className="footer-link-items">
            <h2>Products</h2>
            <Link to="./sign-up">Overview</Link>
            <Link to="./sign-up">Pricing</Link>
            <Link to="./sign-up">Marketplace</Link>
            <Link to="./sign-up">Features</Link>
            <Link to="./sign-up">Intergrations</Link>
          </div>

          <div className="footer-link-items">
            <h2>Company</h2>
            <Link to="./sign-up">About</Link>
            <Link to="./sign-up">Team</Link>
            <Link to="./sign-up">Blog</Link>
            <Link to="./sign-up">Careers</Link>
          </div>

          <div className="footer-link-items">
            <h2>Connect</h2>
            <Link to="./sign-up">Contact</Link>
            <Link to="./sign-up">Newsletter</Link>
            <Link to="./sign-up">Linkedin</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
