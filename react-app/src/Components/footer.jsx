/* 
  This component is used to render the footer of the website.
  It takes the following props:
  1. id: The user ID
  
  It is used in the other components as follows:
  1. home.jsx
  2. usedCars.jsx
  3. myAds.jsx
  4. myProfile.jsx
  5. postCarAdd.jsx
*/
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Footer() {
  const { id } = useParams();
  return (
    <footer>
      <div>
        <div className="footerBox">
          <div className="footerLinks">
            <h2>Navigation</h2>
            <ul>
              <li>
                <Link to={`/home/${id}`}>Home</Link>
              </li>
              <li>
                <Link to="/usedCars">Buy Cars</Link>
              </li>
              <li>
                <Link to={`/myAds/${id}`}>My Ads</Link>
              </li>
              <li>
                <Link to={`/myProfile/${id}`}>Profile</Link>
              </li>
              <li>
                <Link to={`/postCarAdd/${id}`}>Post an Add</Link>
              </li>
            </ul>
          </div>

          <div className="footerLinks">
            <h2>Follow Us</h2>
            <ul>
              <li>
                <a href="www.facebook.com">Facebook</a>
              </li>
              <li>
                <a href="www.facebook.com">Instagram</a>
              </li>
              <li>
                <a href="www.facebook.com">Twitter</a>
              </li>
              <li>
                <a href="www.facebook.com">Linkedin</a>
              </li>
            </ul>
          </div>

          <div className="footerContactUs">
            <h2>Contact Us</h2>

            <label htmlFor="Name">Name</label>
            <br />
            <input type="text" name="name" id="name" />

            <br />

            <label htmlFor="Email">Email</label>
            <br />
            <input type="email" name="email" id="email" />
            <br />
            <label htmlFor="Message">Message</label>
            <br />
            <textarea name="message" id="message" cols="30" rows="4"></textarea>
          </div>
        </div>
      </div>

      <div
        style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}
      >
        © All Rights Reserved. Powered by{" "}
        <a href="/" style={{ textDecoration: "none", color: "white" }}>
          PakCar
        </a>
      </div>
    </footer>
  );
}
