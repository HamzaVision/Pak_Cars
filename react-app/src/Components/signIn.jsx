import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function SignIn() {
  const history = useHistory();

  // form data
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    Email: "",
  });

  //
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3005/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: formData.Email, // Replace with your actual form data
          Password: formData.Password,
        }),
      });

      if (response.ok) {
        // Handle successful login, e.g., redirect to home page
        console.log("Login successful");
        history.push("/home"); // route of your home page
      } else {
        // Handle login failure, e.g., display an error message
        console.error("Login failed");
        const data = await response.json();
        window.alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="signUpContainer">
      <div className="titleContainer">
        <p className="titleText">
          Welcome <br />
          Back To <br />
          PakCar
        </p>

        <img
          className="backgroundImage"
          alt="PakCar"
          src="/images/cars-container.webp"
        />
      </div>

      <div className="backgroundOverlay">
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <div style={styles.createAccountText}>Login to your Account</div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="text"
                name="Username"
                id="Username"
                value={formData.Username}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="email"
                name="Email"
                id="Email"
                value={formData.Email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="password"
                name="Password"
                id="Password"
                value={formData.Password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>

            <button style={styles.createAccountButton} type="submit">
              LogIn
            </button>

            <div style={styles.loginLink}>
              Don’t have an account?
              <Link
                to="/signup"
                style={{ textDecoration: "underline", color: "#1f485b" }}
              >
                {" "}
                Sign-up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const styles = {
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Center along the main axis (horizontally)
    alignItems: "center", // Center along the cross axis (vertically)
  },
  createAccountText: {
    marginTop: "80px",
    marginBottom: "30px",
    fontSize: "40px",
    letterSpacing: "0.08em",
    lineHeight: "40px",
    fontWeight: "800",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "center",
  },
  label: {
    margin: "30px 0px 0px 0px",
    width: "60%",
  },
  labelInput: {
    border: "none", // Remove default borders
    borderBottom: "3px solid #C2C2C2", // Set a bottom border with your desired color
    outline: "none", // Remove the default input outline
    padding: "5px", // Add some padding for better visual appearance
    fontFamily: "Roboto",
    width: "100%",
    color: "#837F7F",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "25px",
    letterSpacing: "1.6px",
  },
  loginLink: {
    color: "#7c7c7c",
    fontFamily: "Roboto",
    marginTop: "10px",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "35px",
    letterSpacing: "1.28px",
  },

  createAccountButton: {
    borderRadius: "5px",
    backgroundColor: "#1f485b",
    width: "513px",
    height: "57px",
    border: "none",
    fontSize: "24px",
    letterSpacing: "0.08em",
    lineHeight: "35px",
    fontWeight: "800",
    fontFamily: "Roboto",
    color: "#fff",
    marginTop: "60px",
    marginLeft: "10px",
    marginRight: "10px",
  },
};
