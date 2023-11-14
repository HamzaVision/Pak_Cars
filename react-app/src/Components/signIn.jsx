import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
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
        <form action="" method="post">
          <div style={styles.inputContainer}>
            <div style={styles.createAccountText}>Login to your Account</div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
              />
            </div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <button style={styles.createAccountButton} type="button">
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
