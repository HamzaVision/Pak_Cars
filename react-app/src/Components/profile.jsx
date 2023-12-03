/*
  This component is used to display the user profile data and update it.
  It takes the following props:
  1. id: The user ID

  It uses the following env variables:
  1. REACT_APP_BACKEND_URL

  It renders the following components:
  1. Navbar
  2. Footer
*/
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const MyProfile = () => {
  // State to store user profile data
  const [profileData, setProfileData] = useState({
    userId: "",
    fullName: "",
    gender: "",
    city: "",
    dob: "",
  });

  const { id } = useParams();

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = id;
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/profiles/${userId}`
        );
        setProfileData(response.data);

        const userDob = new Date(response.data.dob);
        // Format the date as "yyyy-mm-dd" for the input field with type "date"
        const formattedDate = `${userDob.getFullYear()}-${(
          userDob.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}-${userDob.getDate().toString().padStart(2, "0")}`;

        console.log("formattedDate", formattedDate);
        setProfileData((prevData) => ({
          ...prevData,
          dob: formattedDate,
        }));
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [id]); // Dependency array with 'id'

  // Update user profile data
  const handleSaveChanges = async () => {
    console.log("Profile updated enter");
    console.log(profileData);
    try {
      // Replace 'userId' with the actual user ID or get it from your authentication system
      const userId = id;
      await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/profiles/${userId}`,
        profileData
      );
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="profileComp">
        <div className="profileContainer">
          <h1 className="textMyProfile">My Profile</h1>
          <div className="profileImage">
            <img src="/images/user-profile.svg" alt="Profile" />
          </div>
          <div className="profileHline" />
          <div className="profileInfo">
            {/* form for inputs */}
            <form>
              {/* Full Name */}
              <div>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={profileData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              {/* Gender */}
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={profileData.gender}
                  onChange={handleInputChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              {/* Date of Birth */}
              <div>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={profileData.dob}
                  onChange={handleInputChange}
                />
              </div>
              {/* City */}
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={profileData.city}
                  onChange={handleInputChange}
                />
              </div>
              {/* Save Changes Button */}
              <button type="button" onClick={handleSaveChanges}>
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
