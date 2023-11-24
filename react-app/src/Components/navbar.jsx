import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { id } = useParams();

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
            <Link to={`/home/${id}`}>Home</Link>
          </li>
          <li>
            <Link to="/NewCars">New Cars</Link>
          </li>
          <li>
            <Link to="/UsedCars">Used Cars</Link>
          </li>
          <li>
            <Link to={`/myProfile/${id}`}>Profile</Link>
          </li>
          <li>
            <Link to={`/postCarAdd/${id}`} className="post-ad-button">
              Post an Add
            </Link>
          </li>
          <li>
            <div className="vertical-line"></div>
          </li>
          <li>
            <Link to="/" className="post-ad-button">
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
