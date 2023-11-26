import "../Styles/postCarAdd.css";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";
import axios from "axios";
import MapContainer from "./mapContainer";

export default function PostCarAdd() {
  const { id } = useParams();
  const history = useHistory();

  // State to store car data
  const [carData, setCarData] = useState({
    registrationCity: "",
    brandId: "",
    model: "",
    year: "",
    fuelAverage: "",
    transmission: "Auto",
    fuelType: "Petrol",
    engineCapacity: "",
    price: "",
    imagePath: "",
  });

  // State to store ad data
  const [adData, setAdData] = useState({
    carId: "0",
    userId: id,
    phone: "",
    address: "",
    location: { lat: 0, lng: 0 },
  });

  // list of car brands
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB
    axios
      .get("http://localhost:3005/api/brands") // API endpoint for car brands
      .then((response) => {
        setBrands(response.data);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []); // Empty dependency array ensures the effect runs only on mount

  // Handle form input changes for car data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form input changes for ad data
  const handleAdInputChange = (e) => {
    const { name, value } = e.target;
    setAdData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle location change
  const handleLocationChange = (location) => {
    setAdData((prevData) => ({
      ...prevData,
      location,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks for car data
    if (
      Object.values(carData).some((value) => value === "") ||
      Object.values(adData).some((value) => value === "") ||
      !adData.location ||
      !adData.carId
    ) {
      window.alert("Please fill in all required fields.");
      return;
    }

    try {
      // Make POST request to create a new car
      const carResponse = await fetch("http://localhost:3005/api/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(carData),
      });

      //   const formData = new FormData();

      //   // Add car data to the formData
      //   Object.entries(carData).forEach(([key, value]) => {
      //     formData.append(key, value);
      //   });

      //   // Add the image file to the formData
      //   if (carData.imagePath instanceof File) {
      //     formData.append("image", carData.imagePath);
      //   }

      //   const carResponse = await fetch("http://localhost:3005/api/cars", {
      //     method: "POST",
      //     body: formData,
      //   });

      // Check if response is ok
      if (!carResponse.ok) {
        const carData = await carResponse.json();
        throw new Error(carData.error);
      }

      // Get car data
      const data = await carResponse.json();

      // Add ad data
      adData.carId = data._id;
      adData.location = JSON.stringify(adData.location); // Convert location object to string

      // Make POST request to create a new ad
      const adResponse = await fetch("http://localhost:3005/api/ads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adData),
      });

      // Check if response is ok
      if (!adResponse.ok) {
        const adData = await adResponse.json();
        throw new Error(adData.error);
      }

      // Navigate to the home page
      window.alert("Ad posted successfully!");
      history.push(`/myAds/${id}`);
    } catch (error) {
      console.error("Error:", error);
      window.alert("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <form>
        <div className="postAddPage">
          <h1 className="textTitle">
            Sell your Car With 3 Easy & Simple Steps!
          </h1>
          <h2 className="textTitle">It's free and takes less than a minute</h2>

          {/* Car Information */}
          <div className="postAdContainer">
            <h1 className="textContainerTitle">Car Information</h1>
            <div className="postCarHline" />

            <div className="PostCarInfo">
              {/* form for inputs */}

              {/* registration city */}
              <div>
                <label htmlFor="registrationCity">Registration City</label>
                <input
                  type="text"
                  id="registrationCity"
                  name="registrationCity"
                  placeholder="Registration City of Car"
                  required
                  value={carData.registrationCity}
                  onChange={handleInputChange}
                />
              </div>

              {/* brand */}
              <div>
                <label htmlFor="brand">Brand</label>
                <select
                  id="brandId"
                  name="brandId"
                  required
                  value={carData.brandId}
                  onChange={handleInputChange}
                >
                  <option>Select Brand of Car</option>
                  {brands.map((brand) => (
                    <option key={brand._id} value={brand._id}>
                      {brand.brandName}
                    </option>
                  ))}
                </select>
              </div>

              {/* model */}
              <div>
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  placeholder="Model of Car"
                  required
                  value={carData.model}
                  onChange={handleInputChange}
                />
              </div>

              {/* year */}
              <div>
                <label htmlFor="year">Model Year</label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  placeholder="year"
                  required
                  min={1900}
                  max={new Date().getFullYear()}
                  value={carData.year}
                  onChange={handleInputChange}
                />
              </div>

              {/* transmission */}
              <div>
                <label htmlFor="transmission">City</label>
                <select
                  id="transmission"
                  name="transmission"
                  required
                  value={carData.transmission}
                  onChange={handleInputChange}
                >
                  <option value="Auto">Auto</option>
                  <option value="Manual">Manual</option>
                  <option value="Semi-Auto">Semi-Auto</option>
                </select>
              </div>

              {/* Fuel Type */}
              <div>
                <label htmlFor="fuelType">Fuel Type</label>
                <select
                  id="fuelType"
                  name="fuelType"
                  required
                  value={carData.fuelType}
                  onChange={handleInputChange}
                >
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              {/* fuel average */}
              <div>
                <label htmlFor="fuelAverage">Fuel Average</label>
                <input
                  type="number"
                  id="fuelAverage"
                  name="fuelAverage"
                  placeholder="Fuel Average Fuel/km"
                  required
                  value={carData.fuelAverage}
                  onChange={handleInputChange}
                />
              </div>

              {/* Engine Capacity */}
              <div>
                <label htmlFor="engineCapacity">Engine Capacity</label>
                <input
                  type="number"
                  id="engineCapacity"
                  name="engineCapacity"
                  placeholder="Engine Capacity (CC)"
                  required
                  min={0}
                  value={carData.engineCapacity}
                  onChange={handleInputChange}
                />
              </div>

              {/* price */}
              <div>
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Price in PKR"
                  required
                  min={0}
                  value={carData.price}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Upload Photo */}
          <div className="postAdContainer">
            <h1 className="textContainerTitle">Upload Photo</h1>
            <div className="postCarHline" />

            {/* form for inputs */}
            <div className="PostCarInfo">
              {/* Upload Photo Preview */}
              <div className="uploadPhotoPreview">
                <img src={carData.imagePath} alt="" />
              </div>

              {/* File Input for Image Upload */}
              <input
                type="file"
                name="imagePath"
                onChange={handleInputChange}
                required
                accept="image/*"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="postAdContainer">
            <h1 className="textContainerTitle">Contact Information</h1>
            <div className="postCarHline" />

            {/* form for inputs */}
            <div className="PostCarInfo">
              {/* Phone Number */}
              <div>
                <label htmlFor="phone">Phone #</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number (03xx-xxxxxxx)"
                  required
                  maxLength={11}
                  minLength={11}
                  value={adData.phone}
                  onChange={handleAdInputChange}
                />
              </div>

              {/* address */}
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder="Address"
                  value={adData.address}
                  onChange={handleAdInputChange}
                />
              </div>

              {/* Location with Google Map */}
              <div className="mapLocation">
                <label htmlFor="location">Location</label>

                <MapContainer onLocationChange={handleLocationChange} />
              </div>
            </div>
          </div>

          <button className="postAdBtn" type="submit" onClick={handleSubmit}>
            Post Ad
          </button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
}
