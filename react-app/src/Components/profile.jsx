import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="profileComp">
        <div className="profileContainer">
          <h1 className="textMyProfile">My Profile</h1>
          <div className="profileImage">
            <img src="/images/user-profile.svg" alt="Profile Image" />
          </div>
          <div className="profileHline" />
          <div className="profileInfo">
            {/* form for inputs */}
            <form action="">
              {/* full name */}
              <div>
                <label htmlFor="">Full Name</label>
                <input type="text" name="" id="" placeholder="Your Name" />
              </div>
              {/* gender */}
              <div>
                <label htmlFor="">Gender</label>
                <input type="text" name="" id="" placeholder="Select Gender" />
              </div>
              {/* dob */}
              <div>
                <label htmlFor="">Date Of Birth</label>
                <input type="text" name="" id="" placeholder="DD-MM-YYYY" />
              </div>
              {/* city */}
              <div>
                <label htmlFor="">City</label>
                <input type="text" name="" id="" placeholder="Select City" />
              </div>

              <button>Save Changes</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
