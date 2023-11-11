import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="navtitle">
        <Link to="/">
          <img src="/images/logo.png" alt="" />
        </Link>
      </div>

      <div className={`navlist ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/NewCars">New Cars</Link>
          </li>
          <li>
            <Link to="/UsedCars">Used Cars</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/PostAnAdd" className="post-ad-button">
              Post an Add
            </Link>
          </li>
          <li>
            <div className="vertical-line"></div>
          </li>
          <li>
            <Link to="/SignIn" className="post-ad-button">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/SignUp" className="post-ad-button">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbtn" onClick={handleMenuToggle}>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
}
