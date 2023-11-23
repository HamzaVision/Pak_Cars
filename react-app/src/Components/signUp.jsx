import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function SignUp() {
  // history object to redirect to another route
  const history = useHistory();

  // form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [password, setPassword] = useState({
    ConfirmPassword: "",
  });

  const [error, setError] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check the password and confirm-password is same
    if (formData.password !== password.ConfirmPassword) {
      // setError("Password and Confirm Password must match");
      // setModalIsOpen(true);
      window.alert("Password and Confirm Password must match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3005/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., redirect or show a success message
        console.log("User added successfully");
        const data = await response.json();
        console.log(data);
        const loggedInUserId = data._id;

        const responseProfile = await fetch(
          "http://localhost:3005/api/profiles",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: loggedInUserId,
              fullName: formData.username,
            }),
          }
        );

        if (responseProfile.ok) {
          console.log("User Profile added successfully");
        }

        history.push(`/home/${loggedInUserId}`); // route of your home page
      } else {
        // Handle error, e.g., show an error message
        const data = await response.json();
        window.alert(data.error);
        // setError(data.error);
        // setModalIsOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setError("");
  };

  return (
    <div className="signUpContainer">
      <div className="titleContainer">
        <p className="titleText">
          Getting <br />
          Started With <br />
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
            <div style={styles.createAccountText}>Create Account</div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            <div style={styles.label}>
              <input
                style={styles.labelInput}
                type="password"
                name="ConfirmPassword"
                id="ConfirmPassword"
                value={password.ConfirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm Password"
                required
              />
            </div>

            <button style={styles.createAccountButton} type="submit">
              Create Account
            </button>

            <div style={styles.loginLink}>
              Already have an account?
              <Link
                to="/"
                style={{ textDecoration: "underline", color: "#1f485b" }}
              >
                {" "}
                Log In
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Error Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "300px",
            margin: "auto",
            marginTop: "100px",
            borderRadius: "5px",
            padding: "20px",
            backgroundColor: "#fff",
          },
        }}
      >
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={closeModal} style={{ marginTop: "10px" }}>
            Close
          </button>
        </div>
      </Modal>
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
    lineHeight: "35px",
    fontWeight: "800",
    fontFamily: "Roboto",
    color: "#000",
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
